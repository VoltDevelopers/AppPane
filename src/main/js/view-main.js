import ProductElement from './product-element.js';

let temp = new ProductElement(document.querySelector('.temp'));
temp.init();
temp.setProductId('23');
temp.setProductImg('../img/');
temp.setProductTag('Pz');
temp.setProductName('Pane');
temp.setProductPrice('4.55$');

let temp2 = new ProductElement(document.querySelector('.temp'));
temp2.init();
temp2.setProductId('24');
temp2.setProductImg('../img/');
temp2.setProductTag('Pa');
temp2.setProductName('Pane Super');
temp2.setProductPrice('5.55$');
