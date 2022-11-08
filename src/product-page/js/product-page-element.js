import CookieManager from "../../common/js/cookie-manager.js";
class ProductPageElement {
    constructor(parentElement) {
        this.rootElement = parentElement;
        this.elements = {};
        this.productId = null;

        const parser = new DOMParser();
        const templateString = '<div class="wrapper-product"><div class="wrapper-image"></div><div class="wrapper-product-contents"><div class="wrapper-product-name"><h3 class="product-name"></h3></div><div class="wrapper-product-price"><h3 class = "product-price"></h3></div><div class="wrapper-product-description"><h5 class="product-description"></h5></div><div class="wrapper-product-bottom-content"><button type="button" class = "add-to-bag-btn">Add to bag</button><div class="wrapper-add-remove-quantity"><button type="button" class = "add-quantity-btn">+</button><h3 class = "current-quantity">1</h3><button type="button" class = "remove-quantity-btn">-</button></div></div></div></div>';
        const templateElement = parser.parseFromString(templateString, 'text/html');
        this.template = templateElement.documentElement.querySelector('body > div');
    }

    init() {
        this.initElements();
        this.initEventListeners();
    }

    initElements() {
        this.elements = {
            productImg: this.template.querySelector(".wrapper-image"),
            productName: this.template.querySelector(".product-name"),
            productPrice: this.template.querySelector(".product-price"),
            productDescription: this.template.querySelector(".product-description"),
            btnAddToCart: this.template.querySelector(".add-to-bag-btn"),
            btnAddQuantity: this.template.querySelector(".add-quantity-btn"),
            currentQuantity: this.template.querySelector(".current-quantity"),
            btnRemoveQuantity: this.template.querySelector(".remove-quantity-btn"),
        }

        this.rootElement.appendChild(this.template);
    }

    initEventListeners() {
        this.elements.btnAddToCart.addEventListener("click", (event) => {
            //todo
        });

        this.elements.btnAddQuantity.addEventListener("click", (event) => {
            const newQuantity = parseInt(this.elements.currentQuantity.textContent) + 1;
            this.elements.currentQuantity.innerHTML = newQuantity;
        });

        this.elements.btnRemoveQuantity.addEventListener("click", (event) => {
            let newQuantity = parseInt(this.elements.currentQuantity.textContent);
            if (newQuantity > 1) {
                newQuantity--;
                this.elements.currentQuantity.innerHTML = newQuantity;
            }
        });
    }

    setProductId(id) {
        this.productId = id;
    }

    setProductImg(path) {
        this.elements.productImg.style.backgroundImage = `url('${path}')`;
    }

    setProductName(name) {
        this.elements.productName.innerHTML = name;
    }

    setProductPrice(price) {
        this.elements.productPrice.innerHTML = price;
    }

    setProductDescription(description) {
        this.elements.productDescription.innerHTML = description;
    }

}

export default ProductPageElement;