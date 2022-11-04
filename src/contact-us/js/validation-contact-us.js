import UtilsForm from '../../common/js/utlis-form.js';

class ValidationContactUS {
    constructor(parentElement) {
        this.rootElement = parentElement;
        this.elements = {};

        this.utilsForm = new UtilsForm(this.rootElement);
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

            if (emptyElements == null) {
            }
            else {
                emptyElements.forEach(element => {
                    element.style.border = "2px solid red";
                });
            }
        });
}
}

export default ValidationContactUS;
