import ProductPageElement from "./product-page-element.js";
import CookieManager from "../../common/js/cookie-manager.js";
import UtilsFetch from "../../common/js/utils-fetch.js";

const idProduct = CookieManager.getCookie('temp_id_product');
let product = [];

const data = {

    'idProduct': idProduct,

};

UtilsFetch.postData('./php/product-connection.php', data)
    .then((response) => {
        if (response.status == '200') {

            product = JSON.parse(response.data);
            let temp = new ProductPageElement(document.querySelector(".main-container"));
            temp.init();
            temp.setProductId(idProduct);
            temp.setProductImg(product['foto']);
            temp.setProductName(product['nome']);
            temp.setProductPrice(product['prezzo']);
            temp.setProductDescription(product['descrizione']);
            temp.setProductImg('../common/' + product['foto']);


        } else {

            console.log(response.data);

        }
    });