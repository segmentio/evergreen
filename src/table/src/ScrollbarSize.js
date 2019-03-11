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

  componentDidUpdate() {
    if (this.state.innerWidth && this.state.outerWidth) {
      this.props.handleScrollbarSize(
        this.state.outerWidth - this.state.innerWidth
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
