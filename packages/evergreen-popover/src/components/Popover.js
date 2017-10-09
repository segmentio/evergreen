import React, { Component } from 'react'
import PropTypes from 'prop-types'
import objectValues from 'object-values'
import PopoverContentCard from './PopoverContentCard'
import PopoverSides from '../popover-sides'

export default class Popover extends Component {
  static propTypes = {
    side: PropTypes.oneOf(objectValues(PopoverSides)),
    onOpen: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    content: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
      .isRequired,
    useSmartPositioning: PropTypes.bool,
    minWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    minHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    zIndex: PropTypes.number,
    display: PropTypes.string,
    bodyOffset: PropTypes.number,
    targetOffset: PropTypes.number,
  }

  static defaultProps = {
    side: PopoverSides.BOTTOM,
    useSmartPositioning: true,
    onOpen: () => {},
    onClose: () => {},
    minWidth: 200,
    minHeight: 40,
    zIndex: 50,
    bodyOffset: 8,
    targetOffset: 4,
  }

  constructor() {
    super()
    this.state = {
      isOpen: false,
      anchors: {
        top: {
          x: 0,
          y: 0,
        },
        bottom: {
          x: 0,
          y: 0,
        },
      },
    }
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.onBodyClick, false)
    document.body.removeEventListener('keydown', this.onEsc, false)
    window.removeEventListener('resize', this.resize, false)
  }

  onBodyClick = e => {
    // Ignore clicks on the popover or button
    if (this.targetNode === e.target) {
      return
    }

    if (
      this.popoverNode &&
      (this.popoverNode === e.target || this.popoverNode.contains(e.target))
    ) {
      return
    }

    this.close()
  }

  onResize = () => {
    this.close()
  }

  onEsc = e => {
    // esc key
    if (e.keyCode === 27) {
      this.close()
    }
  }

  getRef = ref => {
    this.targetNode = ref
  }

  getAnchors = () => {
    const targetRect = this.targetNode.getBoundingClientRect()
    const bodyRect = document.body.getBoundingClientRect()
    const x = targetRect.left + targetRect.width / 2
    return {
      top: {
        x,
        y: targetRect.top - bodyRect.top,
      },
      bottom: {
        x,
        y: targetRect.bottom - bodyRect.top,
      },
    }
  }

  toggle = () => {
    const isOpen = !this.state.isOpen

    if (isOpen) {
      this.open()
    } else {
      this.close()
    }

    this.setState({ isOpen })
  }

  open = () => {
    if (this.state.isOpen) {
      return
    }

    this.setState({ isOpen: true, anchors: this.getAnchors() })
    document.body.addEventListener('click', this.onBodyClick, false)
    document.body.addEventListener('keydown', this.onEsc, false)
    window.addEventListener('resize', this.onResize, false)

    this.props.onOpen()
  }

  close = () => {
    if (!this.state.isOpen) {
      return
    }

    this.setState({ isOpen: false })
    document.body.removeEventListener('click', this.onBodyClick, false)
    document.body.removeEventListener('keydown', this.onEsc, false)
    window.removeEventListener('resize', this.resize, false)

    this.props.onClose()
  }

  render() {
    const {
      children,
      content,
      side,
      useSmartPositioning,
      minWidth,
      minHeight,
      display,
      zIndex,
      bodyOffset,
      targetOffset,
    } = this.props
    const { isOpen, anchors } = this.state

    return [
      typeof children === 'function'
        ? children({
            toggle: this.toggle,
            getRef: this.getRef,
            isOpen,
            key: 'popover-child',
          })
        : React.cloneElement(children, {
            onClick: () => this.toggle(),
            innerRef: ref => {
              this.getRef(ref)
            },
            ...(isOpen ? { 'data-popover-opened': true } : {}),
            key: 'popover-child',
          }),
      <PopoverContentCard
        key="popover-card"
        innerRef={ref => {
          this.popoverNode = ref
        }}
        isOpen={isOpen}
        anchors={anchors}
        side={side}
        useSmartPositioning={useSmartPositioning}
        minWidth={minWidth}
        minHeight={minHeight}
        display={display}
        zIndex={zIndex}
        bodyOffset={bodyOffset}
        targetOffset={targetOffset}
      >
        {typeof content === 'function'
          ? content({ close: this.close })
          : content}
      </PopoverContentCard>,
    ]
  }
}
