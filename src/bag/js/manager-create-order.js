class ManagerCreateOrder {
    constructor(parentElement) {
        this.rootElement = parentElement;
        this.elements = {};
        this.currentPrice = 0;
    }

    init() {
        this.initElement();
        this.initEventListener();
    }

    initElement() {
        this.elements = {
            repOrder: this.rootElement.querySelector(".rep-order"),
            orderPrice: this.rootElement.querySelector(".order-price"),
            btnOrder: this.rootElement.querySelector(".btn-order"),
        }
    }

    initEventListener() {

    }

    setOrderProduct(product, productQuantity) {
        const templateProduct = `
        <li>
            <h5 class="wrapper-product">
            ${product}: ${productQuantity}x 
            </h5>
        </li>`;

        this.elements.repOrder.innerHTML += templateProduct;
    }

    setTotalPrice(price){
        this.currentPrice = price;
        this.elements.orderPrice.innerHTML = `$${price}`;
    }
    
}

export default ManagerCreateOrder;
