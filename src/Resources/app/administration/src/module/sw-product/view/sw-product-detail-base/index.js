import { ui } from '@shopware-ag/admin-extension-sdk'
import { addCard } from '../../../../helper/card.helper'
import { isRegisteredSection } from '../../../../helper/registeredSections.helper'

Shopware.Component.override('sw-product-detail-base', {
    watch: {
        async product() {
            await this.initCards()
        },
    },

    methods: {
        async initCards() {
            // Create a card from admin-extension-sdk
            await this.createNormalCard();

            // A custom card with support to passing the data
            await this.createCardWithPassingData();
        },

        async createNormalCard() {
            const positionId = 'sw-product-detail-base-labelling__after';
            const locationId = 'ms-production-extension-normal-example';

            // Do not register the section if it is existing
            if (await isRegisteredSection(positionId, locationId)) {
                return;
            }

            await ui.componentSection.add({
                component: 'card',
                positionId,
                props: {
                    title: 'Normal card from the plugin demo',
                    subtitle: 'I am from Mothership',
                    locationId,
                },
            })
        },

        async createCardWithPassingData() {
            const positionId = 'sw-product-detail-base-labelling__before'
            const locationId = 'ms-production-extension-example'

            // Do not register the section if it is existing
            if (await isRegisteredSection(positionId, locationId)) {
                return
            }

            await addCard({
                component: 'card',
                positionId,
                props: {
                    title: 'Custom card with passing product data',
                    subtitle: 'I am from Mothership',
                    locationId,
                },
                passData: {
                    productId: this.product.id ?? null // The data you want to pass to the component
                }
            })
        },
    }
});
