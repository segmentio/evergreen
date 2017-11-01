import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import TooltipContent from './TooltipContent'

export default class Tooltip extends PureComponent {
  static propTypes = {
    content: PropTypes.node,
    isShown: PropTypes.bool,
    children: PropTypes.node,
    tooltipProps: PropTypes.object,
  }

  constructor(props, context) {
    super(props, context)
    this.state = {
      isShown: false,
    }
  }

  getTargetRect = () => this.targetNode.getBoundingClientRect()

  getRef = ref => {
    this.targetNode = ref
  }

  show = () => {
    if (this.state.isShown) return
    this.setState({
      isShown: true,
      targetRect: this.getTargetRect(),
    })
  }

  hide = () => {
    if (!this.state.isShown) return
    this.setState({
      isShown: false,
      targetRect: this.getTargetRect(),
    })
  }

  render() {
    const { isShown, content, children, tooltipProps, ...props } = this.props
    const { isShown: stateIsShown, targetRect } = this.state

    const shown = isShown || stateIsShown

    return [
      typeof children === 'function'
        ? children({
            targetRect,
            show: this.show,
            hide: this.hide,
            getRef: this.getRef,
            isShown: shown,
            key: 'tooltip-child',
          })
        : React.cloneElement(children, {
            onMouseEnter: this.show,
            onMouseLeave: this.hide,
            innerRef: ref => {
              this.getRef(ref)
            },
            ...(shown ? { 'data-tooltip-opened': true } : {}),
            key: 'tooltip-child',
          }),
      <TooltipContent
        targetRect={targetRect}
        isShown={shown}
        tooltipProps={tooltipProps}
      >
        {content}
      </TooltipContent>,
    ]
  }
}
