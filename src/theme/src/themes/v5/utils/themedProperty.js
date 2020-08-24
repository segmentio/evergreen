/**
 * Helper function for theming.
 * @param {Object} object - an object with theme presets.
 * @param {Object} keyOrValue - the key for the object, or an actual value.
 * @return {*} the value of the object, or the `keyOrValue` itself.
 */
const themedProperty = (object, keyOrValue) => {
  // Check if there is a preset in the collection for the property.
  if (Object.prototype.hasOwnProperty.call(object, keyOrValue)) {
    return object[keyOrValue]
  }

  // If there is no preset, simply return the property as is.
  return keyOrValue
}

export default themedProperty
