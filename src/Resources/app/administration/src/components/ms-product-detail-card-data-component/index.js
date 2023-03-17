import template from './ms-product-detail-card-data-component.twig';
import { getData } from "../../helper/card.helper";

Shopware.Component.register('ms-product-detail-card-data-component', {
    template,

    data() {
        return {
            product: null,
        }
    },

    created() {
        // Get product data we have set after we are creating the card
        const { product } = getData();
        this.product = product;
    },
})
