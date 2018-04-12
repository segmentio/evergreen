import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Transition from 'react-transition-group/Transition'
import { Portal } from '../../portal'
import getPosition from './getPosition'
import Position from './Position'

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
    position: PropTypes.oneOf(Object.keys(Position)).isRequired,

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
     * The z-index of the element being positioned.
     */
    zIndex: PropTypes.number.isRequired,

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
    zIndex: 40,
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

  getTargetRect = () => this.targetRef.getBoundingClientRect()

  update = () => {
    if (!this.props.isShown || !this.targetRef || !this.positionerRef) return

    const targetRect = this.getTargetRect()
    const viewportHeight =
      document.documentElement.clientHeight + window.scrollY
    const viewportWidth = document.documentElement.clientWidth + window.scrollX

    const position = getPosition({
      position: this.props.position,
      targetRect,
      targetOffset: this.props.targetOffset,
      dimensions: {
        height: this.positionerRef.offsetHeight,
        width: this.positionerRef.offsetWidth
      },
      viewport: {
        width: viewportWidth,
        height: viewportHeight
      },
      viewportOffset: this.props.bodyOffset
    })

    this.setState(
      {
        left: position.left,
        top: position.top,
        transformOrigin: position.transformOrigin
      },
      () => {
        window.requestAnimationFrame(() => {
          this.update()
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
      zIndex,
      target,
      isShown,
      children,
      initialScale,
      targetOffset,
      animationDuration
    } = this.props

    const { left, top, transformOrigin } = this.state

    return (
      <React.Fragment>
        {target({ getRef: this.getTargetRef, isShown })}
        <Portal>
          <Transition
            in={isShown}
            timeout={animationDuration}
            onEnter={this.handleEnter}
            onEntered={this.props.onOpenComplete}
            onExited={this.handleExited}
            unmountOnExit
          >
            {state =>
              children({
                top,
                left,
                state,
                zIndex,
                css: getCSS({ targetOffset, initialScale, animationDuration }),
                style: {
                  transformOrigin,
                  left,
                  top,
                  zIndex
                },
                getRef: this.getRef,
                animationDuration
              })
            }
          </Transition>
        </Portal>
      </React.Fragment>
    )
  }
}
