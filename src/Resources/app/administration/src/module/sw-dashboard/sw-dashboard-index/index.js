import { notification, ui, window } from '@shopware-ag/admin-extension-sdk';

Shopware.Component.override('sw-dashboard-index', {
    methods: {
        async createdComponent() {
            await this.openModal();

            this.$super('createdComponent')
        },

        // Create a modal by using admin-extension-sdk
        async openModal() {
            const modalLocationId = 'ms-demo-plugin-dashboard-modal-location'

            await ui.modal.open({
                title: 'Welcome to the demo | Mothership GmbH',
                locationId: modalLocationId,
                variant: 'large',
                showHeader: true,
                closable: true,
                buttons: [
                    // A button that redirects to a url
                    {
                        label: 'Linkedin',
                        variant: 'ghost',
                        method: () => {
                            window.redirect({
                                url: 'https://www.linkedin.com/company/mothership-gmbh/',
                                newTab: true
                            })
                        }
                    },
                    // A button to dispatch a notification
                    {
                        label: 'Dispatch notification',
                        method: () => {
                            notification.dispatch({
                                message: 'Hello from the modal',
                                title: 'Modal example'
                            })
                        }
                    },
                    // A button to close the modal
                    {
                        label: 'Close',
                        variant: 'primary',
                        method: () => {
                            ui.modal.close({
                                locationId: modalLocationId // The modal location ID
                            })
                        }
                    }
                ],
            })
        }
    }
});
