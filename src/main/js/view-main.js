import ProductElement from './product-element.js';
import ProductManager from './product-manager.js';
import FilterElement from './filter-element.js';
import FilterManager from './filter-manager.js';


let temp = new ProductElement(document.querySelector('.wrapper-products'));
temp.init();
temp.setProductId('23');
temp.setProductImg('../common/img-product/bread-1.jpg');
temp.setProductTag('Pizza');
temp.setProductName('Pane');
temp.setProductPrice('4.55$');

let temp2 = new ProductElement(document.querySelector('.wrapper-products'));
temp2.init();
temp2.setProductId('24');
temp2.setProductImg('../common/img-product/bread-2.jpg');
temp2.setProductTag('Pane');
temp2.setProductName('Pane Super');
temp2.setProductPrice('5.55$');

let temp3 = new ProductElement(document.querySelector('.wrapper-products'));
temp3.init();
temp3.setProductId('24');
temp3.setProductImg('../common/img-product/bread-1.jpg');
temp3.setProductTag('Pane');
temp3.setProductName('Pane Super');
temp3.setProductPrice('5.55$');

const products = [temp, temp2, temp3];

const productManager = new ProductManager(products);

let filter1 = new FilterElement(document.querySelector('.wrapper-filtrs'), productManager, 'Pizza');
filter1.init();
let filter2 = new FilterElement(document.querySelector('.wrapper-filtrs'), productManager, 'Pane');
filter2.init();

const filters = [filter1, filter2];

const filterManager = new FilterManager(filters);
