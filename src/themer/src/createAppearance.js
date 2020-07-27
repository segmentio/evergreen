import isDev from './isDev'

const allowedProperties = [
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
 * @param {object?} obj - input object that will be filtered against the allowed properties.
 * @return {object} the result will always be a object
 */
function createAppearance(obj = {}) {
  const result = {}

  Object.keys(obj).forEach(key => {
    if (allowedProperties.includes(key)) {
      if (typeof obj[key] === 'string' || typeof obj[key] === 'number') {
        result[key] = obj[key]
      } else if (isDev) {
        console.error(
          `createAppearance() only accepts strings as properties, key '${key}' with value '${obj[key]}' is not a string`
        )
      }
    } else if (isDev) {
      console.error(
        `key '${key}' is not in the allowed properties for createAppearance():`,
        allowedProperties
      )
    }
  })

  return result
}

export default createAppearance
