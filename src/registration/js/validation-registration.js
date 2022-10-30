import UtilsForm from '../../common/js/utlis-form.js';

class ValidationRegistration {
    constructor(parentElement) {
        this.rootElement = parentElement;
        this.elements = {};

        this.utilsForm = new UtilsForm(this.rootElement);
        this.utilsForm.init();
    }

    init() {
        this.initElements();
        this.initEventListener();
    }

    initElements() {
        this.elements = {
            inputLogin: this.rootElement.querySelector('input[name="input-login"]'),
            inputPsw: this.rootElement.querySelector('input[name="input-psw"]'),
            inputPswConf: this.rootElement.querySelector('input[name="input-psw-conf"]'),
        };
    }

    initEventListener() {
        this.elements.inputPsw.addEventListener('input', (event) => {
            console.log(event.target.value);
        });

    }
}

export default ValidationRegistration;