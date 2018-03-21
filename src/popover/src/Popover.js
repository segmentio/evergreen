import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Position, Positioner2 } from '../../positioner'
import PopoverStateless from './PopoverStateless'

export default class Popover extends Component {
  static propTypes = {
    /**
     * The position the Popover is on.
     */
    position: PropTypes.oneOf(Object.keys(Position)),

    /**
     * Function called when the Popover opens.
     */
    onOpen: PropTypes.func.isRequired,

    /**
     * When true, the Popover is manually shown.
     */
    isShown: PropTypes.bool,

    /**
     * Function fired when Popover closes.
     */
    onClose: PropTypes.func.isRequired,

    /**
     * The content of the Popover.
     */
    content: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,

    /**
     * The target button of the Popover.
     * When a function the following arguments are passed:
     * ({ toggle: Function -> Void, getRef: Function -> Ref, isShown: Bool })
     */
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
      .isRequired,

    /**
     * The display property passed to the Popover card.
     */
    display: PropTypes.string,

    /**
     * The min width of the Popover card.
     */
    minWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * The min height of the Popover card.
     */
    minHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * Properties passed through to the Popover card.
     */
    statelessProps: PropTypes.objectOf(PopoverStateless.propTypes),

    /**
     * Duration of the animation.
     */
    animationDuration: PropTypes.number,

    /**
     * When true, use smart positioning for the Popover.
     */
    useSmartPositioning: PropTypes.bool,

    /**
     * The z-index of the Popover card.
     */
    zIndex: PropTypes.number
  }

  static defaultProps = {
    position: 'bottom',
    onOpen: () => {},
    onClose: () => {},
    minWidth: 200,
    minHeight: 40,
    animationDuration: 300,
    useSmartPositioning: true,
    zIndex: 40
  }

  constructor(props) {
    super(props)
    this.state = {
      isShown: props.isShown
    }
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.onBodyClick, false)
    document.body.removeEventListener('keydown', this.onEsc, false)
  }

  onBodyClick = e => {
    // Ignore clicks on the popover or button
    if (this.targetRef === e.target) {
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
    // Esc key
    if (e.keyCode === 27) {
      this.close()
    }
  }

  toggle = () => {
    const isShown = !this.state.isShown

    if (isShown) {
      this.open()
    } else {
      this.close()
    }

    this.setState({ isShown })
  }

  open = () => {
    if (this.state.isShown) {
      return
    }

    this.setState({ isShown: true })
    document.body.addEventListener('click', this.onBodyClick, false)
    document.body.addEventListener('keydown', this.onEsc, false)

    this.props.onOpen()
  }

  close = () => {
    if (!this.state.isShown) {
      return
    }

    this.setState({ isShown: false })
    document.body.removeEventListener('click', this.onBodyClick, false)
    document.body.removeEventListener('keydown', this.onEsc, false)

    this.props.onClose()
  }

  renderTarget = ({ getRef, isShown }) => {
    const { children } = this.props

    if (typeof children === 'function') {
      return children({
        toggle: this.toggle,
        getRef,
        isShown
      })
    }

    return React.cloneElement(children, {
      onClick: () => this.toggle(),
      innerRef: ref => {
        getRef(ref)
      },
      role: 'button',
      'aria-expanded': isShown,
      'aria-haspopup': true
    })
  }

  render() {
    const {
      zIndex,
      isShown,
      content,
      display,
      minWidth,
      position,
      minHeight,
      statelessProps,
      useSmartPositioning,
      animationDuration
    } = this.props
    const { isShown: stateIsShown } = this.state

    const open = isShown || stateIsShown

    return (
      <Positioner2
        target={({ getRef, isShown }) => {
          return this.renderTarget({ getRef, isShown })
        }}
        zIndex={zIndex}
        isShown={open}
        position={position}
        useSmartPositioning={useSmartPositioning}
        animationDuration={animationDuration}
      >
        {({ css, style, state, getRef }) => (
          <PopoverStateless
            innerRef={ref => {
              this.popoverNode = ref
              getRef(ref)
            }}
            data-state={state}
            css={css}
            style={style}
            display={display}
            minWidth={minWidth}
            minHeight={minHeight}
            {...statelessProps}
          >
            {typeof content === 'function'
              ? content({ close: this.close })
              : content}
          </PopoverStateless>
        )}
      </Positioner2>
    )
  }
}
