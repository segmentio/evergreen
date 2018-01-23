import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { selectableRowStyle } from 'evergreen-shared-styles'
import { Pane } from 'evergreen-layers'

export default class TableRow extends PureComponent {
  static propTypes = {
    /**
     * Composes the Pane component as the base.
     */
    ...Pane.propTypes,

    /**
     * Function that is called on click and enter/space keypress.
     */
    onSelect: PropTypes.func,

    /**
     * Makes the TableRow selectable.
     */
    isSelectable: PropTypes.bool,

    /**
     * Makes the TableRow selected.
     */
    isSelected: PropTypes.bool
  }

  static defaultProps = {
    onClick: () => {},
    onSelect: () => {},
    onKeyPress: () => {}
  }

  handleClick = e => {
    this.props.onClick(e)
    if (this.props.isSelectable) {
      this.props.onSelect()
    }
  }

  handleKeyPress = e => {
    if (this.props.isSelectable) {
      if (e.key === 'Enter' || e.key === ' ') {
        this.props.onSelect()
        e.preventDefault()
      }
    }

    this.props.onKeyPress(e)
  }

  render() {
    const {
      children,
      onClick, // Filter out onClick
      onKeyPress, // Filter out onKeyPress
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
          ? { css: { ...selectableRowStyle, ...css }, tabIndex: 0 }
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
