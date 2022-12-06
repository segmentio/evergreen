import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { useStyleConfig } from '../../hooks'

const emptyObject = {}

const internalStyles = {
  margin: 0,
  marginLeft: '1.1em',
  padding: 0,
  listStyle: 'decimal'
}

const OrderedList = memo(
  forwardRef(function OrderedList(props, ref) {
    const { children, className, size = 400, ...rest } = props

    const themedProps = useStyleConfig('List', { size }, emptyObject, internalStyles)

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
      <Box is="ol" className={className} {...themedProps} {...rest} ref={ref}>
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
  size: PropTypes.oneOf([300, 400, 500, 600])
}

export default OrderedList
