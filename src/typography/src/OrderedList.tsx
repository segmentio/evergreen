import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'

export default class OrderedList extends PureComponent {
  static propTypes = {
    ...Box.propTypes,

    /**
     * Size of the text used in a list item.
     * Can be: 300, 400, 500, 600.
     */
    size: PropTypes.oneOf([300, 400, 500, 600]).isRequired
  }

  static defaultProps = {
    size: 400
  }

  static styles = {
    is: 'ol',
    margin: 0,
    marginLeft: '1.1em',
    padding: 0,
    listStylePosition: 'inside',
    listStyle: 'decimal'
  }

  render() {
    const { children, size, ...props } = this.props

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
      <Box {...OrderedList.styles} {...props}>
        {finalChildren}
      </Box>
    )
  }
}
