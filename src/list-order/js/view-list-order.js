import OrderElement from './order-element.js';

let temp = new OrderElement(document.querySelector('.wrapper-order'));
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
temp2.setOrderAddress('Via del pane 27');
