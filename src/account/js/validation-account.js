import UtilsForm from '../../common/js/utlis-form.js';

class ValidationFormCredentionals
{
    constructor(parentElement) {
        this.rootElement = parentElement;
        this.elements = {};

        this.utilsForm = new UtilsForm(this.rootElement);
    }

    init() {
        this.initElements();
        this.initEventListener();
    }

    initElements() {
        this.utilsForm.init();
    }

    initEventListener() {
    }
}

class ValidationFormPersonalData
{
    constructor(parentElement) {
        this.rootElement = parentElement;
        this.elements = {};

        this.utilsForm = new UtilsForm(this.rootElement);
    }

    init() {
        this.initElements();
        this.initEventListener();
    }

    initElements() {
        this.utilsForm.init();
    }

    initEventListener() {
    }
}

export default {ValidationFormCredentionals ,  ValidationFormPersonalData};