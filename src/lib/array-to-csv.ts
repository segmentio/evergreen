import isEmpty from 'lodash.isempty'

/**
 * Converts an array to a comma separated string
 */
const arrayToCsv = <T extends string = string>(value?: T[]): string => {
  // Accept only array values + ensure there values inside the array, otherwise
  // there's nothing to join
  if (!Array.isArray(value) || isEmpty(value)) {
    return ''
  }

  return value.join(',')
}

export default arrayToCsv
