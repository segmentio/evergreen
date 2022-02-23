/**
 * Returns whether or not the value is non-nil and non-empty
 * @param {string | any[] | null | undefined} value Value to check
 * @returns {value is string | any[]}
 */
const hasValue = value => value != null && value.length > 0

export default hasValue
