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

  static styles = {
    is: 'ul',
    margin: 0,
    marginLeft: '1.1em',
    padding: 0,
    listStylePosition: 'inside',
    listStyle: 'disc'
  }

  render() {
    const { children, ...props } = this.props

    const finalChildren = React.Children.map(children, child => {
      if (!React.isValidElement(child)) {
        return child
      }

      return React.cloneElement(child, {
        // Prefer more granularly defined icon if present
        size: child.props.size || this.props.size,
        icon: child.props.icon || this.props.icon,
        iconColor: child.props.iconColor || this.props.iconColor
      })
    })

    return (
      <Box {...UnorderedList.styles} {...props}>
        {finalChildren}
      </Box>
    )
  }
}
