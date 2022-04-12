/**
 * Returns whether or not the given parameter is a function
 */
const isFunction = <T extends Function = Function>(maybeFunction: T | null | undefined): maybeFunction is T =>
  typeof maybeFunction === 'function'

export default isFunction
