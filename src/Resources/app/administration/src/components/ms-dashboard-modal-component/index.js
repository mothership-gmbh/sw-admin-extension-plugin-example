import template from './ms-dashboard-modal-component.twig';
import './ms-dashboard-modal-component.scss';

import {data, notification, ui, window} from '@shopware-ag/admin-extension-sdk';

Shopware.Component.register('ms-dashboard-modal-component', {
    template,

    data() {
        return {
            isLoading: false,
        }
    },

    methods: {
        async onOpenProductDetailPage() {
            this.isLoading = true;
            const product = await this.getOneProduct();
            this.isLoading = false;

            // Close the modal
            await ui.modal.close({
                locationId: 'ms-demo-plugin-dashboard-modal-location' // The modal location ID
            })

            // redirect to a route by name and params
            await window.routerPush({
                name: 'sw.product.detail.base',
                params: {
                    id: product.id,
                },
            })
        },

        // Get one product in the product repository by using admin-extension-sdk
        async getOneProduct() {
            const criteria = new data.Classes.Criteria();
            criteria.setLimit(1);
            const productRepository = data.repository('product');
            const products = await productRepository.search(criteria);

            if (products.total === 0) {
                await notification.dispatch({
                    variant: 'error',
                    message: 'Unfortunately, you do not have any product',
                })
            }

            return products.first();
        }
    }
})
