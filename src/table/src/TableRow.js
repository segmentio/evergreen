import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Pane } from '../../layers'
import { withTheme } from '../../theme'

class TableRow extends PureComponent {
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
    isSelected: PropTypes.bool,

    /**
     * Manually set the TableRow to be highlighted.
     */
    isHighlighted: PropTypes.bool,

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
    appearance: 'default',
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
      theme,
      className,

      children,
      appearance,
      // Filter out onClick + onKeyPress
      onClick,
      onKeyPress,
      isHighlighted,
      isSelectable,
      isSelected,
      ...props
    } = this.props

    const themedClassName = theme.getRowClassName(appearance)

    return (
      <Pane
        className={cx(themedClassName, className)}
        display="flex"
        aria-selected={isHighlighted}
        aria-current={isSelected}
        {...(isSelectable
          ? {
              tabIndex: 0
            }
          : {})}
        onClick={this.handleClick}
        onKeyPress={this.handleKeyPress}
        {...props}
      >
        {children}
      </Pane>
    )
  }
}

export default withTheme(TableRow)
