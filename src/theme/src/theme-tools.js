export function get(obj, path, fallback) {
  const keys = path && path.split ? path.split('.') : [path]

  let value = obj
  for (const key of keys) {
    value = value ? value[key] : undefined
  }

  return value === undefined ? fallback : value
}

/**
 * Gets a value from the given theme based on a path when present,
 * else returns the provided value
 * @param {object} theme
 * @param {unknown} pathOrValue
 */
export function getValue(theme, pathOrValue) {
  return get(theme, pathOrValue, pathOrValue)
}

/**
 * Resolves an object (or style config) when referencing theme paths
 * It will preserve the original object structure (nesting)
 * @param {object} theme
 * @param {object} obj
 * @returns {object} a new object with theme-resolved properties
 */
export function resolveThemeTokens(theme, obj) {
  const result = {}

  for (const key of Object.keys(obj)) {
    const raw = obj[key]

    if (raw === null) {
      continue
    }

    if (typeof raw === 'object') {
      result[key] = resolveThemeTokens(theme, raw)
    } else {
      result[key] = getValue(theme, raw)
    }
  }

  return result
}
