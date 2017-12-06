import PropTypes from 'prop-types'

const OptionShapePropType = PropTypes.shape({
  label: PropTypes.string,
  labelInList: PropTypes.string, // optional
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
})

export default OptionShapePropType
