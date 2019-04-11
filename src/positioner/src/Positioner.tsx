import * as PropTypes from 'prop-types'
import * as React from 'react'
import Transition from 'react-transition-group/Transition'

import { Portal } from '../../portal'
import { Stack } from '../../stack'
import { StackingOrder, Position, PositionType } from '../../constants'
import gePositionType from './gePositionType'

interface PositionerProps {
  // The position the element that is being positioned is on. Smart positioning might override this.
  position?: PositionType

  // When true, show the element being positioned.
  isShown?: boolean

  // Function that returns the element being positioned.
  children: any

  // Function that returns the ref of the element being positioned.
  innerRef?: any

  // The minimum distance from the body to the element being positioned.
  bodyOffset?: number

  // The minimum distance from the target to the element being positioned.
  targetOffset?: number

  /**
   * Function that should return a node for the target.
   * ({ getRef: () -> Ref, isShown: Bool }) -> React Node
   */
  target: any

  // Initial scale of the element being positioned.
  initialScale?: number

  // Duration of the animation.
  animationDuration?: number

  // Function that will be called when the exit transition is complete.
  onCloseComplete?: (...args: any[]) => any

  // Function that will be called when the enter transition is complete.
  onOpenComplete?: (...args: any[]) => any
}

interface PositionerState {
  top: number
  left: number
  transformOrigin: string
}

const animationEasing = {
  spring: `cubic-bezier(0.175, 0.885, 0.320, 1.175)`
}

const initialState = (): PositionerState => ({
  top: null,
  left: null,
  transformOrigin: null
})

const getCSS = ({
  initialScale,
  animationDuration
}: {
  initialScale: string | number
  animationDuration: number
}) => ({
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

export default class Positioner extends React.PureComponent<
  PositionerProps,
  PositionerState
> {
  static propTypes = {
    position: PropTypes.oneOf([
      Position.TOP,
      Position.TOP_LEFT,
      Position.TOP_RIGHT,
      Position.BOTTOM,
      Position.BOTTOM_LEFT,
      Position.BOTTOM_RIGHT,
      Position.LEFT,
      Position.RIGHT
    ]).isRequired as PropTypes.Validator<PositionType>,
    isShown: PropTypes.bool,
    children: PropTypes.func.isRequired,
    innerRef: PropTypes.func.isRequired,
    bodyOffset: PropTypes.number.isRequired,
    targetOffset: PropTypes.number.isRequired,
    target: PropTypes.func.isRequired,
    initialScale: PropTypes.number.isRequired,
    animationDuration: PropTypes.number.isRequired,
    onCloseComplete: PropTypes.func.isRequired,
    onOpenComplete: PropTypes.func.isRequired
  }

  static defaultProps = {
    position: Position.BOTTOM,
    bodyOffset: 6,
    targetOffset: 6,
    initialScale: 0.9,
    animationDuration: 300,
    innerRef: () => {},
    onOpenComplete: () => {},
    onCloseComplete: () => {}
  }

  latestAnimationFrame: any

  positionerRef: any

  targetRef: any

  constructor(props: PositionerProps, context: any) {
    super(props, context)
    this.state = initialState()
  }

  componentWillUnmount() {
    if (this.latestAnimationFrame) {
      cancelAnimationFrame(this.latestAnimationFrame)
    }
  }

  getTargetRef = (ref: any) => {
    this.targetRef = ref
  }

  getRef = (ref: any) => {
    this.positionerRef = ref
    this.props.innerRef(ref)
  }

  handleEnter = () => {
    this.update()
  }

  update = (prevHeight = 0, prevWidth = 0) => {
    if (!this.props.isShown || !this.targetRef || !this.positionerRef) return

    const targetRect = this.targetRef.getBoundingClientRect()
    const hasEntered =
      this.positionerRef.getAttribute('data-state') === 'entered'

    const viewportHeight = document.documentElement.clientHeight
    const viewportWidth = document.documentElement.clientWidth

    let height: number
    let width: number
    if (hasEntered) {
      // Only when the animation is done should we opt-in to `getBoundingClientRect`
      const positionerRect = this.positionerRef.getBoundingClientRect()

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
      height = Math.max(this.positionerRef.offsetHeight, prevHeight)
      width = Math.max(this.positionerRef.offsetWidth, prevWidth)
    }

    const { rect, transformOrigin } = gePositionType({
      position: this.props.position,
      targetRect,
      targetOffset: this.props.targetOffset,
      dimensions: {
        height,
        width
      },
      viewport: {
        width: viewportWidth,
        height: viewportHeight
      },
      viewportOffset: this.props.bodyOffset
    })

    this.setState(
      {
        left: rect.left,
        top: rect.top,
        transformOrigin
      },
      () => {
        this.latestAnimationFrame = requestAnimationFrame(() => {
          this.update(height, width)
        })
      }
    )
  }

  handleExited = () => {
    this.setState(
      () => {
        return {
          ...initialState()
        }
      },
      () => {
        this.props.onCloseComplete()
      }
    )
  }

  render() {
    const {
      target,
      isShown,
      children,
      initialScale,
      targetOffset,
      animationDuration
    } = this.props

    const { left, top, transformOrigin } = this.state

    return (
      <Stack value={StackingOrder.POSITIONER}>
        {zIndex => {
          return (
            <React.Fragment>
              {target({ getRef: this.getTargetRef, isShown })}

              <Transition
                appear
                in={isShown}
                timeout={animationDuration}
                onEnter={this.handleEnter}
                onEntered={this.props.onOpenComplete}
                onExited={this.handleExited}
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
                      getRef: this.getRef,
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
  }
}
