import React, { PureComponent } from 'react'
import Box from 'ui-box'

interface OrderedListProps extends React.ComponentProps<typeof Box> {
  /**
   * Size of the text used in a list item.
   * Can be: 300, 400, 500, 600.
   */
  size: 300 | 400 | 500 | 600
}

export default class OrderedList extends PureComponent<OrderedListProps> {
  static defaultProps = {
    size: 400
  }

  render() {
    const { children, size, ...props } = this.props

    const finalChildren = React.Children.map(children, child => {
      if (!React.isValidElement(child)) {
        return child
      }

      const childProps: any = child.props
      return React.cloneElement<{ size?: number }>(child, {
        // Prefer more granularly defined icon if present
        size: childProps.size || size
      })
    })

    return (
      <Box
        is="ol"
        margin={0}
        marginLeft="1.1em"
        padding={0}
        listStylePosition="inside"
        listStyle="decimal"
        {...props}
      >
        {finalChildren}
      </Box>
    )
  }
}
