class UtilsForm {
    constructor(parentElement) {
        this.rootElement = parentElement;
        this.elements = {};
    }

    init() {
        this.initElement();
        this.initEventListener();
    }

    initElement() {
        this.elements = {
            wrapperForm: this.rootElement.querySelector('form'),
            input: this.rootElement.querySelectorAll('input'),
            inputText: this.rootElement.querySelectorAll('.inputText'),
            inputNumber: this.rootElement.querySelectorAll('.inputNumber'),
            buttonSubmit: this.rootElement.querySelector('button[type="submit"]'),
        };
    }

    initEventListener() {
        // Base XSS protection
        this.elements.input.forEach(element => {
            element.addEventListener('input', (event) => {
                const lt = /</g, gt = />/g, ap = /'/g, ic = /"/g;
                event.target.value = event.target.value.toString().replace(lt, "&lt;").replace(gt, "&gt;").replace(ap, "&#39;").replace(ic, "&#34;");
            });
        });

        // Delete all special symbols
        this.elements.inputText.forEach(element => {
            element.addEventListener('input', (event) => {
                event.target.value = event.target.value.toString().replace(/[^a-zA-Z ]/g, "");
            });
        });

         // Delete all no numeric
        this.elements.inputNumber.forEach(element => {
            element.addEventListener('input', (event) => {
                event.target.value = event.target.value.toString().replace(/\D/g,'');
            });
        });
    }
}

export default UtilsForm;