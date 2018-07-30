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
     * The height of the table head.
     */
    height: PropTypes.number.isRequired,

    /**
     * This should always be true if you are using TableHead together with a TableBody.
     * Because TableBody has `overflowY: scroll` by default.
     */
    accountForScrollbar: PropTypes.bool
  }

  state = {
    scrollbarWidth: 0
  }

  static defaultProps = {
    height: 32,
    accountForScrollbar: true
  }

  handleScrollbarSize = width => {
    this.setState({
      scrollbarWidth: width
    })
  }

  render() {
    const { children, height, accountForScrollbar, ...props } = this.props
    const { scrollbarWidth } = this.state

    return (
      <Pane
        display="flex"
        flexShrink={0}
        paddingRight={scrollbarWidth}
        borderBottom="default"
        background="tint2"
        height={height}
        {...props}
      >
        {children}{' '}
        {accountForScrollbar && (
          <ScrollbarSize handleScrollbarSize={this.handleScrollbarSize} />
        )}
      </Pane>
    )
  }
}
