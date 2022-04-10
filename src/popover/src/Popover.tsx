import React, { memo, forwardRef, useRef, useState, useEffect, useImperativeHandle, useCallback, useMemo } from 'react'
import cx from 'classnames'
import { css as glamorCss } from 'glamor'
import PropTypes from 'prop-types'
import { Position } from '../../constants'
import { useMergedRef } from '../../hooks'
import { Positioner } from '../../positioner'
import { Tooltip } from '../../tooltip'
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
      shouldCloseOnEscapePress = true,
      statelessProps = emptyProps,
      trigger = 'click',
      // @ts-expect-error ts-migrate(2700) FIXME: Rest types may only be created from object types.
      ...props
    },
    forwardedRef
  ) {
    const [isShown, setIsShown] = useState(props.isShown)
    const popoverNode = useRef()
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    const setPopoverNode = useMergedRef(popoverNode)
    const targetRef = useRef()
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    const setTargetRef = useMergedRef(targetRef)

    /**
     * Methods borrowed from BlueprintJS
     * https://github.com/palantir/blueprint/blob/release/2.0.0/packages/core/src/components/overlay/overlay.tsx
     */
    const bringFocusInside = useCallback(
      e => {
        if (isShown && e) {
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

          // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
          const isFocusOutsideModal = !popoverNode.current.contains(document.activeElement)
          if (isFocusOutsideModal) {
            // Element marked autofocus has higher priority than the other elements
            // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
            const autofocusElement = popoverNode.current.querySelector('[autofocus]:not([disabled])')
            if (autofocusElement) {
              // Return early to avoid unnecessary dom queries
              return autofocusElement.focus()
            }

            // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
            const wrapperElement = popoverNode.current.querySelector('[tabindex]:not([disabled])')
            if (wrapperElement) {
              return wrapperElement.focus()
            }

            // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
            const buttonElements = popoverNode.current.querySelectorAll(
              'button:not([disabled]), a:not([disabled]), [role="menuitem"]:not([disabled]), [role="menuitemradio"]:not([disabled])'
            )
            if (buttonElements.length > 0) {
              return buttonElements[0].focus()
            }
          }
        })
      },
      [isShown, popoverNode.current]
    )

    const bringFocusBackToTarget = useCallback(() => {
      return requestAnimationFrame(() => {
        if (
          targetRef.current == null || // eslint-disable-line eqeqeq, no-eq-null
          popoverNode.current == null || // eslint-disable-line eqeqeq, no-eq-null
          document.activeElement == null // eslint-disable-line eqeqeq, no-eq-null
        ) {
          return
        }

        // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
        const isFocusInsideModal = popoverNode.current.contains(document.activeElement)

        // Bring back focus on the target.
        if (document.activeElement === document.body || isFocusInsideModal) {
          // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
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

    useImperativeHandle(
      forwardedRef,
      () => ({
        open,
        close
      }),
      [open, close]
    )

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

    const handleKeyDown = useCallback(
      event => {
        return event.key === 'ArrowDown' ? bringFocusInside(event) : undefined
      },
      [bringFocusInside]
    )

    const onEsc = useCallback(
      event => {
        return event.key === 'Escape' && shouldCloseOnEscapePress ? close() : undefined
      },
      [shouldCloseOnEscapePress, close]
    )

    const handleBodyClick = useCallback(
      event => {
        // Ignore clicks on the popover or button
        // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
        if (targetRef.current && targetRef.current.contains(event.target)) {
          return
        }

        // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
        if (popoverNode.current && popoverNode.current.contains(event.target)) {
          return
        }

        // Notify body click
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 0 arguments, but got 1.
        onBodyClick(event)

        if (shouldCloseOnExternalClick !== false) {
          close()
        }
      },
      [onBodyClick, shouldCloseOnExternalClick, close, targetRef.current, popoverNode.current]
    )

    const handleOpenComplete = useCallback(() => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 1 arguments, but got 0.
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

    const renderTarget = useCallback(
      ({ getRef, isShown }) => {
        // @ts-expect-error ts-migrate(2339) FIXME: Property 'type' does not exist on type 'never'.
        const isTooltipInside = children && children.type === Tooltip

        const getTargetRef = (ref: any) => {
          // @ts-expect-error ts-migrate(2721) FIXME: Cannot invoke an object which is possibly 'null'.
          setTargetRef(ref)
          getRef(ref)
        }

        /**
         * When a function is passed, you can control the Popover manually.
         */
        if (typeof children === 'function') {
          // @ts-expect-error ts-migrate(2349) FIXME: This expression is not callable.
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
      },
      [children, setTargetRef, toggle, handleOpenHover, handleKeyDown]
    )

    // If `props.isShown` is a boolean, popover is controlled manually, not via mouse events
    const shown = typeof props.isShown === 'boolean' ? props.isShown : isShown

    const contentToRender = useMemo(() => {
      // @ts-expect-error ts-migrate(2349) FIXME: This expression is not callable.
      return typeof content === 'function' ? content({ close }) : content
    }, [content, close])

    return (
      // @ts-expect-error ts-migrate(2322) FIXME: Type '{ children: ({ css, getRef, state, style }: ... Remove this comment to see the full error message
      <Positioner
        target={renderTarget}
        isShown={shown}
        position={position}
        animationDuration={animationDuration}
        onOpenComplete={handleOpenComplete}
        onCloseComplete={onCloseComplete}
      >
        {({
          css,
          getRef,
          state,
          style
        }: any) => (
          // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
          <PopoverStateless
            ref={ref => {
              // @ts-expect-error ts-migrate(2721) FIXME: Cannot invoke an object which is possibly 'null'.
              setPopoverNode(ref)
              getRef(ref)
            }}
            // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
            data-state={state}
            display={display}
            // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
            minWidth={minWidth}
            // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
            minHeight={minHeight}
            {...statelessProps}
            // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
            className={cx(statelessProps.className, glamorCss(css, style, statelessProps.style).toString())}
            // Overwrite `statelessProps.style` since we are including it via className
            // @ts-expect-error ts-migrate(2322) FIXME: Type 'undefined' is not assignable to type 'never'... Remove this comment to see the full error message
            style={undefined}
            // @ts-expect-error ts-migrate(2322) FIXME: Type '(() => void) | undefined' is not assignable ... Remove this comment to see the full error message
            onMouseLeave={handleCloseHover}
          >
            {contentToRender}
          </PopoverStateless>
        )}
      </Positioner>
    );
  })
)

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
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
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
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
  shouldCloseOnExternalClick: PropTypes.bool,

  /**
   * Boolean indicating if pressing the esc key should close the dialog.
   */
  shouldCloseOnEscapePress: PropTypes.bool
}

export default Popover
