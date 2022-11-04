import ProductPageElement from "./product-page-element.js";

let productId = sessionStorage.getItem("productId");
let temp = new ProductPageElement(document.querySelector(".main-container"));
temp.init();
temp.setProductImg("");
temp.setProductName("pizza margherita");
temp.setProductPrice("34$");
temp.setProductDescription("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
