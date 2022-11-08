import CookieManager from "../../common/js/cookie-manager.js";
class ProductPageElement {
    constructor(parentElement) {
        this.rootElement = parentElement;
        this.elements = {};
        this.productId = null;
        this.isFirstTime = true;
        this.productBasePrice = 0;

        const parser = new DOMParser();
        const templateString = '<div class="wrapper-product"><div class="wrapper-image"></div><div class="wrapper-product-contents"><div class="wrapper-product-name"><h4 class="product-name"></h4></div><div class="wrapper-product-price"><h4 class = "product-price"></h4></div><div class="wrapper-product-description"><h6 class="product-description"></h6></div><div class="wrapper-product-bottom-content"><button type="button" class = "add-to-bag-btn"><h6 class="light">Add to bag</h6></button><div class="wrapper-add-remove-quantity"><div class="icon-plus"></div><h4 class = "current-quantity">1</h4><div class="icon-minus"></div></div></div></div></div>';
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
            btnAddQuantity: this.template.querySelector(".icon-plus"),
            currentQuantity: this.template.querySelector(".current-quantity"),
            btnRemoveQuantity: this.template.querySelector(".icon-minus"),
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
            this.setProductPrice(this.getNewPrice(true));
        });

        this.elements.btnRemoveQuantity.addEventListener("click", (event) => {
            let newQuantity = parseInt(this.elements.currentQuantity.textContent);
            if (newQuantity > 1) {
                newQuantity--;
                this.elements.currentQuantity.innerHTML = newQuantity;
                this.setProductPrice(this.getNewPrice(false));
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
        this.elements.productPrice.innerHTML = "$" + price.toString();
    }

    setProductDescription(description) {
        this.elements.productDescription.innerHTML = description;
    }

    getNewPrice(isPlus) {
        let newPrice = 0;
        let priceNum = this.elements.productPrice.textContent.split("$");
        if (this.isFirstTime) {
            this.productBasePrice = priceNum[1];
            this.isFirstTime = false;
        }
        if (isPlus) {
            newPrice = parseInt(priceNum[1]) + parseInt(this.productBasePrice);
        } else {
            newPrice = parseInt(priceNum[1]) - parseInt(this.productBasePrice);
        }
        return newPrice;
    }
}

export default ProductPageElement;