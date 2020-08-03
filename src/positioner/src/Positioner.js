import React, { memo, useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { Transition } from 'react-transition-group'
import { Portal } from '../../portal'
import { Stack } from '../../stack'
import { StackingOrder, Position } from '../../constants'
import { useMergedRef, usePrevious } from '../../hooks'
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

const noop = () => {}
const initialDimensions = {
  left: 0,
  top: 0,
  height: 0,
  width: 0,
  transformOrigin: null
}

const Positioner = memo(function Positioner(props) {
  const {
    target,
    isShown,
    children,
    initialScale = 0.9,
    animationDuration = 300,
    position = Position.BOTTOM,
    bodyOffset = 6,
    targetOffset = 6,
    onOpenComplete = noop,
    onCloseComplete = noop
  } = props

  const [dimensions, setDimensions] = useState(initialDimensions)
  const previousDimensions = usePrevious(dimensions, initialDimensions)
  const latestAnimationFrame = useRef()
  const transitionState = useRef()
  const positionerRef = useRef()
  const targetRef = useRef()
  const setTargetRef = useMergedRef(targetRef)
  const getRef = useMergedRef(positionerRef)

  // Call `update` whenever the component has "entered" and dimensions change
  useEffect(() => {
    if (transitionState.current === 'entered') {
      latestAnimationFrame.current = requestAnimationFrame(() => {
        update(previousDimensions.height, previousDimensions.width)
      })
    }

    return () => {
      if (latestAnimationFrame.current) {
        cancelAnimationFrame(latestAnimationFrame.current)
      }
    }
  }, [dimensions])

  const handleEnter = () => {
    transitionState.current = 'entered'
    update()
  }

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
  }

  const handleExited = () => {
    transitionState.current = 'exited'
    setDimensions(initialDimensions)
    onCloseComplete()
  }

  return (
    <Stack value={StackingOrder.POSITIONER}>
      {zIndex => {
        return (
          <React.Fragment>
            {target({ getRef: setTargetRef, isShown })}

            <Transition
              appear
              in={isShown}
              timeout={animationDuration}
              onEnter={handleEnter}
              onEntered={onOpenComplete}
              onExited={handleExited}
              unmountOnExit
            >
              {state => (
                <Portal>
                  {children({
                    top: dimensions.top,
                    left: dimensions.left,
                    state,
                    zIndex,
                    css: getCSS({
                      initialScale,
                      animationDuration
                    }),
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
            </Transition>
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
