import React, { memo, forwardRef, useRef, useState, useEffect, useImperativeHandle, useCallback, useMemo } from 'react'
import cx from 'classnames'
import { css as glamorCss } from 'glamor'
import { Position } from '../../constants'
import { useMergedRef } from '../../hooks'
import safeInvoke from '../../lib/safe-invoke'
import { Positioner } from '../../positioner'
import { Tooltip } from '../../tooltip'
import { PositionTypes } from '../../types'
import PopoverStateless, { PopoverStatelessProps } from './PopoverStateless'

export interface PopoverProps {
  position?: PositionTypes
  isShown?: boolean
  trigger?: 'click' | 'hover'
  content: React.ReactNode | ((object: { close: () => void }) => React.ReactNode)
  children:
    | ((props: {
        toggle: () => void
        getRef: (ref: React.RefObject<HTMLElement>) => void
        isShown: NonNullable<PopoverProps['isShown']>
      }) => React.ReactNode)
    | React.ReactNode
  display?: string
  minWidth?: number | string
  minHeight?: number | string
  animationDuration?: number
  onOpen?: () => void
  onClose?: () => void
  onOpenComplete?: () => void
  onCloseComplete?: () => void
  onBodyClick?: () => void
  bringFocusInside?: boolean
  shouldCloseOnExternalClick?: boolean
  statelessProps?: PopoverStatelessProps
}

const noop = () => {}
const emptyProps = {}

const Popover: React.FC<PopoverProps> = memo(
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
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'shouldCloseOnEscapePress' does not exist... Remove this comment to see the full error message
      shouldCloseOnEscapePress = true,
      statelessProps = emptyProps,
      trigger = 'click',
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
      (e) => {
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
        close,
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
      (event) => {
        return event.key === 'ArrowDown' ? bringFocusInside(event) : undefined
      },
      [bringFocusInside]
    )

    const onEsc = useCallback(
      (event) => {
        return event.key === 'Escape' && shouldCloseOnEscapePress ? close() : undefined
      },
      [shouldCloseOnEscapePress, close]
    )

    const handleBodyClick = useCallback(
      (event) => {
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
        // @ts-expect-error ts-migrate(2339) FIXME: Property 'type' does not exist on type 'string | n... Remove this comment to see the full error message
        const isTooltipInside = children && children.type === Tooltip

        const getTargetRef = (ref: any) => {
          safeInvoke(setTargetRef, ref)
          getRef(ref)
        }

        /**
         * When a function is passed, you can control the Popover manually.
         */
        if (typeof children === 'function') {
          return children({
            getRef: getTargetRef,
            isShown,
            toggle,
          })
        }

        const popoverTargetProps = {
          onClick: toggle,
          onMouseEnter: handleOpenHover,
          onKeyDown: handleKeyDown,
          role: 'button',
          'aria-expanded': isShown,
          'aria-haspopup': true,
        }

        /**
         * Tooltips can be used within a Popover (not the other way around)
         * In this case the children is the Tooltip instead of a button.
         * Pass the properties to the Tooltip and let the Tooltip
         * add the properties to the target.
         */
        if (isTooltipInside) {
          // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
          return React.cloneElement(children, {
            popoverProps: {
              getTargetRef,
              isShown,

              // These propeties will be spread as `popoverTargetProps`
              // in the Tooltip component.
              ...popoverTargetProps,
            },
          })
        }

        /**
         * With normal usage only popover props end up on the target.
         */
        // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
        return React.cloneElement(children, {
          ref: getTargetRef,
          ...popoverTargetProps,
        })
      },
      [children, setTargetRef, toggle, handleOpenHover, handleKeyDown]
    )

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
        {({ css, getRef, state, style }: any) => (
          <PopoverStateless
            ref={(ref) => {
              safeInvoke(setPopoverNode, ref)
              getRef(ref)
            }}
            data-state={state}
            display={display}
            minWidth={minWidth}
            minHeight={minHeight}
            {...statelessProps}
            // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
            className={cx(statelessProps.className, glamorCss(css, style, statelessProps.style).toString())}
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

export default Popover
