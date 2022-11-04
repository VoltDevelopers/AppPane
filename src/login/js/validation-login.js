import UtilsForm from '../../common/js/utlis-form.js';
import UtilsFetch from '../../common/js/utils-fetch.js';

class ValidationLogin {
    constructor(parentElement) {
        this.rootElement = parentElement;
        this.elements = {};

        this.emptyElements = null;

        this.utilsForm = new UtilsForm(this.rootElement);
        this.utilsFetch = new UtilsFetch();
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
            event.preventDefault();
            const emptyElements = this.utilsForm.getEmptyInput();

            if (emptyElements == null) {
                this.hashUserPsw();

                const data = {
                    'email': this.elements.inputLogin.value,
                    'password': this.elements.inputPswHash.value
                };

                this.utilsFetch.postData('../common/php/authentication.php', data)
                    .then(response => {
                        console.log("response.status: ", response.status);
                        console.log("response.data: ", response.data);

                        if (response.status == '200') {
                            location.href = '../main/main.php';
                        } else {
                            this.elements.inputLogin.style.border = "2px solid red";
                            this.elements.inputPsw.style.border = "2px solid red";
                            this.elements.inputPswHash.value = '';
                        }
                    });
            } else {
                emptyElements.forEach(element => {
                    element.style.border = "2px solid red";
                });
            }
        });
    }

    hashUserPsw() {
        this.elements.inputPswHash.value = this.utilsForm.getHash(this.elements.inputPsw.value);
        this.elements.inputPsw.value = '';
    }
}

export default ValidationLogin;