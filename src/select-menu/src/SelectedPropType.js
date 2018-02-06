import PropTypes from 'prop-types'

/**
 * Selected can either be a string (single values)
 * or an array of string (multiple values)
 * NOTE: multiple values are not supported atm
 */
const SelectedPropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.arrayOf(PropTypes.string)
])

export default SelectedPropType
