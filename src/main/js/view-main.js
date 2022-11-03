import ProductElement from './product-element.js';

let temp = new ProductElement(document.querySelector('.wrapper-products'));
temp.init();
temp.setProductId('23');
temp.setProductImg('../common/img-product/bread-1.jpg');
temp.setProductTag('Pz');
temp.setProductName('Pane');
temp.setProductPrice('4.55$');

let temp2 = new ProductElement(document.querySelector('.wrapper-products'));
temp2.init();
temp2.setProductId('24');
temp2.setProductImg('../common/img-product/bread-2.jpg');
temp2.setProductTag('Pa');
temp2.setProductName('Pane Super');
temp2.setProductPrice('5.55$');

let temp3 = new ProductElement(document.querySelector('.wrapper-products'));
temp3.init();
temp3.setProductId('24');
temp3.setProductImg('../common/img-product/bread-1.jpg');
temp3.setProductTag('Pa');
temp3.setProductName('Pane Super');
temp3.setProductPrice('5.55$');
