import MD5 from '../../common/js/hash-function.js';

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
            input: this.rootElement.querySelectorAll('input'),
            inputOnlyText: this.rootElement.querySelectorAll('.inputOnlyText'),
            inputOnlyNumber: this.rootElement.querySelectorAll('.inputOnlyNumber'),
        };
    }

    initEventListener() {
        // Remove form alert after refresh 
        if (window.history.replaceState) {
            window.history.replaceState(null, null, window.location.href);
        }
        
        // Base XSS protection
        this.elements.input.forEach(element => {
            element.addEventListener('input', (event) => {
                const lt = /</g, gt = />/g, ap = /'/g, ic = /"/g;
                event.target.value = event.target.value.toString().replace(lt, "&lt;").replace(gt, "&gt;").replace(ap, "&#39;").replace(ic, "&#34;");
                element.style.border = '2px solid #B700A4';
            });
            element.addEventListener('change', (event) => {
                element.style.border = '2px solid #1D1D1D';
            });
        });

        // Delete all special symbols and numeric
        this.elements.inputOnlyText.forEach(element => {
            element.addEventListener('input', (event) => {
                event.target.value = event.target.value.toString().replace(/[^a-zA-Z ]/g, "");
            });
        });

        // Delete all no numeric
        this.elements.inputOnlyNumber.forEach(element => {
            element.addEventListener('input', (event) => {
                event.target.value = event.target.value.toString().replace(/\D/g, '');
            });
        });
    }

    // To check if where are some empty elements
    getEmptyInput() {
        let listEmptyInputs = Array();

        this.elements.input.forEach(element => {
            if (element.getAttribute('type') != 'hidden' && element.value.toString().replace(/\s/g, '') == '') {
                listEmptyInputs.push(element);
            }
        });

        if (listEmptyInputs.length > 0) {
            return listEmptyInputs;
        }
        return null;
    }

    getHash(value) {
        return MD5(value.toString());
    }
}

export default UtilsForm;