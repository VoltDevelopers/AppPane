import OrderElement from './order-element.js';
import CookieManager from "../../common/js/cookie-manager.js";
import UtilsFetch from "../../common/js/utils-fetch.js";

const orderStatus = document.querySelector(".wrapper-name");

/*let temp = new OrderElement(document.querySelector('.wrapper-order'));
temp.init();
temp.setOrderId('23');
temp.setOrderDate('22 Settembre 2022');
temp.setOrderAddress('Via del ronco 27');
temp.setOrderProduct('Black bread');
temp.setOrderPrice('25$');

let temp2 = new OrderElement(document.querySelector('.wrapper-order'));
temp2.init();
temp2.setOrderId('12');
temp2.setOrderPrice('45$');
temp2.setOrderProduct('Choccolate bread');
temp2.setOrderProduct('Choccolate bread');
temp2.setOrderProduct('Choccolate bread');
temp2.setOrderProduct('Choccolate bread');
temp2.setOrderProduct('Choccolate bread');
temp2.setOrderDate('22 Novembre 2022');
temp2.setOrderAddress('Via del pane 27');*/

const clientId = CookieManager.getCookie('user_id');
console.log(clientId);
let orderList;
const data = {

    'clientId': clientId,

};

await UtilsFetch.postData('./php/list-order-connection.php', data)
    .then((response) => {
        if (response.status == '200') {
            console.log(response.data);
            orderList = JSON.parse(response.data);
            orderStatus.innerHTML = "I tuoi ordini:";
            assignData();

        } else {

            console.log(response.data);
            orderStatus.innerHTML = "Non ci sono ordini precedenti";

        }
    });

function assignData() {
    orderList.forEach(order => {
        const temp = new OrderElement(document.querySelector('.wrapper-order'));
        temp.init();
        temp.setOrderId(order['idOrdine']);
        temp.setOrderPrice(order['prezzo']);
        //SET products
        //SET quantity
        //SET address


    });
}

