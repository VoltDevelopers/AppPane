import CookieManager from "../../common/js/cookie-manager.js";
import UtilsFetch from '../../common/js/utils-fetch.js';
import ProductInBagElement from './product-in-bag-element.js';

const wrapperProducts = document.querySelector('.articles-wrapper');
const data = {
    'idClient': CookieManager.getCookie('user_auth'),
    'token': CookieManager.getCookie('user_id'),
};

const productInBagList = [];
const productList = [];

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
            });
        } else {
            console.log(response);
            // todo log error
        }
    });