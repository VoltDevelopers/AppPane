import ProductInBagElement from './product-in-bag-element.js';

const parentElement = document.querySelector(".articles-wrapper");

let temp1 = new ProductInBagElement(parentElement);
temp1.init();
temp1.setProductInBagId("4");
temp1.setProductInBagName('pane pizza');
temp1.setProductInBagDescription('Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Doneceu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.Quisque sit amet est et sapien ullamcorper');
temp1.setProductInBagCurrentQuantity("5");
temp1.setProductInBagPrice("43$");

let temp2 = new ProductInBagElement(parentElement);
temp2.init();
temp2.setProductInBagId("6");
temp2.setProductInBagName('pizza margherita');
temp2.setProductInBagDescription('Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Doneceu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.Quisque sit amet est et sapien ullamcorper');
temp2.setProductInBagCurrentQuantity("2");
temp2.setProductInBagPrice("45$");