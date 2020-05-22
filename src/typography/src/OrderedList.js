import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'

const styles = {
  is: 'ol',
  margin: 0,
  marginLeft: '1.1em',
  padding: 0,
  listStyle: 'decimal'
}

const OrderedList = memo(
  forwardRef((props, ref) => {
    const { children, size, ...rest } = props

    const finalChildren = React.Children.map(children, child => {
      if (!React.isValidElement(child)) {
        return child
      }

      return React.cloneElement(child, {
        // Prefer more granularly defined icon if present
        size: child.props.size || size
      })
    })

    return (
      <Box {...styles} {...rest} innerRef={ref}>
        {finalChildren}
      </Box>
    )
  })
)

OrderedList.propTypes = {
  ...Box.propTypes,

  /**
   * Size of the text used in a list item.
   * Can be: 300, 400, 500, 600.
   */
  size: PropTypes.oneOf([300, 400, 500, 600]).isRequired
}

OrderedList.defaultProps = {
  size: 400
}

export default OrderedList
