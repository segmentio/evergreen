import React, { PureComponent } from 'react'
import Box from 'ui-box'

interface UnorderedListProps extends React.ComponentProps<typeof Box> {
  /**
   * When passed, adds a icon before the list item.
   * See Evergreen `Icon` for documentation.
   */
  icon?: string

  /**
   * The color of the icon in each list item in the list.
   */
  iconColor?: string

  /**
   * Size of the text used in a list item.
   * Can be: 300, 400, 500, 600.
   */
  size?: 300 | 400 | 500 | 600
}

export default class UnorderedList extends PureComponent<UnorderedListProps> {
  static defaultProps = {
    size: 400
  }

  render() {
    const { children, size, icon, iconColor, ...props } = this.props

    // Only pass down icon-related props if specified
    const inheritedProps = icon ? { size, icon, iconColor } : { size }

    const finalChildren = React.Children.map(children, child => {
      if (!React.isValidElement(child)) {
        return child
      }

      return React.cloneElement(child, {
        ...inheritedProps,
        // Prefer more granularly defined icon if present
        ...child.props
      })
    })

    return (
      <Box
        is="ul"
        margin={0}
        marginLeft="1.1em"
        padding={0}
        listStyle="disc"
        {...props}
      >
        {finalChildren}
      </Box>
    )
  }
}
