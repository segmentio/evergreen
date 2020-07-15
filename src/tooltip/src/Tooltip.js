import cx from 'classnames'
import { css as glamorCss } from 'glamor'
import React, { memo, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import debounce from 'lodash.debounce'
import { Positioner } from '../../positioner'
import { Position } from '../../constants'
import TooltipStateless from './TooltipStateless'

let idCounter = 0

const Tooltip = memo(props => {
  const {
    appearance = 'default',
    position = Position.BOTTOM,
    content,
    hideDelay = 120,
    showDelay = 0,
    isShown: propIsShown,
    children,
    statelessProps = {}
  } = props

  const [id, setId] = useState(`evergreen-tooltip-${++idCounter}`)
  const [willShow, setWillShow] = useState(false)
  const [isShown, setIsShown] = useState(propIsShown || false)
  const [isShownByTarget, setIsShownByTarget] = useState(false)
  const [closeTimeout, setCloseTimeout] = useState(null)

  const mouseLeftTarget = () => {
    setIsShownByTarget(false)
    setWillShow(false)
  }

  const handleMouseLeaveTarget = debounce(mouseLeftTarget, hideDelay)

  const hide = () => {
    setIsShown(false)
    setWillShow(false)
  }

  const handleHide = debounce(hide, hideDelay)

  // Component will unmount
  useEffect(
    () => () => {
      clearTimeout(closeTimeout)
      setCloseTimeout(null)
    },
    []
  )

  const show = () => {
    if (isShown) return

    if (!showDelay) {
      setIsShown(true)
      return
    }

    setWillShow(true)
    setCloseTimeout(
      setTimeout(() => {
        setIsShown(true)
      }, showDelay)
    )
  }

  const renderTarget = ({ getRef }) => {
    const tooltipTargetProps = {
      onMouseEnter: show,
      onMouseLeave: hide,
      'aria-describedby': id
    }

    /**
     * Tooltips can be used within a Popover (not the other way around)
     * When a Tooltip is used within a Popover, the Popover passes
     * its props to the Tooltip in a `popoverProps` object.
     */
    if (props.popoverProps) {
      const {
        getTargetRef,
        isShown,
        ...popoverTargetProps
      } = props.popoverProps

      return React.cloneElement(children, {
        // Add the Popover props to the target.
        ...popoverTargetProps,
        // Add the Tooltip props to the target.
        ...tooltipTargetProps,

        ref: ref => {
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
    return React.cloneElement(children, {
      ...tooltipTargetProps,
      ref: ref => {
        getRef(ref)
      }
    })
  }

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
    <Positioner
      target={({ getRef }) => {
        return renderTarget({ getRef })
      }}
      isShown={shown}
      position={position}
      animationDuration={160}
    >
      {({ css, style, state, getRef }) => (
        <TooltipStateless
          id={id}
          appearance={appearance}
          ref={ref => getRef(ref)}
          data-state={state}
          style={style}
          onMouseEnter={handleMouseEnterTarget}
          onMouseLeave={handleMouseLeaveTarget}
          {...statelessProps}
          className={cx(
            statelessProps.className,
            css ? glamorCss(css).toString() : undefined
          )}
        >
          {content}
        </TooltipStateless>
      )}
    </Positioner>
  )
})

Tooltip.propTypes = {
  /**
   * The appearance of the tooltip.
   */
  appearance: PropTypes.oneOf(['default', 'card']).isRequired,

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
  content: PropTypes.node.isRequired,

  /**
   * Time in ms before hiding the Tooltip.
   */
  hideDelay: PropTypes.number.isRequired,

  /**
   * Time in ms before showing the Tooltip.
   */
  showDelay: PropTypes.number.isRequired,

  /**
   * When True, manually show the Tooltip.
   */
  isShown: PropTypes.bool,

  /**
   * The target button of the Tooltip.
   */
  children: PropTypes.node.isRequired,

  /**
   * Properties passed through to the Tooltip.
   */
  statelessProps: PropTypes.object
}

export default Tooltip
