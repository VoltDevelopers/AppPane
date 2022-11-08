class ProductInBagElement {
    constructor(parentElement) {
        this.rootElement = parentElement;
        this.elements = {};
        this.productId = null;

        const parser = new DOMParser();
        const templateString = '<div class="article-wrapper"><div class="image-wrapper"><div class="product-type-wrapper"></div></div><div class="right-wrapper"><div class="product-header-wrapper"><h4 class="product-name"></h4><button type="button" class="remove-article-btn">X</button></div><div class="description-wrapper"><h6 class="product-description"></h6></div><div class="product-footer-wrapper"><div class="add-remove-quantity-wrapper"><button type="button" class="add-quantity-btn">+</button><h4 class="current-quantity"></h4><button type="button" class="remove-quantity-btn">-</button></div><div class="price-wrapper"><h5 class="product-price">Total: <span class = "fuchsia"></span></h5></div></div></div></div>';
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
            btnRemoveArticle: this.template.querySelector(".remove-article-btn"),
            productDescription: this.template.querySelector(".product-description"),
            btnAddQuantity: this.template.querySelector(".add-quantity-btn"),
            currentQuantity: this.template.querySelector(".current-quantity"),
            btnRemoveQuantity: this.template.querySelector(".remove-quantity-btn"),
            productPrice: this.template.querySelector(".product-price"),
        }

        this.rootElement.appendChild(this.template);
    }

    initEventListener() {
        this.elements.btnRemoveArticle.addEventListener('click', (event) => {
            this.elements.wrapperProduct.remove();
        });

        this.elements.btnAddQuantity.addEventListener('click', (event) => {
            const newQuantity = parseInt(this.elements.currentQuantity.textContent) + 1;
            this.elements.currentQuantity.innerHTML = newQuantity;
        });

        this.elements.btnRemoveQuantity.addEventListener('click', (event) => {
            let newQuantity = parseInt(this.elements.currentQuantity.textContent);
            if (newQuantity > 1) {
                newQuantity--;
                this.elements.currentQuantity.innerHTML = newQuantity;
            }
        });
    }

    setProductInBagId(id) {
        this.id = id;
    }

    setProductInBagName(name) {
        this.elements.productName.innerHTML = name;
    }

    setProductInBagDescription(description) {
        this.elements.productDescription.innerHTML = description;
    }

    setProductInBagCurrentQuantity(currentQuantity) {
        this.elements.currentQuantity.innerHTML = currentQuantity;
    }

    setProductInBagPrice(price) {
        let text = this.elements.productPrice.textContent + '$' +price;
        this.elements.productPrice.innerHTML = text;
    }
}

export default ProductInBagElement;
