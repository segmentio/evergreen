import React, { memo, useCallback, useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { Transition } from 'react-transition-group'
import { StackingOrder, Position } from '../../constants'
import { useMergedRef, usePrevious } from '../../hooks'
import { Portal } from '../../portal'
import { Stack } from '../../stack'
import getPosition from './getPosition'

const animationEasing = {
  spring: 'cubic-bezier(0.175, 0.885, 0.320, 1.175)'
}

const getCSS = ({
  animationDuration,
  initialScale
}: any) => ({
  position: 'fixed',
  opacity: 0,
  transitionTimingFunction: animationEasing.spring,
  transitionDuration: `${animationDuration}ms`,
  transitionProperty: 'opacity, transform',
  transform: `scale(${initialScale}) translateY(-1px)`,
  '&[data-state="entering"], &[data-state="entered"]': {
    opacity: 1,
    visibility: 'visible',
    transform: 'scale(1)'
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
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'target' does not exist on type '{ childr... Remove this comment to see the full error message
    target,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'isShown' does not exist on type '{ child... Remove this comment to see the full error message
    isShown,
    children,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'initialScale' does not exist on type '{ ... Remove this comment to see the full error message
    initialScale = 0.9,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'animationDuration' does not exist on typ... Remove this comment to see the full error message
    animationDuration = 300,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'position' does not exist on type '{ chil... Remove this comment to see the full error message
    position = Position.BOTTOM,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'bodyOffset' does not exist on type '{ ch... Remove this comment to see the full error message
    bodyOffset = 6,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'targetOffset' does not exist on type '{ ... Remove this comment to see the full error message
    targetOffset = 6,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'onOpenComplete' does not exist on type '... Remove this comment to see the full error message
    onOpenComplete = noop,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'onCloseComplete' does not exist on type ... Remove this comment to see the full error message
    onCloseComplete = noop
  } = props

  const [dimensions, setDimensions] = useState(initialDimensions)
  const previousDimensions = usePrevious(dimensions, initialDimensions)
  const latestAnimationFrame = useRef()
  const transitionState = useRef()
  const positionerRef = useRef()
  const targetRef = useRef()
  // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
  const setTargetRef = useMergedRef(targetRef)
  // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
  const getRef = useMergedRef(positionerRef)

  const update = useCallback(
    (prevHeight = 0, prevWidth = 0) => {
      if (!isShown || !targetRef.current || !positionerRef.current) return

      // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
      const targetRect = targetRef.current.getBoundingClientRect()

      // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
      const hasEntered = positionerRef.current.getAttribute('data-state') === 'entered'

      const viewportHeight = document.documentElement.clientHeight
      const viewportWidth = document.documentElement.clientWidth

      let height
      let width
      if (hasEntered) {
        // Only when the animation is done should we opt-in to `getBoundingClientRect`
        // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
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
        // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
        height = Math.max(positionerRef.current.offsetHeight, prevHeight)
        // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
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
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'null'.
        transformOrigin
      })
    },
    [bodyOffset, isShown, position, targetOffset]
  )

  // Call `update` whenever the component has "entered" and dimensions change
  useEffect(() => {
    if (transitionState.current === 'entered') {
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'undefined... Remove this comment to see the full error message
      latestAnimationFrame.current = requestAnimationFrame(() => {
        update(previousDimensions.height, previousDimensions.width)
      })
    }

    return () => {
      if (latestAnimationFrame.current) {
        // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'undefined' is not assignable to ... Remove this comment to see the full error message
        cancelAnimationFrame(latestAnimationFrame.current)
      }
    }
  }, [previousDimensions.height, previousDimensions.width, update])

  const handleEnter = () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type '"entered"' is not assignable to type 'undefi... Remove this comment to see the full error message
    transitionState.current = 'entered'
    update()
  }

  const handleExited = () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type '"exited"' is not assignable to type 'undefin... Remove this comment to see the full error message
    transitionState.current = 'exited'
    setDimensions(initialDimensions)
    onCloseComplete()
  }

  return (
    // @ts-expect-error ts-migrate(2322) FIXME: Type '{ children: (zIndex: any) => Element; value:... Remove this comment to see the full error message
    <Stack value={StackingOrder.POSITIONER}>
      {(zIndex: any) => {
        return (
          <React.Fragment>
            {target({ getRef: setTargetRef, isShown })}

            <Transition
              nodeRef={positionerRef}
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
                  // @ts-expect-error ts-migrate(2349) FIXME: This expression is not callable.
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
  );
})

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'Named... Remove this comment to see the full error message
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
