import PropTypes from 'prop-types'

const OptionShapePropType = PropTypes.shape({
  label: PropTypes.string,
  labelInList: PropTypes.string, // Optional
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
})

export default OptionShapePropType
