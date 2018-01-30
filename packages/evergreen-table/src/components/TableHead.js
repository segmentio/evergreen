/* eslint-disable react/jsx-handler-names */
import React, { PureComponent } from 'react'
import { Pane } from 'evergreen-layers'
import ScrollbarSize from './ScrollbarSize'

export default class TableHead extends PureComponent {
  static propTypes = {
    /**
     * Composes the Pane component as the base.
     */
    ...Pane.propTypes
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
    const { children, ...props } = this.props
    const { scrollbarWidth } = this.state

    return (
      <Pane paddingRight={scrollbarWidth} {...props}>
        {children}{' '}
        <ScrollbarSize handleScrollbarSize={this.handleScrollbarSize} />
      </Pane>
    )
  }
}
