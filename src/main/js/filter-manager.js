class FilterManager {
    constructor(filters) {
        this.filters = filters;
        this.activeFilter = null;

        this.initEventListener();
    }

    initEventListener() {
        this.filters.forEach(filter => {
            filter.getFilterElement().addEventListener('click', (event) => {
                if (this.activeFilter) {

                    this.activeFilter.cancelFilter();
                    if (this.activeFilter != filter) {
                        filter.applyFilter();
                        this.activeFilter = filter;
                    }else{
                        filter.cancelFilter();
                        this.activeFilter = null;
                    }
                } else {
                    filter.applyFilter();
                    this.activeFilter = filter;
                }
            });
        });
    }
}

export default FilterManager;