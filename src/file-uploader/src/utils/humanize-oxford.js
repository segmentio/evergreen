import isEmpty from '../../../lib/is-empty'

/**
 * Returns an oxford-comma-separated string of the provided items
 * @param {string[]} values
 * @param {string} joinString String to join elements ('and' or 'or')
 * @returns {string}
 */
const humanizeOxford = (values, joinString = 'and') => {
  if (isEmpty(values)) {
    return ''
  }

  if (values.length < 2) {
    return values.join('')
  }

  if (values.length === 2) {
    return values.join(` ${joinString} `)
  }

  const lastItem = values[values.length - 1]
  const endingString = `, ${joinString} ${lastItem}`
  return `${values.slice(0, -1).join(', ')}${endingString}`
}

export default humanizeOxford
