import React, {
  memo,
  forwardRef,
  useRef,
  useState,
  useEffect,
  useImperativeHandle,
  useCallback,
  useMemo
} from 'react'
import cx from 'classnames'
import { css as glamorCss } from 'glamor'
import PropTypes from 'prop-types'
import { Positioner } from '../../positioner'
import { Tooltip } from '../../tooltip'
import { Position } from '../../constants'
import { useMergedRef } from '../../hooks'
import PopoverStateless from './PopoverStateless'

const noop = () => {}
const emptyProps = {}

const Popover = memo(
  forwardRef(function Popover(
    {
      animationDuration = 300,
      bringFocusInside: shouldBringFocusInside = false,
      children,
      content,
      display,
      minHeight = 40,
      minWidth = 200,
      onBodyClick = noop,
      onClose = noop,
      onCloseComplete = noop,
      onOpen = noop,
      onOpenComplete = noop,
      position = Position.BOTTOM,
      shouldCloseOnExternalClick = true,
      statelessProps = emptyProps,
      trigger = 'click',
      ...props
    },
    forwardedRef
  ) {
    const [isShown, setIsShown] = useState(props.isShown)
    const popoverNode = useRef()
    const setPopoverNode = useMergedRef(popoverNode)
    const targetRef = useRef()
    const setTargetRef = useMergedRef(targetRef)

    useImperativeHandle(
      forwardedRef,
      () => ({
        open,
        close
      }),
      [popoverNode.current]
    )

    /**
     * Methods borrowed from BlueprintJS
     * https://github.com/palantir/blueprint/blob/release/2.0.0/packages/core/src/components/overlay/overlay.tsx
     */
    const bringFocusInside = useCallback((e) => {
      if(isShown && e) {
        e.preventDefault()
      }
      // Always delay focus manipulation to just before repaint to prevent scroll jumping

      return requestAnimationFrame(() => {
        // Container ref may be undefined between component mounting and Portal rendering

        // ActiveElement may be undefined in some rare cases in IE

        if (
          popoverNode.current == null || // eslint-disable-line eqeqeq, no-eq-null
          document.activeElement == null || // eslint-disable-line eqeqeq, no-eq-null
          !isShown
        ) {
          return
        }

        const isFocusOutsideModal = !popoverNode.current.contains(
          document.activeElement
        )
        if (isFocusOutsideModal) {
          // Element marked autofocus has higher priority than the other elements
          const autofocusElement = popoverNode.current.querySelector(
            '[autofocus]:not([disabled])'
          )
          if (autofocusElement) {
            // Return early to avoid unnecessary dom queries
            return autofocusElement.focus()
          }

          const wrapperElement = popoverNode.current.querySelector('[tabindex]:not([disabled])')
          if (wrapperElement) {
            return wrapperElement.focus()
          }

          const buttonElements = popoverNode.current.querySelectorAll(
            'button:not([disabled]), a:not([disabled]), [role="menuitem"]:not([disabled]), [role="menuitemradio"]:not([disabled])'
          )
          if (buttonElements.length > 0) {
            return buttonElements[0].focus()
          }

        }
      })
    }, [isShown, popoverNode.current])

    const bringFocusBackToTarget = useCallback(() => {
      return requestAnimationFrame(() => {
        if (
          targetRef.current == null || // eslint-disable-line eqeqeq, no-eq-null
          popoverNode.current == null || // eslint-disable-line eqeqeq, no-eq-null
          document.activeElement == null // eslint-disable-line eqeqeq, no-eq-null
        ) {
          return
        }

        const isFocusInsideModal = popoverNode.current.contains(
          document.activeElement
        )

        // Bring back focus on the target.
        if (document.activeElement === document.body || isFocusInsideModal) {
          targetRef.current.focus()
        }
      })
    }, [popoverNode.current, targetRef.current])

    const open = useCallback(() => {
      if (isShown) {
        return
      }

      setIsShown(true)
      onOpen()
    }, [setIsShown, onOpen, isShown])

    const close = useCallback(() => {
      if (!isShown) {
        return
      }

      setIsShown(false)
      bringFocusBackToTarget()
      onClose()
    }, [setIsShown, bringFocusBackToTarget, onClose, isShown])

    // If `props.isShown` is a boolean, treat as a controlled component
    // `open` and `close` should be applied when it changes
    useEffect(() => {
      if (typeof props.isShown !== 'boolean' || props.isShown === isShown) {
        return
      }

      if (props.isShown) {
        open()
      } else {
        close()
      }
    }, [props.isShown, isShown])

    const toggle = useCallback(() => {
      return isShown ? close() : open()
    }, [isShown, close, open])

    const handleOpenHover = useMemo(() => {
      return trigger === 'hover' ? open : undefined
    }, [trigger, open])

    const handleCloseHover = useMemo(() => {
      return trigger === 'hover' ? close : undefined
    }, [trigger, close])

    const handleKeyDown = useCallback((event) => {
      return event.key === 'ArrowDown' ? bringFocusInside(event) : undefined
    }, [bringFocusInside])

    const onEsc = useCallback((event) => {
      return event.key === 'Escape' ? close() : undefined
    }, [close])

    const handleBodyClick = useCallback((event) => {
      // Ignore clicks on the popover or button
      if (targetRef.current && targetRef.current.contains(event.target)) {
        return
      }

      if (popoverNode.current && popoverNode.current.contains(event.target)) {
        return
      }

      // Notify body click
      onBodyClick(event)

      if (shouldCloseOnExternalClick !== false) {
        close()
      }
    }, [onBodyClick, shouldCloseOnExternalClick, close, targetRef.current, popoverNode.current])

    const handleOpenComplete = useCallback(() => {
      if (shouldBringFocusInside) bringFocusInside()
      onOpenComplete()
    }, [shouldBringFocusInside, bringFocusInside, onOpenComplete])

    useEffect(() => {
      if (isShown) {
        document.body.addEventListener('click', handleBodyClick, false)
        document.body.addEventListener('keydown', onEsc, false)
      } else {
        document.body.removeEventListener('click', handleBodyClick, false)
        document.body.removeEventListener('keydown', onEsc, false)
      }

      return () => {
        document.body.removeEventListener('click', handleBodyClick, false)
        document.body.removeEventListener('keydown', onEsc, false)
      }
    }, [isShown, handleBodyClick, onEsc])

    const renderTarget = useCallback(({ getRef, isShown }) => {
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
        ref: getTargetRef,
        ...popoverTargetProps
      })
    }, [children, setTargetRef, toggle, handleOpenHover, handleKeyDown])

    // If `props.isShown` is a boolean, popover is controlled manually, not via mouse events
    const shown = typeof props.isShown === 'boolean' ? props.isShown : isShown

    const contentToRender = useMemo(() => {
      return typeof content === 'function' ? content({ close }) : content
    }, [content, close])

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
            {contentToRender}
          </PopoverStateless>
        )}
      </Positioner>
    )
  })
)

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
  onOpen: PropTypes.func,

  /**
   * Function fired when Popover closes.
   */
  onClose: PropTypes.func,

  /**
   * Function that will be called when the enter transition is complete.
   */
  onOpenComplete: PropTypes.func,

  /**
   * Function that will be called when the exit transition is complete.
   */
  onCloseComplete: PropTypes.func,

  /**
   * Function that will be called when the body is clicked.
   */
  onBodyClick: PropTypes.func,

  /**
   * When true, bring focus inside of the Popover on open.
   */
  bringFocusInside: PropTypes.bool,

  /**
   * Boolean indicating if clicking outside the dialog should close the dialog.
   */
  shouldCloseOnExternalClick: PropTypes.bool
}

export default Popover
