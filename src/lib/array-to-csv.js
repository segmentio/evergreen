import isEmpty from 'lodash.isempty'

/**
 * Converts an array to a comma separated string
 * @param {string[]} value
 * @returns {string}
 */
const arrayToCsv = value => {
  // Accept only array values + ensure there values inside the array, otherwise
  // there's nothing to join
  if (!Array.isArray(value) || isEmpty(value)) {
    return ''
  }

  return value.join(',')
}

export default arrayToCsv
