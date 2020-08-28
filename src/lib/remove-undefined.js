/**
 * Cleans an object of undefined values
 */
export default function removeUndefined(input = {}) {
  const obj = { ...input }

  Object.keys(obj).forEach(key => {
    if (obj[key] === undefined) {
      delete obj[key]
    }
  })

  return obj
}
