import PropTypes from 'prop-types'

/**
 * Selected can either be a string (single values)
 * or can be a number ( single value)
 * or an array of string (multiple values)
 * NOTE: multiple values are not supported atm
 */
const SelectedPropType = PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string), PropTypes.number])

export default SelectedPropType
