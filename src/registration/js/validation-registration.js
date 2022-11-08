import UtilsForm from '../../common/js/utlis-form.js';
import UtilsFetch from '../../common/js/utils-fetch.js';

class ValidationRegistration {
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
        this.elements = {
            formRegistration: this.rootElement.querySelector('form'),
            inputLogin: this.rootElement.querySelector('input[name="input-login"]'),
            inputPsw: this.rootElement.querySelector('input[name="input-psw"]'),
            inputPswHash: this.rootElement.querySelector('input[name="input-psw-hash"]'),
            inputPswConf: this.rootElement.querySelector('input[name="input-psw-conf"]'),
            inputPswConfHash: this.rootElement.querySelector('input[name="input-psw-conf-hash"]'),
        };

        this.utilsForm.init();
    }

    initEventListener() {
        this.elements.formRegistration.addEventListener('submit', (event) => {
            event.preventDefault();

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
                } else {
                    const data = {
                        'email': this.elements.inputLogin.value,
                        'password': this.elements.inputPswHash.value
                    };

                    UtilsFetch.postData('./php/registration.php', data)
                        .then(response => {
                            if (response.status == '200') {
                                UtilsFetch.postData('../common/php/authentication.php', data)
                                    .then(response => {
                                        if (response.status == '200') {
                                            location.href = '../main/main.php';
                                        }
                                    });
                            } else {
                                this.elements.inputLogin.style.border = "2px solid red";
                                this.elements.inputPsw.style.border = "2px solid red";
                                this.elements.inputPswConf.style.border = "2px solid red";
                                this.elements.inputPswHash.value = '';
                                this.elements.inputPswConfHash.value = '';
                            }
                        });
                }
            }
            else {
                emptyElements.forEach(element => {
                    element.style.border = "2px solid red";
                });
            }
        });
    }
}

export default ValidationRegistration;