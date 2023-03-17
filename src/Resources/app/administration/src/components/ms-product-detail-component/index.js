import template from './ms-product-detail-card-component.twig';
import { pullData } from '../../helper/card.helper'

Shopware.Component.register('ms-product-detail-card-component', {
    template,

    data() {
        return {
            product: null,
        }
    },

    created() {
        const { product } = pullData({});
        this.product = product;
    },
})
