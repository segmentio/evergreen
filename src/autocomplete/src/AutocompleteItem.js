import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Option from '../../select-menu/src/Option'

export default class AutocompleteItem extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    isSelected: PropTypes.bool,
    isHighlighted: PropTypes.bool
  }

  render() {
    const { isHighlighted, isSelected, style, children, ...props } = this.props

    return (
      <Option
        isHighlighted={isHighlighted}
        isSelected={isSelected}
        label={children}
        style={style}
        {...props}
      />
    )
  }
}
