import merge from 'lodash.merge'

export function get(obj: any, path: any, fallback: any) {
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
export function getValue(theme: any, pathOrValue: any) {
  return get(theme, pathOrValue, pathOrValue)
}

/**
 * Adds or overrides theme values on top of an existing theme object
 * @param destinationTheme Theme object to merge on top of
 * @param sourceTheme Theme object that adds or overrides values
 */
export function mergeTheme(destinationTheme: any, sourceTheme: any) {
  return merge({}, destinationTheme, sourceTheme)
}

/**
 * Resolves an object (or style config) when referencing theme paths
 * It will preserve the original object structure (nesting)
 * @param {object} theme
 * @param {object} obj
 * @returns {object} a new object with theme-resolved properties
 */
export function resolveThemeTokens(theme: any, obj: any) {
  const result = {}

  for (const key of Object.keys(obj)) {
    const raw = obj[key]

    if (raw === null) {
      continue
    }

    if (typeof raw === 'object') {
      // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
      result[key] = resolveThemeTokens(theme, raw)
    } else {
      // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
      result[key] = getValue(theme, raw)
    }
  }

  return result
}
