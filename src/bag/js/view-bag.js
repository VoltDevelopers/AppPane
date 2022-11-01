import ProductInBagElement from './product-in-bag-element.js';

const parentElement = document.querySelector(".articles-wrapper");

let temp = new ProductInBagElement(parentElement);
temp.init();