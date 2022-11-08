import UtilsFetch from '../../common/js/utils-fetch.js';

import ProductElement from './product-element.js';
import ProductManager from './product-manager.js';
import FilterElement from './filter-element.js';
import FilterManager from './filter-manager.js';

const wrapperProducts = document.querySelector('.wrapper-products');
const data = {};
const productList = [];

let dataProduct = null;
let dataFilter = null;

await UtilsFetch.postData('./php/main-products.php', data)
    .then(response => {
        if (response.status == '200') {
            dataProduct = JSON.parse(response.data);
        } else {
            // todo log error
        }
    });

await UtilsFetch.postData('./php/main-filter.php', data)
    .then(response => {
        if (response.status == '200') {
            dataFilter = JSON.parse(response.data);
        } else {
            // todo log error
        }
    });

dataProduct.forEach(product => {
    const productElement = new ProductElement(wrapperProducts);
    productElement.init();
    productElement.setProductId(product['id']);
    productElement.setProductImg('../common/img-product/bread-2.jpg');
    productElement.setProductTag(dataFilter[product['idCategoria'] - 1]['categoria']);
    productElement.setProductName(product['nome']);
    productElement.setProductPrice('$' + product['prezzo']);

    productList.push(productElement);
});

 // const productManager = new ProductManager(productList);

        // FILTRI

        // let filter1 = new FilterElement(document.querySelector('.wrapper-filtrs'), productManager, 'Pizza');
        // filter1.init();
        // let filter2 = new FilterElement(document.querySelector('.wrapper-filtrs'), productManager, 'Pane');
        // filter2.init();

        // const filters = [filter1, filter2];

        // const filterManager = new FilterManager(filters);