/* eslint-disable react/jsx-handler-names */
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Pane } from '../../layers'
import ScrollbarSize from './ScrollbarSize'

export default class TableHead extends PureComponent {
  static propTypes = {
    /**
     * Composes the Pane component as the base.
     */
    ...Pane.propTypes,

    /**
     * This should always be true if you are using TableHead together with a TableBody.
     * Because TableBody has `overflowY: scroll` by default.
     */
    accountForScrollbar: PropTypes.bool
  }

  static defaultProps = {
    accountForScrollbar: true
  }

  state = {
    scrollbarWidth: 0
  }

  static defaultProps = {
    boxSizing: 'border-box',
    display: 'flex',
    appearance: 'tint2',
    borderBottom: 'extraMuted'
  }

  handleScrollbarSize = width => {
    this.setState({
      scrollbarWidth: width
    })
  }

  render() {
    const { children, accountForScrollbar, ...props } = this.props
    const { scrollbarWidth } = this.state

    return (
      <Pane paddingRight={scrollbarWidth} {...props}>
        {children}{' '}
        {accountForScrollbar && (
          <ScrollbarSize handleScrollbarSize={this.handleScrollbarSize} />
        )}
      </Pane>
    )
  }
}
