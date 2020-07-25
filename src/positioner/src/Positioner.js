import React, { memo, useState, useEffect, useRef, useMemo } from 'react'
import PropTypes from 'prop-types'
import { Portal } from '../../portal'
import { Stack } from '../../stack'
import { StackingOrder, Position } from '../../constants'
import { useMergedRef, useTransition, TRANSITION_STATES } from '../../hooks'
import getPosition from './getPosition'

const animationEasing = {
  spring: `cubic-bezier(0.175, 0.885, 0.320, 1.175)`
}

const getCSS = ({ initialScale, animationDuration }) => ({
  position: 'fixed',
  opacity: 0,
  transitionTimingFunction: animationEasing.spring,
  transitionDuration: `${animationDuration}ms`,
  transitionProperty: 'opacity, transform',
  transform: `scale(${initialScale}) translateY(-1px)`,
  '&[data-state="entering"], &[data-state="entered"]': {
    opacity: 1,
    visibility: 'visible',
    transform: `scale(1)`
  },
  '&[data-state="exiting"]': {
    opacity: 0,
    transform: 'scale(1)'
  }
})

const initialDimensions = {
  left: 0,
  top: 0,
  height: 0,
  width: 0,
  transformOrigin: null
}

const Positioner = memo(props => {
  const {
    target,
    isShown,
    children,
    initialScale = 0.9,
    animationDuration = 300,
    position = Position.BOTTOM,
    bodyOffset = 6,
    targetOffset = 6,
    onOpenComplete = () => {},
    onCloseComplete = () => {}
  } = props

  const state = useTransition(isShown, animationDuration, {
    unmountOnExit: true,
    onEnter: () => update()
  })

  useEffect(() => {
    if (state === TRANSITION_STATES.entered) {
      onOpenComplete()
    } else if (state === TRANSITION_STATES.exited) {
      setDimensions(initialDimensions)
      onCloseComplete()
    }
  }, [state])

  const [dimensions, setDimensions] = useState(initialDimensions)
  const latestAnimationFrame = useRef()
  const positionerRef = useRef()
  const targetRef = useRef()
  const setTargetRef = useMergedRef(targetRef)
  const getRef = useMergedRef(positionerRef)
  const animationCss = useMemo(
    () => getCSS({ initialScale, animationDuration }),
    [initialScale, animationDuration]
  )

  useEffect(() => {
    return () => {
      if (latestAnimationFrame.current) {
        cancelAnimationFrame(latestAnimationFrame.current)
      }
    }
  }, [])

  const update = (prevHeight = 0, prevWidth = 0) => {
    if (!isShown || !targetRef.current || !positionerRef.current) return

    const targetRect = targetRef.current.getBoundingClientRect()

    const hasEntered =
      positionerRef.current.getAttribute('data-state') === 'entered'
    const viewportHeight = document.documentElement.clientHeight
    const viewportWidth = document.documentElement.clientWidth

    let height
    let width
    if (hasEntered) {
      // Only when the animation is done should we opt-in to `getBoundingClientRect`
      const positionerRect = positionerRef.current.getBoundingClientRect()

      // https://github.com/segmentio/evergreen/issues/255
      // We need to ceil the width and height to prevent jitter when
      // the window is zoomed (when `window.devicePixelRatio` is not an integer)
      height = Math.round(positionerRect.height)
      width = Math.round(positionerRect.width)
    } else {
      // When the animation is in flight use `offsetWidth/Height` which
      // does not calculate the `transform` property as part of its result.
      // There is still change on jitter during the animation (although unoticable)
      // When the browser is zoomed in — we fix this with `Math.max`.
      height = Math.max(positionerRef.current.offsetHeight, prevHeight)
      width = Math.max(positionerRef.current.offsetWidth, prevWidth)
    }

    const { rect, transformOrigin } = getPosition({
      position,
      targetRect,
      targetOffset,
      dimensions: {
        height,
        width
      },
      viewport: {
        width: viewportWidth,
        height: viewportHeight
      },
      viewportOffset: bodyOffset
    })

    setDimensions({
      left: rect.left,
      top: rect.top,
      height,
      width,
      transformOrigin
    })

    latestAnimationFrame.current = requestAnimationFrame(() => {
      update(height, width)
    })
  }

  return (
    <Stack value={StackingOrder.POSITIONER}>
      {zIndex => {
        return (
          <React.Fragment>
            {target({ getRef: setTargetRef, isShown })}

            {state !== TRANSITION_STATES.unmounted && (
              <Portal>
                {children({
                  top: dimensions.top,
                  left: dimensions.left,
                  state,
                  zIndex,
                  css: animationCss,
                  style: {
                    transformOrigin: dimensions.transformOrigin,
                    left: dimensions.left,
                    top: dimensions.top,
                    zIndex
                  },
                  getRef,
                  animationDuration
                })}
              </Portal>
            )}
          </React.Fragment>
        )
      }}
    </Stack>
  )
})

Positioner.propTypes = {
  /**
   * The position the element that is being positioned is on.
   * Smart positioning might override this.
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
   * When true, show the element being positioned.
   */
  isShown: PropTypes.bool,

  /**
   * Function that returns the element being positioned.
   */
  children: PropTypes.func.isRequired,

  /**
   * The minimum distance from the body to the element being positioned.
   */
  bodyOffset: PropTypes.number,

  /**
   * The minimum distance from the target to the element being positioned.
   */
  targetOffset: PropTypes.number,

  /**
   * Function that should return a node for the target.
   * ({ getRef: () -> Ref, isShown: Bool }) -> React Node
   */
  target: PropTypes.func.isRequired,

  /**
   * Initial scale of the element being positioned.
   */
  initialScale: PropTypes.number,

  /**
   * Duration of the animation.
   */
  animationDuration: PropTypes.number,

  /**
   * Function that will be called when the exit transition is complete.
   */
  onCloseComplete: PropTypes.func,

  /**
   * Function that will be called when the enter transition is complete.
   */
  onOpenComplete: PropTypes.func
}

export default Positioner
