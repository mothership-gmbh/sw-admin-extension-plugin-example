/**
 * Get storage we have set
 *
 * @param data
 * @returns {any}
 */
export const getStorage = (data) => {
    const value = JSON.parse(localStorage.getItem(data))
    localStorage.removeItem(data)

    return value
}

/**
 * Set the data to the storage
 *
 * @param field
 * @param value
 */
export const setStorage = (field, value) => {
    localStorage.setItem(field, JSON.stringify(value))
}
