import UtilsForm from '../../common/js/utlis-form.js';

class ProductInBagElement{
    constructor(parentElement){
        this.rootElement = parentElement;
        this.elements = {};
        this.template = document.createElement("template");
        this.template.innerHTML = '<object data="./html/bag-product-in-bag-template.html">';
    }

    init() {
        this.initElement();
        this.initEventListener();
    }

    initElement(){
        this.rootElement.appendChild(this.template.content.cloneNode(true));
        console.log(this.rootElement);
        this.elements = {
            productName: this.rootElement.querySelector(".product-name"),
            btnRemoveArticle: this.rootElement.querySelector(".remove-article-btn"),
            productDescription: this.rootElement.querySelector(".product-description"),
            btnAddQuantity: this.rootElement.querySelector(".add-quantity-btn"),
            currentQuantity: this.rootElement.querySelector(".current-quantity"),
            btnRemoveQuantity: this.rootElement.querySelector(".remove-quantity-btn"),
            productPrice: this.rootElement.querySelector(".product-price"),
        }

    }

    initEventListener(){
       
        
    }
}

export default ProductInBagElement;