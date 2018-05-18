import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Pane } from '../../layers'
import { selectableRowStyle } from '../../shared-styles'

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
     * Function that is called on click and enter/space keypress.
     */
    onDeSelect: PropTypes.func,

    /**
     * Makes the TableRow selectable.
     */
    isSelectable: PropTypes.bool,

    /**
     * Makes the TableRow selected.
     */
    isSelected: PropTypes.bool,

    /**
     * Manually set the TableRow to be highlighted.
     */
    isHighlighted: PropTypes.bool
  }

  static defaultProps = {
    onClick: () => {},
    onSelect: () => {},
    onDeSelect: () => {},
    onKeyPress: () => {}
  }

  handleClick = e => {
    this.props.onClick(e)
    if (this.props.isSelectable) {
      if (this.props.isSelected) {
        this.props.onDeSelect()
      } else {
        this.props.onSelect()
      }
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
      isHighlighted,
      isSelectable,
      isSelected,
      css = {},
      ...props
    } = this.props

    return (
      <Pane
        display="flex"
        {...(isSelectable
          ? {
              'aria-selected': isHighlighted,
              'aria-current': isSelected,
              css: { ...selectableRowStyle, ...css },
              tabIndex: 0
            }
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
