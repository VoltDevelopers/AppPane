import CookieManager from "../../common/js/cookie-manager.js";
import UtilsFetch from '../../common/js/utils-fetch.js';
import ProductInBagElement from './product-in-bag-element.js';
import ManagerCreateOrder from "./manager-create-order.js";

const wrapperProducts = document.querySelector('.articles-wrapper');
const wrapperOrder = document.querySelector('.order-all');
const bagStatus = document.querySelector(".bag-status");
const data = {
    'idClient': CookieManager.getCookie('user_auth'),
    'token': CookieManager.getCookie('user_id'),
};

const temp = new ManagerCreateOrder(wrapperOrder);
temp.init();

const productInBagList = [];
const productList = [];
let totalPrice = 0;

await UtilsFetch.postData('./php/bag-product.php', data)
    .then(response => {
        if (response.status == 200) {
            wrapperProducts.style.display = "flex";
            wrapperOrder.style.display = "block";
            bagStatus.innerHTML = "I tuoi prodotti";
            const productData = JSON.parse(response.data);
            productData.forEach(productElement => {
                const product = new ProductInBagElement(wrapperProducts);
                product.init();
                product.setProductInBagId(productElement['id']);
                product.setProductInBagName(productElement['nome']);
                product.setProductImg('../common/' + productElement['foto']);
                product.setProductInBagDescription(productElement['descrizione']);
                product.setProductInBagCurrentQuantity(productElement['quantita']);
                product.setProductInBagPrice(productElement['prezzo'] * productElement['quantita']);
                productList.push(product);

                totalPrice += parseInt(productElement['prezzo']);

                temp.setOrderProduct(productElement['nome'], productElement['quantita']);
            });
        }

        const cookieProductsIndex = CookieManager.getCookie('temp_bag_product_index');
        const cookieAuth = CookieManager.getCookie('user_auth');
        if (cookieProductsIndex) {
            for (let i = 1; i <= cookieProductsIndex; i++) {
                const tempProduct = CookieManager.getCookie('temp_product_in_bag_' + i);
                if (tempProduct) {
                    const data = {
                        idProduct: JSON.parse(tempProduct).idProduct,
                        quantity: JSON.parse(tempProduct).quantity,
                    };
                    UtilsFetch.postData('./php/bag-product-extend.php', data)
                        .then(response => {
                            const responceData = JSON.parse(response.data);
                            if (cookieAuth) {
                                const data = {
                                    idProduct: JSON.parse(tempProduct).idProduct,
                                    quantity: JSON.parse(tempProduct).quantity,
                                    token: JSON.parse(tempProduct).token,
                                    idClient: cookieAuth,
                                };
                                UtilsFetch.postData('../common/php/add-product-to-bag.php', data)
                                    .then(response => {
                                        console.log(response);
                                        CookieManager.setCookie('temp_product_in_bag_' + i, null, 1);
                                        CookieManager.setCookie('temp_bag_product_index', cookieProductsIndex - i, 1);
                                        document.location.reload();
                                    });
                            } else {
                                const product = new ProductInBagElement(wrapperProducts);
                                product.init();
                                product.setProductInBagId(responceData.id);
                                product.setProductInBagName(responceData.nome);
                                product.setProductImg('../common/' + responceData.foto);
                                product.setProductInBagDescription(responceData.descrizione);
                                product.setProductInBagCurrentQuantity(data.quantity);
                                product.setProductInBagPrice(responceData.prezzo * data.quantity);
                                productList.push(product);

                                totalPrice += parseInt(responceData.prezzo);
                                temp.setOrderProduct(responceData.nome, data.quantity);

                                temp.setTotalPrice(totalPrice);
                            }
                        });
                }
            }
        }

        temp.setTotalPrice(totalPrice);

        if (response.status == 417 && !cookieProductsIndex) {
            wrapperProducts.style.display = "none";
            wrapperOrder.style.display = "none";
            bagStatus.innerHTML = "Non ci sono prodotti nel carrello";
        }
       
    });

