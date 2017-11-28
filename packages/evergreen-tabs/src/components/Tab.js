import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Text } from 'evergreen-typography'
import {
  getTextStyleForControlHeight,
  selectableTabStyle,
} from 'evergreen-shared-styles'

export default class Tab extends PureComponent {
  static propTypes = {
    ...Text.propTypes,
    onSelect: PropTypes.func,
    isSelected: PropTypes.bool,
  }

  static defaultProps = {
    onClick: () => {},
    onSelect: () => {},
    onKeyPress: () => {},
    is: 'span',
    display: 'inline-flex',
    fontWeight: 500,
    paddingX: 8,
    marginX: 4,
    borderRadius: 3,
    height: 28,
    lineHeight: '28px',
    alignItems: 'center',
    justifyContent: 'center',
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
    const { is, height, css, onSelect, isSelected, ...props } = this.props
    const textStyle = getTextStyleForControlHeight({ height })

    let elementBasedProps
    if (is === 'a') {
      // Use aria-current when it's a link
      // https://tink.uk/using-the-aria-current-attribute/
      elementBasedProps = isSelected
        ? {
            'aria-current': 'page',
          }
        : {}
    } else {
      // Use a role="tablist" around the tabs
      // Also pass down a aria-controls="panelId"
      // https://www.stefanjudis.com/blog/aria-selected-and-when-to-use-it/
      elementBasedProps = {
        'aria-selected': isSelected,
        role: 'tab',
      }
    }

    return (
      <Text
        is={is}
        textDecoration="none"
        tabIndex={0}
        {...textStyle}
        height={height}
        {...props}
        onClick={this.handleClick}
        onKeyPress={this.handleKeyPress}
        {...elementBasedProps}
        css={
          css
            ? {
                ...selectableTabStyle,
                ...css,
              }
            : selectableTabStyle
        }
      />
    )
  }
}
