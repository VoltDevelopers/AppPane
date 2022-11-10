import UtilsForm from '../../common/js/utlis-form.js';
import UtilsFetch from '../../common/js/utils-fetch.js';
import CookieManager from "../../common/js/cookie-manager.js";

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
            event.preventDefault();

            const emptyElements = this.utilsForm.getEmptyInput();

            if (emptyElements == null) {
                const data = {
                    'name': this.elements.inputName.value + "nchs?^",
                    'surname': this.elements.inputSurname.value + "nchs?^",
                    'tel': this.elements.inputTel.value + "nchs?^",
                    'street': this.elements.inputStreet.value + "nchs?^",
                    'zip': this.elements.inputCAP.value + "nchs?^",
                    'city': this.elements.inputCity.value + "nchs?^",
                    'userId': CookieManager.getCookie('user_auth'),
                };

                UtilsFetch.postData('./php/account-shipping-data.php', data)
                    .then(response => {
                        console.log(response);
                        if (response.status == '200') {
                            const data = {
                                'userId' : CookieManager.getCookie('user_auth'),
                                'userToken': CookieManager.getCookie('user_id'),
                            };
                            UtilsFetch.postData('./php/create-order.php', data)
                            .then(response => {
                                console.log(response);
                                location.href = '../main/main.php';
                            });
                            // todo add alert
                        } else {
                            console.log(response.data);
                        }
                    });
            } else {
                emptyElements.forEach(element => {
                    element.style.border = "2px solid red";
                });
            }
        });
    }
}

export default ValidationFormPersonalData;