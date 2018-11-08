import isDev from './isDev'

const whitelist = [
  'background',
  'backgroundColor',
  'backgroundImage',

  'borderRadius',

  'transition',
  'boxShadow',
  'opacity',

  'color',
  'textShadow',

  'outline',
  // Not sure if cursor should be configurable
  'cursor',

  // Added to prevent pointer events on disabled tab
  'pointerEvents'
]

/**
 * @param {object?} obj - input object that will be filtered against the whitelist.
 * @return {object} the result will always be a object
 */
function createAppearance(obj = {}) {
  const result = {}

  Object.keys(obj).forEach(key => {
    if (whitelist.includes(key)) {
      if (typeof obj[key] === 'string' || typeof obj[key] === 'number') {
        result[key] = obj[key]
      } else if (isDev) {
        console.error(
          `createAppearance() only accepts strings as properties, key '${key}' with value '${
            obj[key]
          }' is not a string`
        )
      }
    } else if (isDev) {
      console.error(
        `createAppearance() only accepts whitelisted properties, key '${key}' is not whitelisted in whitelist: `,
        whitelist
      )
    }
  })

  return result
}

export default createAppearance
