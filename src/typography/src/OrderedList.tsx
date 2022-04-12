import React, { memo, forwardRef } from 'react'
import cx from 'classnames'
import Box, { PolymorphicBoxProps } from 'ui-box'
import { Size } from "../../.."
import { useStyleConfig } from '../../hooks'

export interface OrderedListOwnProps {
    /**
     * Size of the text used in a list item.
     */
    size?: Size;
}

export type OrderedListProps = PolymorphicBoxProps<'ol', OrderedListOwnProps>;

const emptyObject = {}

const internalStyles = {
  margin: 0,
  marginLeft: '1.1em',
  padding: 0,
  listStyle: 'decimal'
}

const OrderedList: React.FC<OrderedListProps> = memo(
  forwardRef(function OrderedList(props, ref) {
    const { children, className, size = 400, ...rest } = props

    const { className: themedClassName, ...styleProps } = useStyleConfig('List', { size }, emptyObject, internalStyles)

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
      <Box is="ol" className={cx(className, themedClassName)} {...styleProps} {...rest} ref={ref}>
        {finalChildren}
      </Box>
    )
  })
)

export default OrderedList
