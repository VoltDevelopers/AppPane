import UtilsForm from '../../common/js/utlis-form.js';

class ValidationLogin {
    constructor(parentElement) {
        this.rootElement = parentElement;
        this.elements = {};

        this.emptyElements = null;

        this.utilsForm = new UtilsForm(this.rootElement);
    }

    init() {
        this.initElement();
        this.initEventListener();
    }

    initElement() {
        this.utilsForm.init();

        this.elements = {
            formLogin: this.rootElement.querySelector('form'),
            inputLogin: this.rootElement.querySelector('input[name="input-login"]'),
            inputPsw: this.rootElement.querySelector('input[name="input-psw"]'),
            inputPswHash: this.rootElement.querySelector('input[name="input-psw-hash"]'),
        };

    }

    initEventListener() {
        this.elements.formLogin.addEventListener('submit', (event) => {
            const emptyElements = this.utilsForm.getEmptyInput();

            if(emptyElements == null) {
                this.hashUserPsw();
                // todo
            } else {
                emptyElements.forEach(element => {
                    element.style.border = "2px solid red";
                });
                event.preventDefault();
            }
        });
    }

    hashUserPsw() {
        this.elements.inputPswHash.value = this.utilsForm.getHash(this.elements.inputPsw.value);
        this.elements.inputLogin.value = '';
    }
}

export default ValidationLogin;