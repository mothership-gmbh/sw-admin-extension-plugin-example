import { location } from '@shopware-ag/admin-extension-sdk';
import '../components/ms-product-detail-card-component';
import '../components/ms-product-detail-card-data-component';
import '../components/ms-dashboard-modal-component';

/**
 * You can see the document of the locations in the link below
 * https://shopware.github.io/admin-extension-sdk/docs/guide/concepts/locations#for-existing-plugin-migrations-render-vue-components-instead-of-iframes
 */
if (!location.isIframe()) {
    // Add the component name to the specific location
    Shopware.State.commit('sdkLocation/addLocation', {
        locationId: 'ms-production-extension-normal-example', // The locationId to display the component
        componentName: 'ms-product-detail-card-component' // Display the content within the component
    })

    Shopware.State.commit('sdkLocation/addLocation', {
        locationId: 'ms-production-extension-example',
        componentName: 'ms-product-detail-card-data-component'
    })

    Shopware.State.commit('sdkLocation/addLocation', {
        locationId: 'ms-demo-plugin-dashboard-modal-location',
        componentName: 'ms-dashboard-modal-component'
    })
}
