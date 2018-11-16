import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Positioner } from '../../positioner'
import { Tooltip } from '../../tooltip'
import { Position } from '../../constants'
import PopoverStateless from './PopoverStateless'

export default class Popover extends Component {
  static propTypes = {
    /**
     * The position the Popover is on. Smart positioning might override this.
     */
    position: PropTypes.oneOf([
      Position.TOP,
      Position.TOP_LEFT,
      Position.TOP_RIGHT,
      Position.BOTTOM,
      Position.BOTTOM_LEFT,
      Position.BOTTOM_RIGHT,
      Position.LEFT,
      Position.RIGHT
    ]),

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
    minWidth: 200,
    minHeight: 40,
    animationDuration: 300,
    onOpen: () => {},
    onClose: () => {},
    onOpenComplete: () => {},
    onCloseComplete: () => {},
    bringFocusInside: false
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
    // Always delay focus manipulation to just before repaint to prevent scroll jumping
    return requestAnimationFrame(() => {
      // Container ref may be undefined between component mounting and Portal rendering
      // activeElement may be undefined in some rare cases in IE
      if (
        this.popoverNode == null || // eslint-disable-line eqeqeq, no-eq-null
        document.activeElement == null || // eslint-disable-line eqeqeq, no-eq-null
        !this.state.isShown
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
        const buttonElements = this.popoverNode.querySelectorAll(
          'button, a, [role="menuitem"], [role="menuitemradio"]'
        )

        if (autofocusElement) {
          autofocusElement.focus()
        } else if (wrapperElement) {
          wrapperElement.focus()
        } else if (buttonElements.length > 0) {
          buttonElements[0].focus()
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
    if (this.targetRef && this.targetRef.contains(e.target)) {
      return
    }

    if (this.popoverNode && this.popoverNode.contains(e.target)) {
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
    if (this.props.bringFocusInside) this.bringFocusInside()
    this.props.onOpenComplete()
  }

  handleCloseComplete = () => {
    this.props.onCloseComplete()
  }

  handleKeyDown = e => {
    if (e.key === 'ArrowDown') {
      this.bringFocusInside()
    }
  }

  renderTarget = ({ getRef, isShown }) => {
    const { children } = this.props
    const isTooltipInside = children && children.type === Tooltip

    const getTargetRef = ref => {
      this.targetRef = ref
      getRef(ref)
    }

    /**
     * When a function is passed, you can control the Popover manually.
     */
    if (typeof children === 'function') {
      return children({
        toggle: this.toggle,
        getRef: getTargetRef,
        isShown
      })
    }

    const popoverTargetProps = {
      onClick: this.toggle,
      onKeyDown: this.handleKeyDown,
      role: 'button',
      'aria-expanded': isShown,
      'aria-haspopup': true
    }

    /**
     * Tooltips can be used within a Popover (not the other way around)
     * In this case the children is the Tooltip instead of a button.
     * Pass the properties to the Tooltip and let the Tooltip
     * add the properties to the target.
     */
    if (isTooltipInside) {
      return React.cloneElement(children, {
        popoverProps: {
          getTargetRef,
          isShown,

          // These propeties will be spread as `popoverTargetProps`
          // in the Tooltip component.
          ...popoverTargetProps
        }
      })
    }

    /**
     * With normal usage only popover props end up on the target.
     */
    return React.cloneElement(children, {
      innerRef: getTargetRef,
      ...popoverTargetProps
    })
  }

  render() {
    const {
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

    // If `isShown` is a boolean, popover is controlled manually, not via mouse events
    const shown = typeof isShown === 'boolean' ? isShown : stateIsShown

    return (
      <Positioner
        target={({ getRef, isShown, targetWidth }) => {
          return this.renderTarget({ getRef, isShown, targetWidth })
        }}
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
