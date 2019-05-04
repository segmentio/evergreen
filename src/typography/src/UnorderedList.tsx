import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'

export default class UnorderedList extends PureComponent {
  static propTypes = {
    ...Box.propTypes,

    /**
     * Size of the text used in a list item.
     * Can be: 300, 400, 500, 600.
     */
    size: PropTypes.oneOf([300, 400, 500, 600]).isRequired,

    /**
     * When passed, adds a icon before each list item in the list
     * You can override this on a individual list item.
     */
    icon: PropTypes.string,

    /**
     * The color of the icon in each list item in the list.
     */
    iconColor: PropTypes.string
  }

  static defaultProps = {
    size: 400
  }

  static styles = {
    is: 'ul',
    margin: 0,
    marginLeft: '1.1em',
    padding: 0,
    listStylePosition: 'inside',
    listStyle: 'disc'
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
      <Box {...UnorderedList.styles} {...props}>
        {finalChildren}
      </Box>
    )
  }
}
