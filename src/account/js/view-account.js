import ValidationFormPersonalData from './account-validation-personal-data.js';
import ValidationFormCredentionals from './account-validation-credentials.js';

let temp1 = new ValidationFormCredentionals(document.querySelector('#modify-credentianl'));
let temp2 = new ValidationFormPersonalData(document.querySelector('#modify-personal-data'));

temp1.init();
temp2.init();