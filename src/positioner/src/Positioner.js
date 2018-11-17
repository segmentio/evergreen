import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Transition from 'react-transition-group/Transition'
import { Portal } from '../../portal'
import { Stack } from '../../stack'
import { StackingOrder, Position } from '../../constants'
import getPosition from './getPosition'

const animationEasing = {
  spring: `cubic-bezier(0.175, 0.885, 0.320, 1.175)`
}

const initialState = () => ({
  top: null,
  left: null,
  transformOrigin: null
})

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

export default class Positioner extends PureComponent {
  static propTypes = {
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
    ]).isRequired,

    /**
     * When true, show the element being positioned.
     */
    isShown: PropTypes.bool,

    /**
     * Function that returns the element being positioned.
     */
    children: PropTypes.func.isRequired,

    /**
     * Function that returns the ref of the element being positioned.
     */
    innerRef: PropTypes.func.isRequired,

    /**
     * The minimum distance from the body to the element being positioned.
     */
    bodyOffset: PropTypes.number.isRequired,

    /**
     * The minimum distance from the target to the element being positioned.
     */
    targetOffset: PropTypes.number.isRequired,

    /**
     * Function that should return a node for the target.
     * ({ getRef: () -> Ref, isShown: Bool }) -> React Node
     */
    target: PropTypes.func.isRequired,

    /**
     * Initial scale of the element being positioned.
     */
    initialScale: PropTypes.number.isRequired,

    /**
     * Duration of the animation.
     */
    animationDuration: PropTypes.number.isRequired,

    /**
     * Function that will be called when the exit transition is complete.
     */
    onCloseComplete: PropTypes.func.isRequired,

    /**
     * Function that will be called when the enter transition is complete.
     */
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

  constructor(props, context) {
    super(props, context)
    this.state = initialState()
  }

  componentWillUnmount() {
    if (this.latestAnimationFrame) {
      cancelAnimationFrame(this.latestAnimationFrame)
    }
  }

  getTargetRef = ref => {
    this.targetRef = ref
  }

  getRef = ref => {
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

    let height
    let width
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

    const { rect, transformOrigin } = getPosition({
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
                        targetOffset,
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
