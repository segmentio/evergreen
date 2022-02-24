import isEmpty from 'lodash.isempty'

/**
 * Converts an array or string to a comma separated string
 * @param {string | string[] | null | undefined} value
 * @returns {string}
 */
const arrayToCsv = value => {
  if (isEmpty(value)) {
    return ''
  }

  return Array.isArray(value) ? value.join(',') : value
}

export default arrayToCsv
