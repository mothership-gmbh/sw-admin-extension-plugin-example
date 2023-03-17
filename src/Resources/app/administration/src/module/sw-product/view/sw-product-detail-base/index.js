import { ui } from '@shopware-ag/admin-extension-sdk';
import { addCard } from '../../../../helper/card.helper'

Shopware.Component.override('sw-product-detail-base', {
    data() {
        return {
            createdCards: false,
        };
    },

    watch: {
        async product() {
            if (!this.createdCards) {
                await this.initCards()
            }
            this.createdCards = true;
        },

    },

    methods: {
        async initCards() {
            // Create a card from UI
            await ui.componentSection.add({
                component: 'card',
                positionId: 'sw-product-detail-base-labelling__after',
                props: {
                    title: 'Normal card from the plugin demo',
                    subtitle: 'I am from Mothership',
                    locationId: 'ms-production-extension-normal-example',
                },
            })

            // A custom card with support to passing the data
            await addCard({
                component: 'card',
                positionId: 'sw-product-detail-base-labelling__before',
                props: {
                    title: 'Custom card with passing product data',
                    subtitle: 'I am from Mothership',
                    locationId: 'ms-production-extension-example',
                },
                passData: {
                    product: this.product // The data you want to passing to the component
                }
            })
        }
    }
});
