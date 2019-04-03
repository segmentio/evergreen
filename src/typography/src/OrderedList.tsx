import * as React from 'react'
import Box, { BoxProps } from 'ui-box'

type Size = 300 | 400 | 500 | 600

interface IProps extends BoxProps {
  size: Size
}

export default class OrderedList extends React.PureComponent<IProps> {
  static defaultProps = {
    size: 400 as Size
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

    const finalChildren = React.Children.map(
      children,
      (child: { props: IProps }) => {
        if (!React.isValidElement(child)) {
          return child
        }

        return React.cloneElement(child, {
          // Prefer more granularly defined icon if present
          size: child.props.size || size
        })
      }
    )

    return (
      <Box {...OrderedList.styles} {...props}>
        {finalChildren}
      </Box>
    )
  }
}
