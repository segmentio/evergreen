import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Position, Positioner } from '../../positioner'
import PopoverStateless from './PopoverStateless'

export default class Popover extends Component {
  static propTypes = {
    /**
     * The position the Popover is on. Smart positioning might override this.
     */
    position: PropTypes.oneOf(Object.keys(Position)),

    /**
     * When true, the Popover is manually shown.
     */
    isShown: PropTypes.bool,

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
     * The z-index of the Popover card.
     */
    zIndex: PropTypes.number,

    /**
     * Function called when the Popover opens.
     */
    onOpen: PropTypes.func.isRequired,

    /**
     * Function fired when Popover closes.
     */
    onClose: PropTypes.func.isRequired,

    /**
     * Function that will be called when the enter transition is complete.
     */
    onOpenComplete: PropTypes.func.isRequired,

    /**
     * Function that will be called when the exit transition is complete.
     */
    onCloseComplete: PropTypes.func.isRequired,

    /**
     * When true, bring focus inside of the Popover on open.
     */
    bringFocusInside: PropTypes.bool
  }

  static defaultProps = {
    position: Position.BOTTOM,
    isShown: false,
    minWidth: 200,
    minHeight: 40,
    animationDuration: 300,
    zIndex: 40,
    onOpen: () => {},
    onClose: () => {},
    onOpenComplete: () => {},
    onCloseComplete: () => {},
    bringFocusInside: true
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

  /**
   * Methods borrowed from BlueprintJS
   * https://github.com/palantir/blueprint/blob/release/2.0.0/packages/core/src/components/overlay/overlay.tsx
   */
  bringFocusInside = () => {
    if (!this.props.bringFocusInside) return

    // Always delay focus manipulation to just before repaint to prevent scroll jumping
    return requestAnimationFrame(() => {
      // Container ref may be undefined between component mounting and Portal rendering
      // activeElement may be undefined in some rare cases in IE

      if (
        this.popoverNode == null || // eslint-disable-line eqeqeq, no-eq-null
        document.activeElement == null || // eslint-disable-line eqeqeq, no-eq-null
        !this.props.isShown
      ) {
        return
      }

      const isFocusOutsideModal = !this.popoverNode.contains(
        document.activeElement
      )
      if (isFocusOutsideModal) {
        // Element marked autofocus has higher priority than the other clowns
        const autofocusElement = this.popoverNode.querySelector('[autofocus]')
        const wrapperElement = this.popoverNode.querySelector('[tabindex]')
        const buttonElement = this.popoverNode.querySelector('button')

        if (autofocusElement) {
          autofocusElement.focus()
        } else if (wrapperElement) {
          wrapperElement.focus()
        } else if (buttonElement) {
          buttonElement.focus()
        }
      }
    })
  }

  bringFocusBackToTarget = () => {
    return requestAnimationFrame(() => {
      if (
        this.popoverNode == null || // eslint-disable-line eqeqeq, no-eq-null
        document.activeElement == null // eslint-disable-line eqeqeq, no-eq-null
      ) {
        return
      }

      const isFocusInsideModal = this.popoverNode.contains(
        document.activeElement
      )

      // Bring back focus on the target.
      if (
        this.targetRef &&
        (document.activeElement === document.body || isFocusInsideModal)
      ) {
        this.targetRef.focus()
      }
    })
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

  onEsc = e => {
    // Esc key
    if (e.keyCode === 27) {
      this.close()
    }
  }

  toggle = () => {
    if (this.state.isShown) {
      this.close()
    } else {
      this.open()
    }
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

    this.bringFocusBackToTarget()

    this.props.onClose()
  }

  handleOpenComplete = () => {
    this.bringFocusInside()
    this.props.onOpenComplete()
  }

  handleCloseComplete = () => {
    this.props.onCloseComplete()
  }

  renderTarget = ({ getRef, isShown }) => {
    const { children } = this.props

    const getTargetRef = ref => {
      this.targetRef = ref
      getRef(ref)
    }

    if (typeof children === 'function') {
      return children({
        toggle: this.toggle,
        getRef: getTargetRef,
        isShown
      })
    }

    return React.cloneElement(children, {
      onClick: this.toggle,
      innerRef: getTargetRef,
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
      animationDuration,
      onCloseComplete
    } = this.props
    const { isShown: stateIsShown } = this.state

    const shown = isShown || stateIsShown

    return (
      <Positioner
        target={({ getRef, isShown, targetWidth }) => {
          return this.renderTarget({ getRef, isShown, targetWidth })
        }}
        zIndex={zIndex}
        isShown={shown}
        position={position}
        animationDuration={animationDuration}
        onOpenComplete={this.handleOpenComplete}
        onCloseComplete={onCloseComplete}
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
      </Positioner>
    )
  }
}
