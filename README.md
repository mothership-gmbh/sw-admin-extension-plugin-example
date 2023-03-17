# Shopware 6 - admin extension plugin example

## What we have in this example:

### Demo with the modal component on the Dashboard
- How to use the [locations](https://shopware.github.io/admin-extension-sdk/docs/guide/concepts/locations) to show the use component instead of loading the iframe
- Redirect to a URL by using the admin extension plugin
- Dispatch notification
- Close the modal
- ...

![demo-dashboard-modal.png](.github%2Fassets%2Fdemo-dashboard-modal.png)

### Demo with the ad card component in the product detail page
- Add a card component is using the admin extension plugin
- Custom the card component to pass the data to the component that is using it
- Handle to avoid duplicate the component sections
- ...

![demo-product-card-modal.png](.github%2Fassets%2Fdemo-product-card-modal.png)

## Important files/directories description


    .
    └── src/app/administration
        ├── src                                             # Source folder
        │    ├── components                                 # Components we are using for the example
        │    │    ├── ms-dashboard-modal-component          # Example with open a modal on the Dashboard
        │    │    ├── ms-product-detail-card-component      # Example with create a normal card
        │    │    ├── ms-product-detail-card-data-component # Example with pass data to card
        │    ├── helper
        │    │    ├── card.helper.js                    # Created a custom card
        │    │    ├── registered-sections.helper.js     # Check existing component sections
        │    │    └── storage.helper.js                 # Save/get data for the passData to the component
        │    ├── module
        │    │    ├── sw-dashboard                      # Init the modal on the dashboard
        │    │    └── sw-product                        # Init the cards in the product detail
        │    ├── init-locations.js                      # Init the components for the locations
        │    └── main.js                                # Main file
        └── index.html                                  # The index file is required it can be use for the iframe


## Installation

- Clone this repository into custom/plugins of your Shopware 6 installation
- Install composer dependencies shopware-cli extension prepare custom/plugins/MsAdminExtensionExample
```shell
shopware-cli extension prepare custom/plugins/MsAdminExtensionExample
```
- Build the assets with shopware-cli extension build custom/plugins/MsAdminExtensionExample
```shell
shopware-cli extension build custom/plugins/MsAdminExtensionExample
```
** Note: If you do not use shopware-cli, you have to run build JS admin after installing and activating.
About the shopware-cli, you can get it [here](https://github.com/FriendsOfShopware/shopware-cli).

## License
Licensed under the MIT License
