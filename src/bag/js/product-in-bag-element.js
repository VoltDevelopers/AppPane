import UtilsForm from '../../common/js/utlis-form.js';

class ProductInBagElement {
    constructor(parentElement) {
        this.rootElement = parentElement;
        this.elements = {};
        // this.nProductsInCart = 5;
        
        this.productId = null;
        const parser = new DOMParser();
        const templateString = '<div class="article-wrapper"><div class="image-wrapper"><div class="product-type-wrapper"></div></div><div class="right-wrapper"><div class="product-header-wrapper"><h4 class="product-name">pane pizza</h4><div class="icon-close"></div></div><div class="description-wrapper"><h6 class="product-description">Pellentesque habitant morbi tristique senectus et netus et malesuada famesac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Doneceu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.Quisque sit amet est et sapien ullamcorper</h6></div><div class="product-footer-wrapper"><div class="add-remove-quantity-wrapper"><div class="icon-plus"></div><h4 class="current-quantity">1</h4><div class="icon-minus"></div></div><div class="price-wrapper"><h5 class="product-price">Total: <span class="fuchsia">43.53$</span></h5></div></div></div></div>';
        const templateElement = parser.parseFromString(templateString, 'text/html');
        this.template = templateElement.documentElement.querySelector("body > div");
    }

    init() {
        this.initElement();
        this.initEventListener();
    }

    initElement() {
        this.elements = {
            wrapperProduct: this.template,
            productName: this.template.querySelector(".product-name"),
            btnRemoveArticle: this.template.querySelector(".icon-close"),
            productDescription: this.template.querySelector(".product-description"),
            btnAddQuantity: this.template.querySelector(".add-quantity-btn"),
            currentQuantity: this.template.querySelector(".current-quantity"),
            btnRemoveQuantity: this.template.querySelector(".remove-quantity-btn"),
            productPrice: this.template.querySelector(".product-price"),
        }

        this.rootElement.appendChild(this.template);
    }

    initEventListener() {
        this.onBtnRemoveArticleClick = this.onBtnRemoveArticleClick.bind(this);
        this.elements.btnRemoveArticle.addEventListener('click', this.onBtnRemoveArticleClick);
        this.onBtnAddQuantityClick = this.onBtnAddQuantityClick.bind(this);
        this.elements.btnAddQuantity.addEventListener('click', this.onBtnAddQuantityClick);
        this.onBtnRemoveQuantityClick = this.onBtnRemoveQuantityClick.bind(this);
        this.elements.btnRemoveQuantity.addEventListener('click', this.onBtnRemoveQuantityClick);
        
    }
    onBtnRemoveArticleClick() { 
        this.elements.wrapperProduct.remove();
    }

    onBtnAddQuantityClick(){
        let newQuantity = parseInt(this.elements.currentQuantity.textContent) + 1;
        this.elements.currentQuantity.innerHTML = newQuantity;
    }

    onBtnRemoveQuantityClick(){
        let newQuantity = parseInt(this.elements.currentQuantity.textContent);
        if(newQuantity > 1){
             newQuantity--;
             this.elements.currentQuantity.innerHTML = newQuantity;
        }
    }

    setProductInBagId(id){
        this.id = id;
    }

    setProductInBagName(name){
        this.elements.productName.innerHTML = name;
    }

    setProductInBagDescription(description){
        this.elements.productDescription.innerHTML = description;
    }

    setProductInBagCurrentQuantity(currentQuantity){
        this.elements.currentQuantity.innerHTML = currentQuantity;
    }

    setProductInBagPrice(price){
        let text = this.elements.productPrice.textContent + price;
        this.elements.productPrice.innerHTML = text;
    }
}

export default ProductInBagElement;
