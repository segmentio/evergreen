import React, { memo, useState, useEffect, useRef } from 'react'
import cx from 'classnames'
import { css as glamorCss } from 'glamor'
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'loda... Remove this comment to see the full error message
import debounce from 'lodash.debounce'
import PropTypes from 'prop-types'
import { Position } from '../../constants'
import { useId } from '../../hooks'
import { Positioner } from '../../positioner'
import TooltipStateless from './TooltipStateless'

const emptyProps = {}

const Tooltip = memo(function Tooltip(props) {
  const {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'appearance' does not exist on type '{ ch... Remove this comment to see the full error message
    appearance = 'default',
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'position' does not exist on type '{ chil... Remove this comment to see the full error message
    position = Position.BOTTOM,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'content' does not exist on type '{ child... Remove this comment to see the full error message
    content,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'hideDelay' does not exist on type '{ chi... Remove this comment to see the full error message
    hideDelay = 120,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'showDelay' does not exist on type '{ chi... Remove this comment to see the full error message
    showDelay = 0,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'isShown' does not exist on type '{ child... Remove this comment to see the full error message
    isShown: propIsShown,
    children,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'statelessProps' does not exist on type '... Remove this comment to see the full error message
    statelessProps = emptyProps
  } = props

  // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
  const id = useId('evergreen-tooltip')
  const [isShown, setIsShown] = useState(propIsShown || false)
  const [isShownByTarget, setIsShownByTarget] = useState(false)
  const closeTimer = useRef(undefined)

  const mouseLeftTarget = () => {
    setIsShownByTarget(false)
  }

  const handleMouseLeaveTarget = debounce(mouseLeftTarget, hideDelay)

  const hide = () => {
    setIsShown(false)
    // Clean up any timeouts that may have been triggered from `showDelay`
    clearTimeout(closeTimer.current)
  }

  const handleHide = debounce(hide, hideDelay)

  // Component will unmount
  useEffect(
    () => () => {
      clearTimeout(closeTimer.current)
    },
    []
  )

  const show = () => {
    if (isShown) return

    if (!showDelay) {
      setIsShown(true)
      return
    }

    clearTimeout(closeTimer.current)
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'undefined... Remove this comment to see the full error message
    closeTimer.current = setTimeout(() => {
      setIsShown(true)
    }, showDelay)
  }

  const renderTarget = ({
    getRef
  }: any) => {
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
        // eslint-disable-next-line react/prop-types
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
      });
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
    });
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
    // @ts-expect-error ts-migrate(2322) FIXME: Type '{ children: ({ css, getRef, state, style }: ... Remove this comment to see the full error message
    <Positioner target={renderTarget} isShown={shown} position={position} animationDuration={160}>
      {({
        css,
        getRef,
        state,
        style
      }: any) => (
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
  );
})

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'Named... Remove this comment to see the full error message
Tooltip.propTypes = {
  /**
   * The appearance of the tooltip.
   */
  appearance: PropTypes.oneOf(['default', 'card']),

  /**
   * The position the Popover is on.
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
   * The content of the Popover.
   */
  content: PropTypes.node,

  /**
   * Time in ms before hiding the Tooltip.
   */
  hideDelay: PropTypes.number,

  /**
   * Time in ms before showing the Tooltip.
   */
  showDelay: PropTypes.number,

  /**
   * When True, manually show the Tooltip.
   */
  isShown: PropTypes.bool,

  /**
   * The target button of the Tooltip.
   */
  children: PropTypes.node,

  /**
   * Properties passed through to the Tooltip.
   */
  statelessProps: PropTypes.object
}

export default Tooltip
