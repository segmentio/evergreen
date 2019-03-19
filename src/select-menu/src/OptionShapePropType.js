import PropTypes from 'prop-types'

const OptionShapePropType = PropTypes.shape({
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  disabled: PropTypes.bool // Optional
})

export default OptionShapePropType
