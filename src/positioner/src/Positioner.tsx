import React, { memo, useCallback, useState, useEffect, useRef, CSSProperties } from 'react'
import { StyleAttribute } from 'glamor'
import { Transition } from 'react-transition-group'
import { PositionTypes, PositionState } from '../../..'
import { StackingOrder, Position } from '../../constants'
import { useMergedRef, usePrevious } from '../../hooks'
import { Portal } from '../../portal'
import { Stack } from '../../stack'
import { StackProps } from '../../stack/src/Stack'
import getPosition from './getPosition'

export interface PositionerProps {
  position?: PositionTypes
  isShown?: boolean
  children: (params: {
    top: number
    left: number
    zIndex: NonNullable<StackProps['value']>
    css: StyleAttribute | CSSProperties
    style: {
      transformOrigin: string
      left: number
      top: number
      zIndex: NonNullable<StackProps['value']>
    }
    getRef: (ref: React.RefObject<HTMLElement>) => void
    animationDuration: PositionerProps['animationDuration']
    state: PositionState
  }) => React.ReactNode
  bodyOffset?: number
  targetOffset?: number
  target: (params: { getRef: () => React.RefObject<HTMLElement>; isShown: boolean }) => React.ReactNode
  initialScale?: number
  animationDuration?: number
  onCloseComplete?: () => void
  onOpenComplete?: () => void
}

interface Dimensions {
  top: number
  left: number
  height: number
  width: number
  transformOrigin: string | null
}

const animationEasing = {
  spring: 'cubic-bezier(0.175, 0.885, 0.320, 1.175)'
}

const getCSS = ({ animationDuration, initialScale }: any) => ({
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
const initialDimensions: Dimensions = {
  left: 0,
  top: 0,
  height: 0,
  width: 0,
  transformOrigin: null
}

const Positioner: React.FC<PositionerProps> = memo(function Positioner(props) {
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
        transformOrigin
      })
    },
    [bodyOffset, isShown, position, targetOffset]
  )

  // Call `update` whenever the component has "entered" and dimensions change
  // additionally, when there are dynamic children
  useEffect(() => {
    if (transitionState.current === 'entered') {
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'undefined... Remove this comment to see the full error message
      latestAnimationFrame.current = requestAnimationFrame(() => {
        update(previousDimensions.height, previousDimensions.width)
      })
    }

    return () => {
      if (latestAnimationFrame.current) {
        cancelAnimationFrame(latestAnimationFrame.current)
      }
    }
  }, [previousDimensions.height, previousDimensions.width, update, children])

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

  useEffect(() => {
    window.addEventListener('resize', update)
    window.addEventListener('scroll', update)

    return () => {
      window.removeEventListener('resize', update)
      window.removeEventListener('scroll', update)
    }
  })

  return (
    <Stack value={StackingOrder.POSITIONER}>
      {(zIndex: any) => {
        return (
          <React.Fragment>
            {/* @ts-expect-error ts-migrate(2322) FIXME: Type '((node: any) => void) | null' is not assigna... Remove this comment to see the full error message */}
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
                  {children({
                    top: dimensions.top,
                    left: dimensions.left,
                    // @ts-expect-error ts-migrate(2322) FIXME: Type 'TransitionStatus' is not assignable to type ... Remove this comment to see the full error message
                    state,
                    zIndex,
                    // @ts-expect-error ts-migrate(2322) FIXME: Type '{ position: string; opacity: number; transit... Remove this comment to see the full error message
                    css: getCSS({
                      initialScale,
                      animationDuration
                    }),
                    style: {
                      transformOrigin: dimensions.transformOrigin!,
                      left: dimensions.left,
                      top: dimensions.top,
                      zIndex
                    },
                    // @ts-expect-error
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

export default Positioner
