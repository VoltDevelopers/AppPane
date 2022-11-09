import UtilsForm from '../../common/js/utlis-form.js';
import CookieManager from '../../common/js/cookie-manager.js';
import UtilsFetch from '../../common/js/utils-fetch.js';

class ValidationFormPersonalData {
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

        this.elements = {
            formRegistration: this.rootElement.querySelector('form[name="modify-personal-data"]'),
            inputName: this.rootElement.querySelector('input[name="input-name"]'),
            inputSurname: this.rootElement.querySelector('input[name="input-surname"]'),
            inputTel: this.rootElement.querySelector('input[name="input-phone"]'),
            inputStreet: this.rootElement.querySelector('input[name="input-street"]'),
            inputCAP: this.rootElement.querySelector('input[name="input-zip"]'),
            inputCity: this.rootElement.querySelector('input[name="input-city"]'),
        };
    }

    initEventListener() {
        this.elements.formRegistration.addEventListener('submit', (event) => {
            const emptyElements = this.utilsForm.getEmptyInput();
            const userAuth = CookieManager.getCookie('user_auth');

            event.preventDefault();

            if (emptyElements == null) {
                const data = {
                    'name': this.elements.inputName.value + "nchs?^",
                    'surname': this.elements.inputSurname.value + "nchs?^",
                    'tel': this.elements.inputTel.value + "nchs?^",
                    'street': this.elements.inputStreet.value + "nchs?^",
                    'zip': this.elements.inputCAP.value + "nchs?^",
                    'city': this.elements.inputCity.value + "nchs?^",
                    'userId': userAuth,
                };

                UtilsFetch.postData('./php/account-personal-data.php', data)
                    .then(response => {
                        if (response.status == '200') {
                            location.href = '../main/main.php';
                        } else {
                            console.log(response.data);
                        }
                    });
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

export default ValidationFormPersonalData;