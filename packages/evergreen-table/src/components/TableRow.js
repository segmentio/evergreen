import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { selectableStyle } from 'evergreen-shared-styles'
import { Pane } from 'evergreen-layers'

export default class TableRow extends PureComponent {
  static propTypes = {
    ...Pane.propTypes,
    isSelectable: PropTypes.bool,
    isSelected: PropTypes.bool,
  }

  render() {
    const {
      children,
      isSelectable,
      isSelected,
      css = {},
      ...props
    } = this.props

    return (
      <Pane
        display="flex"
        {...(isSelected ? { 'aria-selected': true } : {})}
        {...(isSelectable ? { css: { ...selectableStyle, ...css } } : { css })}
        {...props}
      >
        {children}
      </Pane>
    )
  }
}
