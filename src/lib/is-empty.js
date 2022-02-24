/**
 * Returns whether the value is nil or empty
 * @param {string | any[] | null | undefined} value Value to check
 * @returns {boolean}
 */
const isEmpty = value => value == null || value.length === 0

export default isEmpty
