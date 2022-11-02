import {ValidationFormCredentionals ,  ValidationFormPersonalData} from './validation-account.js';
let temp1 = new ValidationFormCredentionals(document.querySelector('#modify-credentianl'));
let temp2 = new ValidationFormPersonalData(document.querySelector('#modify-personal-data'));
temp1.init();
temp2.init();