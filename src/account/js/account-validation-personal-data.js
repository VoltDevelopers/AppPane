import UtilsForm from '../../common/js/utlis-form.js';

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

            console.log("Hello world");
            event.preventDefault();

            if (emptyElements == null) {
                 // todo
            } else {
                emptyElements.forEach(element => {
                    element.style.border = "2px solid red";
                });
                event.preventDefault();
            }
        });
    }
}

export default ValidationFormPersonalData;