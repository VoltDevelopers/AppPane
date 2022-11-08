import OrderElement from './order-element.js';
import CookieManager from "../../common/js/cookie-manager.js";
import UtilsFetch from "../../common/js/utils-fetch.js";

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

const clientId = 22;

const data = {

    'orderId': clientId,

};

UtilsFetch.postData('./php/product-connection.php', data)
    .then((response) => {
        if(response.status == '200'){
            console.log(response.data);

        }else {

            console.log(response.data);

        }


    });


