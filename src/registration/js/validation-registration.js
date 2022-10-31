import UtilsForm from '../../common/js/utlis-form.js';

class ValidationRegistration {
    constructor(parentElement) {
        this.rootElement = parentElement;
        this.elements = {};

        this.utilsForm = new UtilsForm(this.rootElement);
        this.utilsForm.init();
    }

    init() {
        this.initElements();
        this.initEventListener();
    }

    initElements() {
        this.elements = {
            inputLogin: this.rootElement.querySelector('input[name="input-login"]'),
            inputPsw: this.rootElement.querySelector('input[name="input-psw"]'),
            inputPswHash: this.rootElement.querySelector('input[name="input-psw-hash"]'),
            inputPswConf: this.rootElement.querySelector('input[name="input-psw-conf"]'),
            inputPswConfHash: this.rootElement.querySelector('input[name="input-psw-conf-hash"]'),
        };
    }

    initEventListener() {
        var pass = "qwerty123456";

        this.elements.inputPsw.addEventListener('input', (event) => {

  
        });

        this.elements.inputPswConf.addEventListener('input', (event) => {
            String.prototype.hashCode = function () {
                var hash = 0,
                    i, chr;
                if (this.length === 0) return hash;
                for (i = 0; i < this.length; i++) {
                    chr = this.charCodeAt(i);
                    hash = ((hash << 5) - hash) + chr;
                    hash |= 0; // Convert to 32bit integer
                }
                return hash;
            }

            var hashPass = this.elements.inputPswConf.value.hashCode();
            var hashPassConf = this.elements.inputPsw.value.hashCode();

            console.log(hashPass,hashPassConf);

            if (this.elements.inputPswConf.value == this.elements.inputPsw.value  && hashPass == hashPassConf) {
                console.log("Your pass is correct");
            }
        });

    }
}

export default ValidationRegistration;