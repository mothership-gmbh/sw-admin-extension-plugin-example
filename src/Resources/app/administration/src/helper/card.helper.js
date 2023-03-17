import { ui } from '@shopware-ag/admin-extension-sdk'
import { getStorage, setStorage } from './storage.helper'

const CARD_STORAGE = 'CARD_STORAGE'

/**
 * We will store the passData to the localStorage
 * TODO: we should implement to set the ID for the cards to support the dynamic
 *
 * @param passData
 * @param messageOptions
 * @returns {Promise<void>}
 */
export const addCard = async ({passData = null, ...messageOptions}) => {
    if (passData) {
        setStorage(CARD_STORAGE, {...passData})
    }

    await ui.componentSection.add(messageOptions)
}

/**
 * Get the card data from the localStorage
 * @returns {*}
 */
export const getData = () => {
    return getStorage(CARD_STORAGE)
}
