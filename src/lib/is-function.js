/**
 * Returns whether or not the given parameter is a function
 * @param {Function | null | undefined} maybeFunction
 * @returns {maybeFunction is Function}
 */
const isFunction = maybeFunction => typeof maybeFunction === 'function'

export default isFunction
