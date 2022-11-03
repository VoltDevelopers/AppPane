class ProductElement {
    constructor(parentElement) {
        this.rootElement = parentElement;
        this.elements = {};
        this.productId = null;

        const parser = new DOMParser();
        const templateString = `<div class="wrapper-product"><div class="wrapper-product-img"><div class="product-tag"><h6 class="tag-inner"></h6></div></div><div class="wrapper-product-desc"><div class="product-desc"><h5 class="product-name"></h5><h6 class="product-price color-gray"></h6></div><button><h6 class="light">Add to bag</h6></button></div></div>`;
        const templateElement = parser.parseFromString(templateString, 'text/html');
        this.template = templateElement.documentElement.querySelector("body > div");
    }

    init() {
        this.initElements();
        this.initEventListeners();
    }

    initElements() {
        this.elements = {
            productImg: this.template.querySelector('.wrapper-product-img'),
            productTag: this.template.querySelector('.tag-inner'),
            productName: this.template.querySelector('.product-name'),
            productPrice: this.template.querySelector('.product-price'),
            buttonAddToBag: this.template.querySelector('button'),
        };

        this.rootElement.appendChild(this.template);
    }

    initEventListeners() {
        this.elements.buttonAddToBag.addEventListener('click', (event) => {
            console.log(`Product(${this.productId}) has been added to the shopping bag`);
        });
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
}

export default ProductElement;