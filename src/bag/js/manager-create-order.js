import CookieManager from "../../common/js/cookie-manager.js";

class ManagerCreateOrder {
    constructor(parentElement) {
        this.rootElement = parentElement;
        this.elements = {};
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
        this.elements.btnOrder.addEventListener('click', (event) => {
            const clientId = CookieManager.getCookie('user_auth');

            if (clientId) {
                location.href = '../shipping-data/shipping-data.php';
            } else {
                location.href = '../login/login.php';
            }
        });
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

    setTotalPrice(price) {
        this.elements.orderPrice.innerHTML = `$${price}`;
    }

}

export default ManagerCreateOrder;
