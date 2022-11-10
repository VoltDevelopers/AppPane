import ValidationFormPersonalData from "./validation-shipping-data.js";

const parent = document.querySelector('.wrapper-form');

const validation = new ValidationFormPersonalData(parent);
validation.init();