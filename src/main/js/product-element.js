import CookieManager from "../../common/js/cookie-manager.js";
import UtilsFetch from '../../common/js/utils-fetch.js';

class ProductElement {
    constructor(parentElement) {
        this.rootElement = parentElement;
        this.elements = {};
        this.productId = null;

        const parser = new DOMParser();
        const templateString = `<div class="wrapper-product"><div class="wrapper-product-img"><div class="product-tag"><div class="hide">See more </div><h6 class="tag-inner"></h6></div></div><div class="wrapper-product-desc"><div class="product-desc"><h5 class="product-name"></h5><h6 class="product-price color-gray"></h6></div><button><h6 class="light">Add to bag</h6></button><button class="in-bag"><h6 class="light">In bag</h6></button></div></div>`;
        const templateElement = parser.parseFromString(templateString, 'text/html');
        this.template = templateElement.documentElement.querySelector("body > div");
    }

    init() {
        this.initElements();
        this.initEventListeners();
    }

    initElements() {
        this.elements = {
            wrapperProduct: this.template,
            productImg: this.template.querySelector('.wrapper-product-img'),
            productTag: this.template.querySelector('.tag-inner'),
            productName: this.template.querySelector('.product-name'),
            productPrice: this.template.querySelector('.product-price'),
            buttonAddToBag: this.template.querySelector('button'),
            buttoninbag : this.template.querySelector('.in-bag'),
        };

        this.rootElement.appendChild(this.template);
    }

    initEventListeners() {

        this.elements.buttonAddToBag.addEventListener('click', (event) => {
            const data = {
                'idClient': CookieManager.getCookie('user_auth'),
                'idProduct': this.productId,
                'quantity': 1,
                'token': CookieManager.getCookie('user_id'),
            };

            this.elements.buttonAddToBag.style.display = "none";
            this.elements.buttoninbag.style.display = "block";


            if (data.idClient) {
                UtilsFetch.postData('../common/php/add-product-to-bag.php', data)
                    .then(response => {
                        if (response.status == '200') {
                            // todo alert
                            console.log('Added');
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
            }


        });
        this.elements.productImg.addEventListener('click', (event) => {
            CookieManager.setCookie('temp_id_product', this.productId, 180);
            location.href = '../product-page/product-page.php';
        });
    }

    showProduct() {
        this.elements.wrapperProduct.style.display = 'flex';
    }

    hideProduct() {
        this.elements.wrapperProduct.style.display = 'none';
    }

    setProductId(id) {
        this.productId = id;
    }

    setProductImg(path) {
        this.elements.productImg.style.backgroundImage = `url('${path}')`;
    }

    setProductTag(tag) {
        this.elements.productTag.innerHTML = tag.toString();
    }

    setProductName(name) {
        this.elements.productName.innerHTML = name.toString();
    }

    setProductPrice(price) {
        this.elements.productPrice.innerHTML = price.toString();
    }

    getFilter() {
        return this.elements.productTag.innerHTML;
    }
}

export default ProductElement;