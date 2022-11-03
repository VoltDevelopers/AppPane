import UtilsForm from '../../common/js/utlis-form.js';

class ProductInBagElement {
    constructor(parentElement) {
        this.rootElement = parentElement;
        this.elements = {};
        this.nProductsInCart = 5;
        
        const parser = new DOMParser();
        const templateString = '<div class="article-wrapper"><div class="image-wrapper"><div class="product-type-wrapper"></div></div><div class="right-wrapper"><div class="product-header-wrapper"><h4 class="product-name">pane pizza</h4><button type="button" class="remove-article-btn">X</button></div><div class="description-wrapper"><h6 class="product-description">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper</h6></div><div class="product-footer-wrapper"><div class="add-remove-quantity-wrapper"><button type="button" class="add-quantity-btn">+</button><h4 class="current-quantity">1</h4><button type="button" class="remove-quantity-btn">-</button></div><div class="price-wrapper"><h4 class="product-price">Total: <span class = "fuchsia">43.53$</span></h4></div></div></div></div>';
        const templateElement = parser.parseFromString(templateString, 'text/html');
        this.template = templateElement.documentElement.querySelector("body > div");
    }

    init() {
        this.initElement();
        this.initEventListener();
    }

    initElement() {

       for (let i = 0; i < this.nProductsInCart; i++){
            let item = this.template.cloneNode(true);
            item.setAttribute("id", i);
            this.rootElement.appendChild(item);
        }

        this.elements = {
            productName: this.rootElement.querySelectorAll(".product-name"),
            btnRemoveArticle: this.rootElement.querySelectorAll(".remove-article-btn"),
            productDescription: this.rootElement.querySelectorAll(".product-description"),
            btnAddQuantity: this.rootElement.querySelectorAll(".add-quantity-btn"),
            currentQuantity: this.rootElement.querySelectorAll(".current-quantity"),
            btnRemoveQuantity: this.rootElement.querySelectorAll(".remove-quantity-btn"),
            productPrice: this.rootElement.querySelectorAll(".product-price"),
        }

        for(let i = 0; i < this.nProductsInCart;i++){
            this.elements.productName[i].setAttribute("id", i);
            this.elements.btnRemoveArticle[i].setAttribute("id", i);
            this.elements.productDescription[i].setAttribute("id", i);
            this.elements.btnAddQuantity[i].setAttribute("id", i);
            this.elements.currentQuantity[i].setAttribute("id", i);
            this.elements.btnRemoveQuantity[i].setAttribute("id", i);
            this.elements.productPrice[i].setAttribute("id", i);
        }
        console.log(this.elements);
    }

    initEventListener() {
        for (let i = 0; i < this.nProductsInCart; i++) {
            this.onBtnRemoveArticleClick = this.onBtnRemoveArticleClick.bind(this);
            this.elements.btnRemoveArticle[i].addEventListener('click', this.onBtnRemoveArticleClick);
            this.onBtnAddQuantityClick = this.onBtnAddQuantityClick.bind(this);
            this.elements.btnAddQuantity[i].addEventListener('click', this.onBtnAddQuantityClick);
            this.onBtnRemoveQuantityClick = this.onBtnRemoveQuantityClick.bind(this);
            this.elements.btnRemoveQuantity[i].addEventListener('click', this.onBtnRemoveQuantityClick);
        }
        
    }
    onBtnRemoveArticleClick(e) { 
        let itemToRemove = document.getElementById(e.target.id);
        itemToRemove.remove();
        this.nProductsInCart--;
        this.rootElement.innerHTML = '';
        this.init();
    }

    onBtnAddQuantityClick(e){
        let item = document.getElementById(e.target.id);
        let currentQuantity = item.querySelector(".current-quantity");
        let newQuantity = parseInt(currentQuantity.textContent);
        newQuantity++;
        currentQuantity.innerText = newQuantity;
    }

    onBtnRemoveQuantityClick(e){
        let item = document.getElementById(e.target.id);
        let currentQuantity = item.querySelector(".current-quantity");
        let newQuantity = parseInt(currentQuantity.textContent);
        if(newQuantity > 1){
            newQuantity--;
            currentQuantity.innerText = newQuantity;
        }

    }

}

export default ProductInBagElement;