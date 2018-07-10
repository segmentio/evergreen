import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Pane } from '../../layers'
import { withTheme } from '../../theme'
import { TableRowProvider } from './TableRowContext'

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
    intent: PropTypes.oneOf(['none', 'success', 'warning', 'danger', 'info'])
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
     * Class name passed to the button.
     * Only use if you know what you are doing.
     */
    className: PropTypes.string
  }

  static defaultProps = {
    intent: 'none',
    appearance: 'default',
    height: 48,
    onClick: () => {},
    onSelect: () => {},
    onDeselect: () => {},
    onKeyPress: () => {}
  }

  handleClick = e => {
    this.props.onClick(e)
    if (this.props.isSelectable) {
      if (this.props.isSelected) {
        this.props.onDeselect()
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
      theme,
      className,
      height,
      children,
      intent,
      appearance,

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

    const themedClassName = theme.getRowClassName(appearance, intent)

    return (
      <TableRowProvider height={height}>
        <Pane
          className={cx(themedClassName, className)}
          display="flex"
          aria-selected={isHighlighted}
          aria-current={isSelected}
          data-isselecteable={isSelectable}
          {...(isSelectable
            ? {
                tabIndex: 0
              }
            : {})}
          onClick={this.handleClick}
          onKeyPress={this.handleKeyPress}
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
