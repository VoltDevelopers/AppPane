import UtilsForm from '../../common/js/utlis-form.js';

class ProductInBagElement {
    constructor(parentElement) {
        this.rootElement = parentElement;
        this.elements = {};

        const parser = new DOMParser();
        const templateString = '<div class="article-wrapper"><div class="image-wrapper"><div class="product-type-wrapper"></div></div><div class="right-wrapper"><div class="product-header-wrapper"><h3 class="product-name">pane pizza</h3><button type="button" class="remove-article-btn">X</button></div><div class="description-wrapper"><h6 class="product-description">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper</h6></div><div class="product-footer-wrapper"><div class="add-remove-quantity-wrapper"><button type="button" class="add-quantity-btn">+</button><h4 class="current-quantity">0</h4><button type="button" class="remove-quantity-btn">-</button></div><div class="price-wrapper"><h4 class="product-price">43.53£</h4></div></div></div></div>';
        const templateElement = parser.parseFromString(templateString, 'text/html');
        this.template = templateElement.documentElement.querySelector("body > div");
    }

    init() {
        this.initElement();
        this.initEventListener();
    }

    initElement() {

        this.elements = {
            productName: this.template.querySelector(".product-name"),
            btnRemoveArticle: this.template.querySelector(".remove-article-btn"),
            productDescription: this.template.querySelector(".product-description"),
            btnAddQuantity: this.template.querySelector(".add-quantity-btn"),
            currentQuantity: this.template.querySelector(".current-quantity"),
            btnRemoveQuantity: this.template.querySelector(".remove-quantity-btn"),
            productPrice: this.template.querySelector(".product-price"),
        }
        this.rootElement.appendChild(this.template);
        console.log(this.rootElement);
    }

    initEventListener() {
        this.elements.btnRemoveArticle.addEventListener('click', this.onBtnRemoveArticleClick);
        this.elements.btnAddQuantity.addEventListener('click', this.onBtnAddQuantityClick);
        this.elements.btnRemoveQuantity.addEventListener('click', this.onBtnRemoveQuantityClick);
    }

    onBtnRemoveArticleClick() {

    }

    onBtnAddQuantityClick(){

    }

    onBtnRemoveQuantityClick(){

    }

}

export default ProductInBagElement;