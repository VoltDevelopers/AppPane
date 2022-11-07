import ProductPageElement from "./product-page-element.js";
import CookieManager from "../../common/js/cookie-manager.js";
import UtilsFetch from "../../common/js/utils-fetch.js";

const idProduct = CookieManager.getCookie('temp_id_product');
console.log(idProduct);

const data = {

    'idProduct' : idProduct,

};

UtilsFetch.postData('./php/product-connection.php', data)
   .then((response) => {
        console.log(response);
   });

let temp = new ProductPageElement(document.querySelector(".main-container"));
temp.init();
temp.setProductImg("");
temp.setProductName("pizza margherita");
temp.setProductPrice("34$");
temp.setProductDescription("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
temp.setProductImg('../common/img-product/bread-1.jpg');