import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from 'evergreen-colors'
import { Pane } from 'evergreen-layers'
import { Text } from 'evergreen-typography'

export default class AutocompleteItem extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    isEven: PropTypes.bool,
    isSelected: PropTypes.bool,
    isHighlighted: PropTypes.bool,
  }

  render() {
    const {
      isHighlighted,
      isSelected,
      style,
      isEven,
      children,
      ...props
    } = this.props
    return (
      <Pane
        style={style}
        display="flex"
        paddingX={8}
        alignItems="center"
        cursor="pointer"
        {...(isEven && !isHighlighted
          ? {
              backgroundColor: colors.neutral['5'],
            }
          : {})}
        {...(isHighlighted
          ? {
              backgroundColor: colors.blue['300'],
            }
          : {})}
        {...(isSelected
          ? {
              fontWeight: 600,
            }
          : {})}
        {...props}
      >
        <Text size={300} {...(isHighlighted ? { color: '#ffffff' } : {})}>
          {children}
        </Text>
      </Pane>
    )
  }
}
