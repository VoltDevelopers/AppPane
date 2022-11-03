class ProductManager {
    constructor(products) {
        this.products = products;
        this.showAllProducts();
    }

    showAllProducts() {
        this.products.forEach(product => {
            product.showProduct();
        });
    }

    hideAllProducts() {
        this.products.forEach(product => {
            product.hideProduct();
        });
    }

    showOnlyProducts(filterName) {
        this.hideAllProducts();

        this.products.forEach(product => {
            const filterProduct = product.getFilter();
            if (filterProduct == filterName) {
                product.showProduct();
            }
        });
    }
}

export default ProductManager;