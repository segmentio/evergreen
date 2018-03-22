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
  position: 'absolute',
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

export default class Positioner2 extends PureComponent {
  static propTypes = {
    position: PropTypes.oneOf(Object.keys(Position)),
    zIndex: PropTypes.number,
    isShown: PropTypes.bool,
    children: PropTypes.func,
    innerRef: PropTypes.func,
    bodyOffset: PropTypes.number,
    targetOffset: PropTypes.number,
    target: PropTypes.func,
    initialScale: PropTypes.number,
    animationDuration: PropTypes.number
  }

  static defaultProps = {
    innerRef: () => {},
    position: Position.BOTTOM,
    zIndex: 40,
    bodyOffset: 6,
    targetOffset: 6,
    initialScale: 0.9,
    animationDuration: 300
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
    this.setState(() => {
      return {
        ...initialState()
      }
    })
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
