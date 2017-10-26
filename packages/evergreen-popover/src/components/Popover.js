import React, { Component } from 'react'
import PropTypes from 'prop-types'
import objectValues from 'object-values'
import PopoverContentCard from './PopoverContentCard'
import PopoverSides from '../popover-sides'

export default class Popover extends Component {
  static propTypes = {
    side: PropTypes.oneOf(objectValues(PopoverSides)),
    onOpen: PropTypes.func.isRequired,
    // Use isOpen to manually control the Popover
    isOpen: PropTypes.bool,
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
      targetRect: {},
    }
  }

  componentWillReceiveProps(nextProps) {
    if (Object.prototype.hasOwnProperty.call(nextProps, 'isOpen')) {
      if (nextProps.isOpen) {
        this.setState({
          targetRect: this.getTargetRect(),
        })
      }
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

  getTargetRect = () => this.targetNode.getBoundingClientRect()

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

    this.setState({ isOpen: true, targetRect: this.getTargetRect() })
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
      isOpen,
    } = this.props
    const { isOpen: stateIsOpen, targetRect } = this.state

    const open = isOpen || stateIsOpen

    return [
      typeof children === 'function'
        ? children({
            targetRect,
            toggle: this.toggle,
            getRef: this.getRef,
            isOpen: open,
            key: 'popover-child',
          })
        : React.cloneElement(children, {
            onClick: () => this.toggle(),
            innerRef: ref => {
              this.getRef(ref)
            },
            ...(open ? { 'data-popover-opened': true } : {}),
            key: 'popover-child',
          }),
      <PopoverContentCard
        key="popover-card"
        innerRef={ref => {
          this.popoverNode = ref
        }}
        isOpen={open}
        targetRect={targetRect}
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
          ? content({ targetRect, close: this.close })
          : content}
      </PopoverContentCard>,
    ]
  }
}
