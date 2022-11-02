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

        this.elements = {
            formRegistration: this.rootElement.querySelector('form[name="modify-credentianl"]'),
            inputEmail: this.rootElement.querySelector('input[name="input-email"]'),
            inputPsw: this.rootElement.querySelector('input[name="input-psw"]'),
            inputPswHash: this.rootElement.querySelector('input[name="input-psw-hash"]'),
        };
    }

    initEventListener() {
        this.elements.formRegistration.addEventListener('submit', (event) => {
            debugger
            const emptyElements = this.utilsForm.getEmptyInput();

            console.log("Hello world");
            event.preventDefault();

            if (emptyElements == null) {
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
export default ValidationFormCredentionals;