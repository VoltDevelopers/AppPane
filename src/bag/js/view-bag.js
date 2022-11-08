import CookieManager from "../../common/js/cookie-manager.js";
import UtilsFetch from '../../common/js/utils-fetch.js';
import ProductInBagElement from './product-in-bag-element.js';
import ManagerCreateOrder from "./manager-create-order.js";

const wrapperProducts = document.querySelector('.articles-wrapper');
const wrapperOrder = document.querySelector('.order-all');
const data = {
    'idClient': CookieManager.getCookie('user_auth'),
    'token': CookieManager.getCookie('user_id'),
};

const temp = new ManagerCreateOrder(wrapperOrder);
temp.init();

const productInBagList = [];
const productList = [];
let totalPrice = 0;

await UtilsFetch.postData('./php/bag-product.php', data)
    .then(response => {
        if (response.status == '200') {
            const productData = JSON.parse(response.data);
            console.log(productData);
            productData.forEach(productElement => {
                const product = new ProductInBagElement(wrapperProducts);
                product.init();
                product.setProductInBagId(productElement['id']);
                product.setProductInBagName(productElement['nome']);
                product.setProductInBagDescription(productElement['descrizione']);
                product.setProductInBagCurrentQuantity(productElement['quantita']);
                product.setProductInBagPrice(productElement['prezzo']);
                productList.push(product);

                totalPrice += parseInt(productElement['prezzo']);
                temp.setOrderProduct(productElement['nome'], productElement['quantita']);
            });
            temp.setTotalPrice(totalPrice);
        } else {
            console.log(response);
            // todo log error
        }
    });

