import ValidationLogin from './validation-login.js';

const parentElement = document.querySelector('.wrapper-form-login');

let temp = new ValidationLogin(parentElement);
temp.init();