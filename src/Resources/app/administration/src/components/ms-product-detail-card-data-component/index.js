import template from './ms-product-detail-card-data-component.twig';
import { getData } from "../../helper/card.helper";
import {data} from "@shopware-ag/admin-extension-sdk";

Shopware.Component.register('ms-product-detail-card-data-component', {
    template,

    data() {
        return {
            product: null,
        }
    },

    created() {
        // Get product data we have set after we are creating the card
        const { productId } = getData();
        this.getProduct(productId)
    },

    methods: {
        async getProduct(productId) {
            const productRepository = data.repository('product');
            this.product = await productRepository.get(productId);
        }
    }
})
