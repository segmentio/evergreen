import isFunction from './is-function'

/**
 * Dedupes the provided collection by the key or predicate function
 * @param {any[]} values Collection of values to dedupe
 * @param {string | (value) => any} predicate Key or selector to demonstrate uniqueness
 * @returns {any[]}
 */
const uniqBy = (values, predicate) => {
  if (!Array.isArray(values)) {
    return []
  }

  const getKey = isFunction(predicate) ? predicate : value => value[predicate]

  const uniqueValues = values
    .filter(item => item != null)
    .reduce((map, item) => {
      const key = getKey(item)

      if (key == null) {
        return map
      }

      return map.has(key) ? map : map.set(key, item)
    }, new Map())
    .values()

  return [...uniqueValues]
}

export default uniqBy
