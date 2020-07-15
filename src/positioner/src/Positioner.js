import React, { memo, forwardRef, useState, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import { Transition } from 'react-transition-group'
import { Portal } from '../../portal'
import { Stack } from '../../stack'
import { StackingOrder, Position } from '../../constants'
import bubbleRef from '../../lib/bubble-ref'
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

const Positioner = memo(
  forwardRef((props, ref) => {
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

    const [top, setTop] = useState(0)
    const [left, setLeft] = useState(0)
    const [height, setHeight] = useState(0)
    const [width, setWidth] = useState(0)
    const [transformOrigin, setTransformOrigin] = useState(null)
    const [latestAnimationFrame, setLatestAnimationFrame] = useState()
    const [targetRef, setTargetRef] = useState()
    const [positionerRef, setPositionerRef] = useState()

    useLayoutEffect(() => {
      if (latestAnimationFrame) {
        cancelAnimationFrame(latestAnimationFrame)
      }

      setLatestAnimationFrame(
        requestAnimationFrame(() => {
          update(height, width)
        })
      )

      return () => {
        if (latestAnimationFrame) {
          cancelAnimationFrame(latestAnimationFrame)
        }
      }
    }, [left, top, height, width, transformOrigin, positionerRef])

    const getRef = newRef => {
      setPositionerRef(newRef)
      bubbleRef(ref, newRef)
    }

    const handleEnter = () => {
      update()
    }

    const update = (prevHeight = 0, prevWidth = 0) => {
      if (!isShown || !targetRef || !positionerRef) return

      const targetRect = targetRef.getBoundingClientRect()

      const hasEntered = positionerRef.getAttribute('data-state') === 'entered'

      const viewportHeight = document.documentElement.clientHeight
      const viewportWidth = document.documentElement.clientWidth

      let positionerHeight
      let positionerWidth
      if (hasEntered) {
        // Only when the animation is done should we opt-in to `getBoundingClientRect`
        const positionerRect = positionerRef.getBoundingClientRect()

        // https://github.com/segmentio/evergreen/issues/255
        // We need to ceil the width and height to prevent jitter when
        // the window is zoomed (when `window.devicePixelRatio` is not an integer)
        positionerHeight = Math.round(positionerRect.height)
        positionerWidth = Math.round(positionerRect.width)
      } else {
        // When the animation is in flight use `offsetWidth/Height` which
        // does not calculate the `transform` property as part of its result.
        // There is still change on jitter during the animation (although unoticable)
        // When the browser is zoomed in — we fix this with `Math.max`.
        positionerHeight = Math.max(positionerRef.offsetHeight, prevHeight)
        positionerWidth = Math.max(positionerRef.offsetWidth, prevWidth)
      }

      const { rect, transformOrigin: updatedTransformOrigin } = getPosition({
        position,
        targetRect,
        targetOffset,
        dimensions: {
          height: positionerHeight,
          width: positionerWidth
        },
        viewport: {
          width: viewportWidth,
          height: viewportHeight
        },
        viewportOffset: bodyOffset
      })

      setHeight(positionerHeight)
      setWidth(positionerWidth)
      setLeft(rect.left)
      setTop(rect.top)
      setTransformOrigin(updatedTransformOrigin)
    }

    const handleExited = () => {
      setLeft(0)
      setTop(0)
      setHeight(0)
      setWidth(0)
      setTransformOrigin(null)
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
                      top,
                      left,
                      state,
                      zIndex,
                      css: getCSS({
                        initialScale,
                        animationDuration
                      }),
                      style: {
                        transformOrigin,
                        left,
                        top,
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
)

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
