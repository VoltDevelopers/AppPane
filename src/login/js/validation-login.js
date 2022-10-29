import UtilsForm from '../../common/js/utlis-form.js';

class ValidationLogin {
    constructor(parentElement) {
        this.rootElement = parentElement;
        this.utilsForm = new UtilsForm(this.rootElement);
        this.utilsForm.init();
    }
}

export default ValidationLogin;