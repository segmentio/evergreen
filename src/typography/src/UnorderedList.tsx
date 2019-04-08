import { IconName } from '@blueprintjs/icons'
import * as PropTypes from 'prop-types'
import * as React from 'react'
import Box, { BoxProps } from 'ui-box'

type Size = 300 | 400 | 500 | 600

interface IProps extends Partial<BoxProps> {
  size?: Size

  // When passed, adds a icon before each list item in the list. You can override this on a individual list item.
  icon?: IconName

  // The color of the icon in each list item in the list.
  iconColor?: string
}

export default class UnorderedList extends React.PureComponent<IProps> {
  static propTypes = {
    ...Box.propTypes,
    size: PropTypes.oneOf([300, 400, 500, 600])
      .isRequired as PropTypes.Validator<Size>,
    icon: PropTypes.string,
    iconColor: PropTypes.string
  }

  static defaultProps = {
    size: 400 as Size
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
