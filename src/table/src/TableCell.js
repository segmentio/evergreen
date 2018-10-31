import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { toaster } from '../../toaster'
import { withTheme } from '../../theme'
import { Pane } from '../../layers'
import safeInvoke from '../../lib/safe-invoke'
import { TableRowConsumer } from './TableRowContext'
import manageTableCellFocusInteraction from './manageTableCellFocusInteraction'

class TableCell extends PureComponent {
  static propTypes = {
    /**
     * Composes the Pane component as the base.
     */
    ...Pane.propTypes,

    /*
    * Makes the TableCell focusable. Used by EditableCell.
    * Will add tabIndex={-1 || this.props.tabIndex}.
    */
    isSelectable: PropTypes.bool,

    /**
     * The appearance of the table row. Default theme only support default.
     */
    appearance: PropTypes.string.isRequired,

    /**
     * Optional node to be placed on the right side of the table cell.
     * Useful for icons and icon buttons.
     */
    rightView: PropTypes.node,

    /**
     * Theme provided by ThemeProvider.
     */
    theme: PropTypes.object.isRequired,

    /**
     * Class name passed to the table cell.
     * Only use if you know what you are doing.
     */
    className: PropTypes.string
  }

  static defaultProps = {
    appearance: 'default'
  }

  static styles = {
    paddingX: 12,
    boxSizing: 'border-box',
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    flexShrink: 0,
    overflow: 'hidden'
  }

  handleKeyDown = e => {
    if (this.props.isSelectable) {
      const { key } = e
      if (
        key === 'ArrowUp' ||
        key === 'ArrowDown' ||
        key === 'ArrowLeft' ||
        key === 'ArrowRight'
      ) {
        try {
          manageTableCellFocusInteraction(key, this.mainRef)
        } catch (error) {
          toaster.danger('Keyboard interaction not possible')
          console.error('Keyboard control not impossible', error)
        }
      } else if (key === 'Escape') {
        this.mainRef.blur()
      }
    }

    safeInvoke(this.props.onKeyDown, e)
  }

  onRef = ref => {
    this.mainRef = ref
    safeInvoke(this.props.innerRef, ref)
  }

  render() {
    const {
      innerRef,
      theme,
      children,
      appearance,
      onClick,
      onKeyPress,
      onKeyDown,
      isSelectable,
      tabIndex = -1,
      className,
      rightView,
      ...props
    } = this.props

    const themedClassName = theme.getTableCellClassName(appearance)

    return (
      <TableRowConsumer>
        {height => {
          return (
            <Pane
              innerRef={this.onRef}
              height={height}
              className={cx(themedClassName, className)}
              tabIndex={isSelectable ? tabIndex : undefined}
              data-isselectable={isSelectable}
              onClick={onClick}
              onKeyDown={this.handleKeyDown}
              {...TableCell.styles}
              {...props}
            >
              {children}
              {rightView ? rightView : null}
            </Pane>
          )
        }}
      </TableRowConsumer>
    )
  }
}

export default withTheme(TableCell)
