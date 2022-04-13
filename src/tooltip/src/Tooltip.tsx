import React, { memo, useState, useEffect, useRef } from 'react'
import cx from 'classnames'
import { css as glamorCss } from 'glamor'
import debounce from 'lodash.debounce'
import { PolymorphicBoxProps } from 'ui-box'
import { Position } from '../../constants'
import { useId } from '../../hooks'
import { Positioner } from '../../positioner'
import { DefaultAppearance, PositionTypes } from '../../types'
import TooltipStateless, { TooltipStatelessProps } from './TooltipStateless'

export interface TooltipProps {
  /**
   * The appearance of the Tooltip.
   */
  appearance?: DefaultAppearance | 'card'
  /**
   * The position the Tooltip is on.
   */
  position?: PositionTypes
  /**
   * The content of the Tooltip.
   */
  content: React.ReactNode
  /**
   * Time in ms before hiding the Tooltip.
   */
  hideDelay?: number
  /**
   * Time in ms before showing the Tooltip.
   */
  showDelay?: number
  /**
   * When true, manually show the Tooltip.
   */
  isShown?: boolean
  /**
   * Properties passed through to the Tooltip.
   */
  statelessProps?: PolymorphicBoxProps<'div', TooltipStatelessProps>
}

const emptyProps: PolymorphicBoxProps<'div', TooltipStatelessProps> = {}

const maybeClearTimeout = (timeout: NodeJS.Timeout | undefined) => {
  if (timeout == null) {
    return
  }

  clearTimeout(timeout)
}

const Tooltip: React.FC<TooltipProps> = memo(function Tooltip(props) {
  const {
    appearance = 'default',
    position = Position.BOTTOM,
    content,
    hideDelay = 120,
    showDelay = 0,
    isShown: propIsShown,
    children,
    statelessProps = emptyProps
  } = props

  // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
  const id = useId('evergreen-tooltip')
  const [isShown, setIsShown] = useState(propIsShown || false)
  const [isShownByTarget, setIsShownByTarget] = useState(false)
  const closeTimer = useRef<NodeJS.Timeout | undefined>(undefined)

  const mouseLeftTarget = () => {
    setIsShownByTarget(false)
  }

  const handleMouseLeaveTarget = debounce(mouseLeftTarget, hideDelay)

  const hide = () => {
    setIsShown(false)
    // Clean up any timeouts that may have been triggered from `showDelay`
    maybeClearTimeout(closeTimer.current)
  }

  const handleHide = debounce(hide, hideDelay)

  // Component will unmount
  useEffect(
    () => () => {
      maybeClearTimeout(closeTimer.current)
    },
    []
  )

  const show = () => {
    if (isShown) return

    if (!showDelay) {
      setIsShown(true)
      return
    }

    maybeClearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => {
      setIsShown(true)
    }, showDelay)
  }

  const renderTarget = ({ getRef }: any) => {
    const tooltipTargetProps = {
      onMouseEnter: show,
      onMouseLeave: handleHide,
      'aria-describedby': id
    }

    /**
     * Tooltips can be used within a Popover (not the other way around)
     * When a Tooltip is used within a Popover, the Popover passes
     * its props to the Tooltip in a `popoverProps` object.
     */
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'popoverProps' does not exist on type 'Pr... Remove this comment to see the full error message
    // eslint-disable-next-line react/prop-types
    if (props.popoverProps) {
      const {
        // eslint-disable-next-line react/prop-types
        getTargetRef,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        isShown,
        ...popoverTargetProps
        // @ts-expect-error ts-migrate(2339) FIXME: Property 'popoverProps' does not exist on type 'Pr... Remove this comment to see the full error message
        // eslint-disable-next-line react/prop-types
      } = props.popoverProps

      // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
      return React.cloneElement(children, {
        // Add the Popover props to the target.
        ...popoverTargetProps,
        // Add the Tooltip props to the target.
        ...tooltipTargetProps,

        ref: (ref: any) => {
          // Get the ref for the Tooltip.
          getRef(ref)
          // Pass the ref to the Popover.
          getTargetRef(ref)
        }
      })
    }

    /**
     * With normal usage only the props for a Tooltip are passed to the target.
     */
    // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
    return React.cloneElement(children, {
      ...tooltipTargetProps,
      ref: (ref: any) => {
        getRef(ref)
      }
    })
  }

  // @ts-expect-error ts-migrate(2339) FIXME: Property 'popoverProps' does not exist on type 'Pr... Remove this comment to see the full error message
  // eslint-disable-next-line react/prop-types
  const isPopoverShown = () => props.popoverProps && props.popoverProps.isShown

  const handleMouseEnterTarget = () => {
    setIsShownByTarget(true)
  }

  let shown = (propIsShown || isShown || isShownByTarget) && !isPopoverShown()

  // Tooltip was explicitly set to not be shown
  if (propIsShown === false) {
    shown = false
  }

  return (
    <Positioner target={renderTarget} isShown={shown} position={position} animationDuration={160}>
      {({ css, getRef, state, style }: any) => (
        <TooltipStateless
          id={id}
          appearance={appearance}
          ref={getRef}
          data-state={state}
          style={style}
          onMouseEnter={handleMouseEnterTarget}
          onMouseLeave={handleMouseLeaveTarget}
          {...statelessProps}
          className={cx(statelessProps.className, css ? glamorCss(css).toString() : undefined)}
        >
          {content}
        </TooltipStateless>
      )}
    </Positioner>
  )
})

export default Tooltip
