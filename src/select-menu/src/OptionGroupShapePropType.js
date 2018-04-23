import PropTypes from 'prop-types'
import OptionShapePropType from './OptionShapePropType'

const OptionGroupShapePropType = PropTypes.shape({
  /**
   * Heading can be either a string or an object.
   */
  heading: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      isCollapsed: PropTypes.bool,
      isCollapsedByDefault: PropTypes.bool,
      elemRight: PropTypes.node
    })
  ]).isRequired,

  /**
   * Options is an array of the options shape.
   */
  options: PropTypes.arrayOf(OptionShapePropType).isRequired
})

export default OptionGroupShapePropType
