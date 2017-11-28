import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { selectableRowStyle } from 'evergreen-shared-styles'
import { Pane } from 'evergreen-layers'

export default class TableRow extends PureComponent {
  static propTypes = {
    ...Pane.propTypes,
    onSelect: PropTypes.func,
    isSelectable: PropTypes.bool,
    isSelected: PropTypes.bool,
  }

  static defaultProps = {
    onClick: () => {},
    onSelect: () => {},
    onKeyPress: () => {},
  }

  handleClick = e => {
    this.props.onClick(e)
    this.props.onSelect()
  }

  handleKeyPress = e => {
    if (e.key === 'Enter' || e.key === ' ') {
      this.props.onSelect()
      e.preventDefault()
    }
    this.props.onKeyPress(e)
  }

  render() {
    const {
      children,
      onClick,
      onKeyPress,
      isSelectable,
      isSelected,
      css = {},
      ...props
    } = this.props

    return (
      <Pane
        display="flex"
        {...(isSelected ? { 'aria-selected': true } : {})}
        {...(isSelectable
          ? { css: { ...selectableRowStyle, ...css }, tabindex: 0 }
          : { css })}
        onClick={this.handleClick}
        onKeyPress={this.handleKeyPress}
        {...props}
      >
        {children}
      </Pane>
    )
  }
}
