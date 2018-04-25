import isDev from './isDev'

const whitelist = [
  'background',
  'backgroundColor',
  'backgroundImage',

  'transition',
  'boxShadow',
  'opacity',

  'color',
  'textShadow',

  'outline'
]

/**
 * @param {object?} obj - input object that will be filtered against the whitelist.
 * @return {object} the result will always be a object
 */
function createAppearance(obj = {}) {
  const result = {}

  Object.keys(obj).forEach(key => {
    if (whitelist.includes(key)) {
      if (typeof obj[key] === 'string') {
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
        `createAppearance() only accepts whitelisted properties, key '${key}' is not whitelisted`
      )
    }
  })

  return result
}

export default createAppearance
