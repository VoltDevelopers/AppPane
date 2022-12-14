class FilterElement {
    constructor(parentElement, productManager, filterName) {
        this.rootElement = parentElement;
        this.productManager = productManager;
        this.elements = {};
        this.filterName = filterName;

        const parser = new DOMParser();
        const templateString = `<div class="wrapper-filter-element"><h5 class="light">${this.filterName}</h5></div>`;
        const templateElement = parser.parseFromString(templateString, 'text/html');
        this.template = templateElement.documentElement.querySelector("body > div");
    }

    init() {
        this.initElements();
    }

    initElements() {
        this.elements = {
            wrapperFilter: this.template,
        };

        this.rootElement.appendChild(this.template);
    }

    applyFilter() {
        this.productManager.showOnlyProducts(this.filterName);
        this.elements.wrapperFilter.className = 'wrapper-filter-element wrapper-filter-element-color';
    }

    cancelFilter() {
        this.productManager.showAllProducts();
        this.elements.wrapperFilter.className = 'wrapper-filter-element';
    }

    getFilterElement() {
        return this.elements.wrapperFilter;
    }
}

export default FilterElement;