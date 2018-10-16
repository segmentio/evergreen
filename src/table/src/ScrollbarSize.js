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

  componentDidMount() {
    const innerWidth = this.innerRef.getBoundingClientRect().width
    const outerWidth = this.outerRef.getBoundingClientRect().width
    this.setState({
      innerWidth,
      outerWidth
    })
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.innerWidth && nextState.outerWidth) {
      this.props.handleScrollbarSize(
        nextState.outerWidth - nextState.innerWidth
      )
    }
  }

  handleOuterRef = ref => {
    this.outerRef = ref
  }

  handleInnerRef = ref => {
    this.innerRef = ref
  }

  render() {
    return (
      <div
        ref={this.handleOuterRef}
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
