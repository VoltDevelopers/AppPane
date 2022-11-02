class OrderElement {
    constructor(parentElement) {
        this.rootElement = parentElement;
        this.elements = {};
        this.productId = null;

        const parser = new DOMParser();
        const templateString = `<div class="wrapper-order">    <div class="horizontal-line">    </div>    <div class="wrapper-block">        <div class="wrapper-date">            <h4></h4>        </div>        <div class="wrapper-block-list">            <h4>Your order:</h4>            <ul>                <li>                    <h5 class="wrapper-product"></h5>                </li>                <li>                    <h5 class="wrapper-product"></h5>                </li>            </ul>        </div>        <div class="wrapper-address-price-block">            <div class="wrapper-address">                <h4>Address :</h4>            </div>            <div class="wrapper-price">                <h4>Price:<span class="fuchsia"></span></h4>            </div>        </div>    </div></div>`;
        const templateElement = parser.parseFromString(templateString, 'text/html');
        this.template = templateElement.documentElement.querySelector("body > div");
    }

    init() {
        this.initElements();
        this.initEventListeners();
    }

    initElements() {
        this.elements = {
            orderDate: this.template.querySelector('.wrapper-date'),
            orderProduct: this.template.querySelector('.wrapper-product'),
            orderAddress: this.template.querySelector('.wrapper-address'),
            orderPrice: this.template.querySelector('#total-price'),
        };

        this.rootElement.appendChild(this.template);
    }

    initEventListeners() {
    }

    setOrderId(id) {
        this.productId = id;
    }


    setOrderProduct(product) {
        this.elements.orderProduct.innerHTML = product.toString();
    }

    setOrderPrice(price) {
        this.elements.orderPrice.innerHTML = price.toString();
    }
    setOrderDate(date) {
        this.elements.orderDate.innerHTML = date.toString();
    }

    setOrderAddress(address) {
        this.elements.orderAddress.innerHTML = address.toString();
    }
}

export default OrderElement;