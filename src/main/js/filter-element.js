class FilterElement {
    constructor(parentElement, productManager, filterName) {
        this.rootElement = parentElement;
        this.productManager = productManager;
        this.elements = {};
        this.filterName = filterName;
        this.isActive = false;

        const parser = new DOMParser();
        const templateString = `<div class="wrapper-filter-element"><h5>${this.filterName}</h5></div>`;
        const templateElement = parser.parseFromString(templateString, 'text/html');
        this.template = templateElement.documentElement.querySelector("body > div");
    }

    init() {
        this.initElements();
        this.initEventListener();
    }

    initElements() {
        this.elements = {
            wrapperFilter: this.template,
        };

        this.rootElement.appendChild(this.template);
    }

    initEventListener() {
        this.elements.wrapperFilter.addEventListener('click', (event) => {
            if (this.isActive) {
                this.productManager.showAllProducts();
                event.target.style.background = '#A38D75';
                this.isActive = false;
            } else {
                this.productManager.showOnlyProducts(this.filterName);
                event.target.style.background = '#1D1D1D';
                this.isActive = true;
            }
        });
    }
}

export default FilterElement;