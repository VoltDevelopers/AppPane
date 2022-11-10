
import CookieManager from "../../common/js/cookie-manager.js";
import UtilsFetch from "../../common/js/utils-fetch.js";

class ProductInBagElement {
    constructor(parentElement) {
        this.rootElement = parentElement;
        this.elements = {};
        this.productId = null;
        this.isFirstTime = true;
        this.productBasePrice = 0;
        
        const parser = new DOMParser();
        const templateString = '<div class="article-wrapper"> <div class="image-wrapper"> <div class="product-type-wrapper"></div></div><div class="right-wrapper"> <div class="product-header-wrapper"> <h4 class="product-name"></h4> <div class="icon-close"></div></div><div class="description-wrapper"> <h6 class="product-description"></h6> </div><div class="product-footer-wrapper"> <div class="add-remove-quantity-wrapper"> <div class="icon-plus"></div><h4 class="current-quantity">1</h4> <div class="icon-minus"></div></div><div class="price-wrapper"> <h5>Total: <span class="fuchsia product-price"></span></h5> </div></div></div></div>';
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
            productImg: this.template.querySelector(".image-wrapper"),
            btnRemoveArticle: this.template.querySelector(".icon-close"),
            productDescription: this.template.querySelector(".product-description"),
            btnAddQuantity: this.template.querySelector(".icon-plus"),
            currentQuantity: this.template.querySelector(".current-quantity"),
            btnRemoveQuantity: this.template.querySelector(".icon-minus"),
            productPrice: this.template.querySelector(".product-price"),
        }

        this.rootElement.appendChild(this.template);
    }

    initEventListener() {
        this.elements.btnRemoveArticle.addEventListener('click', (event) => {
            this.elements.wrapperProduct.remove();
            this.removeElement();
        });

        this.elements.btnAddQuantity.addEventListener('click', (event) => {
            const newQuantity = parseInt(this.elements.currentQuantity.textContent) + 1;
            this.elements.currentQuantity.innerHTML = newQuantity;
            this.updateAll();
        });

        this.elements.btnRemoveQuantity.addEventListener('click', (event) => {
            let newQuantity = parseInt(this.elements.currentQuantity.textContent);
            if (newQuantity > 1) {
                newQuantity--;
                this.elements.currentQuantity.innerHTML = newQuantity;
                this.updateAll();
            }
        });
    }

    setProductInBagId(id) {
        this.productId = id;
    }

    getProductId(){
        return this.productId;
    }

    setProductInBagName(name) {
        this.elements.productName.innerHTML = name;
    }

    setProductImg(path) {
        this.elements.productImg.style.backgroundImage = `url('${path}')`;
    }

    setProductInBagDescription(description) {
        this.elements.productDescription.innerHTML = description;
    }

    setProductInBagCurrentQuantity(currentQuantity) {
        this.elements.currentQuantity.innerHTML = currentQuantity;
    }

    setProductInBagPrice(price) {
        this.elements.productPrice.innerHTML = '$' + price;
    }

    updateAll(){

        if(CookieManager.getCookie('user_auth')){

            const data ={
                clientId: CookieManager.getCookie('user_auth'),
                productId: this.productId,
                productQuantity: this.elements.currentQuantity.textContent,

            }
            UtilsFetch.postData('./php/bag-update.php', data)
                .then(response => {

                    if(response.status == 200){

                        document.location.reload();

                    }else{


                    }

                });

        }else {
            const cookieProductsIndex = CookieManager.getCookie('temp_bag_product_index');
            for(let i = 1; i <= cookieProductsIndex; i++) {
                const currentProduct = CookieManager.getCookie('temp_product_in_bag_' + i);
                if(this.productId == JSON.parse(currentProduct).idProduct){
                    const data = {
                        'idClient': CookieManager.getCookie('user_auth'),
                        'idProduct': this.productId,
                        'quantity': this.elements.currentQuantity.innerHTML,
                        'token': CookieManager.getCookie('user_id'),
                    };
                    CookieManager.setCookie(`temp_product_in_bag_${i}`, JSON.stringify(data), 60 * 60);
                    document.location.reload();

                }
                

            }

        }
    }
    
    removeElement(){

        if(CookieManager.getCookie('user_auth')){

            const data = {

                clientId: CookieManager.getCookie('user_auth'),
                productId: this.productId,

            }
            console.log(data);
            UtilsFetch.postData('./php/bag-remove-product.php', data)
                .then(response =>{

                    console.log(response);

                });
        }else {

            const cookieProductsIndex = CookieManager.getCookie('temp_bag_product_index');
            for(let i = 1; i <= cookieProductsIndex; i++) {
                const currentProduct = CookieManager.getCookie('temp_product_in_bag_' + i);
                if(currentProduct && this.productId == JSON.parse(currentProduct).idProduct){
                    CookieManager.setCookie('temp_product_in_bag_' + i,null,1);
                }
            }

        }
        document.location.reload();
    }
}

export default ProductInBagElement;
