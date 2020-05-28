import React, { memo, useState, useEffect } from 'react'
import cx from 'classnames'
import { css as glamorCss } from 'glamor'
import PropTypes from 'prop-types'
import { Positioner } from '../../positioner'
import { Tooltip } from '../../tooltip'
import { Position } from '../../constants'
import PopoverStateless from './PopoverStateless'

const Popover = memo(props => {
  const [isShown, setIsShown] = useState(props.isShown)
  const [popoverNode, setPopoverNode] = useState(null)
  const [targetRef, setTargetRef] = useState(null)

  /**
   * Methods borrowed from BlueprintJS
   * https://github.com/palantir/blueprint/blob/release/2.0.0/packages/core/src/components/overlay/overlay.tsx
   */
  const bringFocusInside = () => {
    // Always delay focus manipulation to just before repaint to prevent scroll jumping
    return requestAnimationFrame(() => {
      // Container ref may be undefined between component mounting and Portal rendering
      // activeElement may be undefined in some rare cases in IE
      if (
        popoverNode == null || // eslint-disable-line eqeqeq, no-eq-null
        document.activeElement == null || // eslint-disable-line eqeqeq, no-eq-null
        !isShown
      ) {
        return
      }

      const isFocusOutsideModal = !popoverNode.contains(document.activeElement)
      if (isFocusOutsideModal) {
        // Element marked autofocus has higher priority than the other clowns
        const autofocusElement = popoverNode.querySelector('[autofocus]')
        const wrapperElement = popoverNode.querySelector('[tabindex]')
        const buttonElements = popoverNode.querySelectorAll(
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

  const bringFocusBackToTarget = () => {
    return requestAnimationFrame(() => {
      if (
        targetRef == null || // eslint-disable-line eqeqeq, no-eq-null
        popoverNode == null || // eslint-disable-line eqeqeq, no-eq-null
        document.activeElement == null // eslint-disable-line eqeqeq, no-eq-null
      ) {
        return
      }

      const isFocusInsideModal = popoverNode.contains(document.activeElement)

      // Bring back focus on the target.
      if (document.activeElement === document.body || isFocusInsideModal) {
        targetRef.focus()
      }
    })
  }

  const open = () => {
    if (isShown) {
      return
    }

    setIsShown(true)
    props.onOpen()
  }

  const close = () => {
    if (!isShown) {
      return
    }

    setIsShown(false)
    bringFocusBackToTarget()
    props.onClose()
  }

  const toggle = () => (isShown ? close() : open())
  const handleOpenHover = props.trigger === 'hover' ? open : undefined
  const handleCloseHover = props.trigger === 'hover' ? close : undefined
  const handleKeyDown = event =>
    event.key === 'ArrowDown' ? bringFocusInside() : undefined
  const onEsc = event => (event.key === 'Escape' ? close() : undefined)

  const onBodyClick = event => {
    // Ignore clicks on the popover or button
    if (targetRef && targetRef.contains(event.target)) {
      return
    }

    if (popoverNode && popoverNode.contains(event.target)) {
      return
    }

    // Notify body click
    props.onBodyClick(event)

    if (props.shouldCloseOnExternalClick !== false) {
      close()
    }
  }

  const handleOpenComplete = () => {
    if (props.bringFocusInside) bringFocusInside()
    props.onOpenComplete()
  }

  useEffect(() => {
    if (isShown) {
      document.body.addEventListener('click', onBodyClick, false)
      document.body.addEventListener('keydown', onEsc, false)
    } else {
      document.body.removeEventListener('click', onBodyClick, false)
      document.body.removeEventListener('keydown', onEsc, false)
    }

    return () => {
      document.body.removeEventListener('click', onBodyClick, false)
      document.body.removeEventListener('keydown', onEsc, false)
    }
  }, [isShown])

  const renderTarget = ({ getRef, isShown }) => {
    const { children } = props
    const isTooltipInside = children && children.type === Tooltip

    const getTargetRef = ref => {
      setTargetRef(ref)
      getRef(ref)
    }

    /**
     * When a function is passed, you can control the Popover manually.
     */
    if (typeof children === 'function') {
      return children({
        getRef: getTargetRef,
        isShown,
        toggle
      })
    }

    const popoverTargetProps = {
      onClick: toggle,
      onMouseEnter: handleOpenHover,
      onKeyDown: handleKeyDown,
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

  const {
    content,
    display,
    minWidth,
    position,
    minHeight,
    statelessProps = {},
    animationDuration,
    onCloseComplete
  } = props

  // If `props.isShown` is a boolean, popover is controlled manually, not via mouse events
  const shown = typeof props.isShown === 'boolean' ? props.isShown : isShown

  return (
    <Positioner
      target={renderTarget}
      isShown={shown}
      position={position}
      animationDuration={animationDuration}
      onOpenComplete={handleOpenComplete}
      onCloseComplete={onCloseComplete}
    >
      {({ css, style, state, getRef }) => (
        <PopoverStateless
          ref={ref => {
            setPopoverNode(ref)
            getRef(ref)
          }}
          data-state={state}
          display={display}
          minWidth={minWidth}
          minHeight={minHeight}
          {...statelessProps}
          className={cx(
            statelessProps.className,
            glamorCss(css, style, statelessProps.style).toString()
          )}
          // Overwrite `statelessProps.style` since we are including it via className
          style={undefined}
          onMouseLeave={handleCloseHover}
        >
          {typeof content === 'function' ? content({ close }) : content}
        </PopoverStateless>
      )}
    </Positioner>
  )
})

Popover.propTypes = {
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
   * Open the Popover based on click or hover. Default is click.
   */
  trigger: PropTypes.oneOf(['click', 'hover']),

  /**
   * The content of the Popover.
   */
  content: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,

  /**
   * The target button of the Popover.
   * When a function the following arguments are passed:
   * ({ toggle: Function -> Void, getRef: Function -> Ref, isShown: Bool })
   */
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,

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
  statelessProps: PropTypes.shape(PopoverStateless.propTypes),

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
   * Function that will be called when the body is clicked.
   */
  onBodyClick: PropTypes.func.isRequired,

  /**
   * When true, bring focus inside of the Popover on open.
   */
  bringFocusInside: PropTypes.bool,

  /**
   * Boolean indicating if clicking outside the dialog should close the dialog.
   */
  shouldCloseOnExternalClick: PropTypes.bool
}

Popover.defaultProps = {
  position: Position.BOTTOM,
  minWidth: 200,
  minHeight: 40,
  animationDuration: 300,
  onOpen: () => {},
  onClose: () => {},
  onOpenComplete: () => {},
  onCloseComplete: () => {},
  onBodyClick: () => {},
  bringFocusInside: false,
  shouldCloseOnExternalClick: true,
  trigger: 'click'
}

export default Popover
