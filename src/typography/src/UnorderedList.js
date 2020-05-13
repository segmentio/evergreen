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
    icon: PropTypes.node
  }

  static defaultProps = {
    size: 400
  }

  static styles = {
    is: 'ul',
    margin: 0,
    marginLeft: '1.1em',
    padding: 0,
    listStyle: 'disc'
  }

  render() {
    const { children, size, icon, ...props } = this.props

    const enrichedChildren = React.Children.map(children, child => {
      if (!React.isValidElement(child)) {
        return child
      }

      return React.cloneElement(child, {
        icon,
        size,
        // Prefer more granularly defined props if present
        ...child.props
      })
    })

    return (
      <Box {...UnorderedList.styles} {...props}>
        {enrichedChildren}
      </Box>
    )
  }
}
