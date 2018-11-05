import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Pane } from '../../layers'
import { withTheme } from '../../theme'
import safeInvoke from '../../lib/safe-invoke'
import warning from '../../lib/warning'
import { TableRowProvider } from './TableRowContext'
import manageTableRowFocusInteraction from './manageTableRowFocusInteraction'

class TableRow extends PureComponent {
  static propTypes = {
    /**
     * Composes the Pane component as the base.
     */
    ...Pane.propTypes,

    /**
     * The height of the row. Remember to add paddings when using "auto".
     */
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
      .isRequired,

    /**
     * Function that is called on click and enter/space keypress.
     */
    onSelect: PropTypes.func,

    /**
     * Function that is called on click and enter/space keypress.
     */
    onDeselect: PropTypes.func,

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
    isHighlighted: PropTypes.bool,

    /**
     * The intent of the alert.
     */
    intent: PropTypes.oneOf(['none', 'success', 'warning', 'danger'])
      .isRequired,

    /**
     * The appearance of the table row. Default theme only support default.
     */
    appearance: PropTypes.string.isRequired,

    /**
     * Theme provided by ThemeProvider.
     */
    theme: PropTypes.object.isRequired,

    /**
     * Class name passed to the table row.
     * Only use if you know what you are doing.
     */
    className: PropTypes.string
  }

  static defaultProps = {
    intent: 'none',
    appearance: 'default',
    height: 48,
    onSelect: () => {},
    onDeselect: () => {},
    onKeyPress: () => {}
  }

  handleClick = e => {
    if (typeof this.props.onClick === 'function') {
      this.props.onClick(e)
    }

    if (this.props.isSelectable) {
      if (this.props.isSelected) {
        this.props.onDeselect()
      } else {
        this.props.onSelect()
      }
    }
  }

  handleKeyDown = e => {
    if (this.props.isSelectable) {
      const { key } = e
      if (key === 'Enter' || key === ' ') {
        this.props.onSelect()
        e.preventDefault()
      } else if (key === 'ArrowUp' || key === 'ArrowDown') {
        try {
          manageTableRowFocusInteraction(key, this.mainRef)
        } catch (error) {}
      } else if (key === 'Escape') {
        if (this.mainRef) this.mainRef.blur()
      }
    }

    this.props.onKeyPress(e)
  }

  onRef = ref => {
    this.mainRef = ref
    safeInvoke(this.props.innerRef, ref)
  }

  render() {
    const {
      innerRef,
      theme,
      className,
      height,
      children,
      intent,
      appearance,
      tabIndex = -1,

      // Filter out
      onClick,
      onKeyPress,
      onSelect,
      onDeselect,

      isHighlighted,
      isSelectable,
      isSelected,
      ...props
    } = this.props

    if (process.env.NODE_ENV !== 'production') {
      warning(
        typeof onClick === 'function',
        '<Table.Row> expects `onSelect` prop, but you passed `onClick`.'
      )
    }

    const themedClassName = theme.getRowClassName(appearance, intent)

    return (
      <TableRowProvider height={height}>
        <Pane
          innerRef={this.onRef}
          className={cx(themedClassName, className)}
          display="flex"
          aria-selected={isHighlighted}
          aria-current={isSelected}
          data-isselectable={isSelectable}
          tabIndex={isSelectable ? tabIndex : undefined}
          onClick={this.handleClick}
          onKeyDown={this.handleKeyDown}
          height={height}
          borderBottom="muted"
          {...props}
        >
          {children}
        </Pane>
      </TableRowProvider>
    )
  }
}

export default withTheme(TableRow)
