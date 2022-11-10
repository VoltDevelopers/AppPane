import CookieManager from "../../common/js/cookie-manager.js";
import UtilsFetch from '../../common/js/utils-fetch.js';
import AlertExtend from "../../common/js/alert-manager.js";
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
        this.elements.btnAddToCart.addEventListener('click', (event) => {
            const data = {
                'idClient': CookieManager.getCookie('user_auth'),
                'idProduct': this.productId,
                'quantity': this.elements.currentQuantity.innerHTML,
                'token': CookieManager.getCookie('user_id'),
            };

            if (data.idClient) {
                UtilsFetch.postData('../common/php/add-product-to-bag.php', data)
                    .then(response => {
                        if (response.status == '200') {
                            AlertExtend.showAlert("Carrello", "Il prodotto e' stato aggiunto nel carrello");
                        } else {
                            console.log(response.data);
                        }
                    });
            } else {
                if (!CookieManager.getCookie('temp_bag_product_index')) {
                    CookieManager.setCookie('temp_bag_product_index', '0', 60 * 60);
                }
                const index = parseInt(CookieManager.getCookie('temp_bag_product_index')) + 1;
                CookieManager.setCookie(`temp_product_in_bag_${index}`, JSON.stringify(data), 60 * 60);
                CookieManager.setCookie('temp_bag_product_index', index, 60 * 60);
                AlertExtend.showAlert("Carrello", "Il prodotto e' stato aggiunto nel carrello");
            }
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
        this.elements.productPrice.innerHTML = "$" + price.toString();
    }

    setProductDescription(description) {
        this.elements.productDescription.innerHTML = description;
    }
}

export default ProductPageElement;