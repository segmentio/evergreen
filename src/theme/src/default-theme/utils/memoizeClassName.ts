import { css } from 'ui-box'

import { AnyFunction } from '../../../../types/helper'

/**
 * Memoize a function that takes N number of strings as arguments and returns
 * a CSS-in-JS object.
 *
 * The key of the cache will be the concatenated string arguments,
 * For example: `primary_success` or `regular`
 *
 * The CSS-in-JS object will be passed to `glamor` and the generated className
 * will be used as the value in the cache.
 *
 * Why?
 * Glamor, or any CSS-in-JS solution wil have a build-in cache.
 * However, to get the hash/key of this build-in cache a relatively expensive
 * hashing function needs to run on the CSS-in-JS object.
 * This function removes the need for the build-in cache and acts as much
 * faster alternative.
 *
 * @param {function} fn — function that return an appearance (object).
 * @return {string} a class name.
 */
const memoizeClassName = (fn: AnyFunction) => {
  // Memo will hold a list of string keys with string values (classNames).
  const memo: { [key: string]: string } = {}

  // Return the wrapped function.
  return (...args: any[]): string => {
    // Create a key by joining all args.
    const key = args.join('_') || '__no_args__'

    // Check if is already memoized, if so return the result.
    if (memo[key]) return memo[key]

    // Create a new entry in the memo with the generated className.
    memo[key] = css(fn(...args)).toString()

    // Return the newly generated className.
    return memo[key]
  }
}

export default memoizeClassName
