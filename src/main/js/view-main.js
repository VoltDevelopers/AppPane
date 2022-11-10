import UtilsFetch from '../../common/js/utils-fetch.js';

import ProductElement from './product-element.js';
import ProductManager from './product-manager.js';
import FilterElement from './filter-element.js';
import FilterManager from './filter-manager.js';

const wrapperProducts = document.querySelector('.wrapper-products');
const wrapperFilters = document.querySelector('.wrapper-filtrs');

const data = {};
const productList = [];
const filterList = [];

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

await dataProduct.forEach(product => {
    const productElement = new ProductElement(wrapperProducts);
    productElement.init();
    productElement.setProductId(product['id']);
    productElement.initAddButton();
    productElement.setProductImg('../common/' + product['foto']);
    productElement.setProductTag(dataFilter[product['idCategoria'] - 1]['categoria']);
    productElement.setProductName(product['nome']);
    productElement.setProductPrice('$' + product['prezzo']);

    productList.push(productElement);
});

const productManager = new ProductManager(productList);

await dataFilter.forEach(filter => {
    const filterElement = new FilterElement(wrapperFilters, productManager, filter['categoria']);
    filterElement.init();
    filterList.push(filterElement);
});

const filterManager = new FilterManager(filterList);