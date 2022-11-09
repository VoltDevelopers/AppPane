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
        // this.elements.btnRemoveArticle.addEventListener('click', (event) => {
        //     this.elements.wrapperProduct.remove();
        // });

        // this.elements.btnAddQuantity.addEventListener('click', (event) => {
        //     const newQuantity = parseInt(this.elements.currentQuantity.textContent) + 1;
        //     this.elements.currentQuantity.innerHTML = newQuantity;
        // });

        // this.elements.btnRemoveQuantity.addEventListener('click', (event) => {
        //     let newQuantity = parseInt(this.elements.currentQuantity.textContent);
        //     if (newQuantity > 1) {
        //         newQuantity--;
        //         this.elements.currentQuantity.innerHTML = newQuantity;
        //     }
        // });
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
        this.elements.orderPrice.innerHTML = `$${price}`;
    }
    
}

export default ManagerCreateOrder;
