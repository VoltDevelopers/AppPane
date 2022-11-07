import UtilsForm from '../../common/js/utlis-form.js';
import CookieManager from '../../common/js/cookie-manager.js';
import UtilsFetch from '../../common/js/utils-fetch.js';

class ValidationContactUS {
    constructor(parentElement) {
        this.rootElement = parentElement;
        this.elements = {};

        this.utilsForm = new UtilsForm(this.rootElement);
        this.utilsFetch = new UtilsFetch();
    }

    init() {
        this.initElement();
        this.initEventListener();
    }

    initElement() {
        this.elements = {
            formLogin: this.rootElement.querySelector('form'),
            inputUser: this.rootElement.querySelector('input[name="input-user"]'),
            inputEmail: this.rootElement.querySelector('input[name="input-email"]'),
            inputProblem: this.rootElement.querySelector('textarea[name="input-problem"]'),
        };

        this.utilsForm.init();
    }

    initEventListener() {
        this.elements.formLogin.addEventListener('submit', (event) => {
            event.preventDefault();

            const emptyElements = this.utilsForm.getEmptyInput();
            const userAuth = CookieManager.getCookie('user_auth');

            if (emptyElements == null) {
                if (userAuth) {
                    const data = {
                        'email': this.elements.inputEmail.value + 'qw?er',
                        'name': this.elements.inputUser.value + 'qw?er',
                        'notes': this.elements.inputProblem.value + 'qw?er',
                        'user': userAuth,
                    };

                    this.utilsFetch.postData('./php/contact-us.php', data)
                        .then(response => {
                            if (response.status == '200') {
                                location.href = '../main/main.php';
                            } else {
                                console.log(response.data);
                            }
                        });
                } else {
                    location.href = "../login/login.php";
                }
            } else {
                emptyElements.forEach(element => {
                    element.style.border = "2px solid red";
                });
            }




        });
    }
}

export default ValidationContactUS;
