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
            formRegistration: this.rootElement.querySelector('form'),
            inputLogin: this.rootElement.querySelector('input[name="input-login"]'),
            inputPsw: this.rootElement.querySelector('input[name="input-psw"]'),
            inputPswHash: this.rootElement.querySelector('input[name="input-psw-hash"]'),
            inputPswConf: this.rootElement.querySelector('input[name="input-psw-conf"]'),
            inputPswConfHash: this.rootElement.querySelector('input[name="input-psw-conf-hash"]'),
        };
    }

    initEventListener() {
        this.elements.formRegistration.addEventListener('submit', (event) => {
            const emptyElements = this.utilsForm.getEmptyInput();

            if (emptyElements == null) {
                const hashPsw = this.utilsForm.getHash(this.elements.inputPsw.value);
                this.elements.inputPsw.value = '';
                this.elements.inputPswHash.value = hashPsw;

                const hashPswConf = this.utilsForm.getHash(this.elements.inputPswConf.value);
                this.elements.inputPswConf.value = '';
                this.elements.inputPswConfHash.value = hashPswConf;

                if (hashPsw !== hashPswConf) {
                    this.elements.inputPswConf.style.border = "2px solid red";
                    event.preventDefault();
                }
            } 
            else {
                emptyElements.forEach(element => {
                    element.style.border = "2px solid red";
                });
                event.preventDefault();
            }
        });
    }
}

export default ValidationRegistration;