/* eslint-disable react/no-unused-state */
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class ScrollbarSize extends PureComponent {
  static propTypes = {
    /**
     * Returns the size of the scrollbar by creating a hidden fixed div.
     */
    handleScrollbarSize: PropTypes.func
  }

  static defaultProps = {
    handleScrollbarSize: () => {}
  }

  state = {
    innerWidth: null,
    outerWidth: null
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.innerWidth && nextState.outerWidth) {
      this.props.handleScrollbarSize(
        nextState.outerWidth - nextState.innerWidth
      )
    }
  }

  handleRef = ref => {
    if (ref === null) return
    const outerWidth = ref.getBoundingClientRect().width
    this.setState({
      outerWidth
    })
  }

  handleInnerRef = ref => {
    if (ref === null) return
    const innerWidth = ref.getBoundingClientRect().width
    this.setState({
      innerWidth
    })
  }

  render() {
    return (
      <div
        ref={this.handleRef}
        aria-hidden
        style={{
          position: 'fixed',
          top: -500,
          left: -500,
          width: 100,
          overflowY: 'scroll'
        }}
      >
        <div ref={this.handleInnerRef} />
      </div>
    )
  }
}
