import OrderElement from './order-element.js';

let temp = new OrderElement(document.querySelector('.wrapper-order'));
temp.init();
temp.setOrderId('23');
temp.setOrderDate('22 Settembre 2022');
temp.setOrderAddress('Via del ronco 27');
temp.setOrderProduct('Black bread');
temp.setOrderPrice('25');


let temp2 = new OrderElement(document.querySelector('.wrapper-order'));
temp2.init();
temp2.setOrderId('23');
temp2.setOrderPrice('25');
temp2.setOrderProduct('Black bread');
temp2.setOrderDate('22 Settembre 2022');
temp2.setOrderAddress('Via del ronco 27');
