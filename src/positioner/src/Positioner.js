import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import objectValues from 'object-values'
import Transition from 'react-transition-group/Transition'
import { Portal } from '../../portal'

const PositionerSides = {
  BOTTOM: 'bottom',
  TOP: 'top'
}

const animationEasing = {
  spring: `cubic-bezier(0.175, 0.885, 0.320, 1.175)`
}

const initialState = () => ({
  top: null,
  left: null,
  side: null,
  transformOriginX: null
})

const getCSS = ({ targetOffset, initialScale, animationDuration }) => ({
  position: 'absolute',
  opacity: 0,
  transition: `all ${animationDuration}ms ${animationEasing.spring}`,
  transform: `scale(${initialScale}) translateY(-1px)`,
  '&[data-state="entering"][data-position="bottom"], &[data-state="entered"][data-position="bottom"]': {
    opacity: 1,
    visibility: 'visible',
    transform: `scale(1) translateY(${targetOffset}px)`
  },
  '&[data-state="entering"][data-position="top"], &[data-state="entered"][data-position="top"]': {
    opacity: 1,
    visibility: 'visible',
    transform: `scale(1) translateY(-${targetOffset}px)`
  },
  '&[data-state="exiting"]': {
    opacity: 0,
    transform: 'scale(1) translateY(0)'
  }
})

export default class Positioner extends PureComponent {
  static propTypes = {
    side: PropTypes.oneOf(objectValues(PositionerSides)),
    zIndex: PropTypes.number,
    isShown: PropTypes.bool,
    children: PropTypes.func,
    innerRef: PropTypes.func,
    bodyOffset: PropTypes.number,
    targetRect: PropTypes.object,
    targetOffset: PropTypes.number,
    initialScale: PropTypes.number,
    animationDuration: PropTypes.number,
    useSmartPositioning: PropTypes.bool
  }

  static defaultProps = {
    innerRef: () => {},
    side: PositionerSides.BOTTOM,
    zIndex: 40,
    bodyOffset: 4,
    targetOffset: 8,
    initialScale: 0.9,
    animationDuration: 300,
    useSmartPositioning: true
  }

  constructor(props, context) {
    super(props, context)
    this.state = initialState()
  }

  getAnchors = () => {
    const { targetRect } = this.props
    const bodyRect = document.body.getBoundingClientRect()
    const x = targetRect.left + targetRect.width / 2
    return {
      top: {
        x,
        y: targetRect.top - bodyRect.top
      },
      bottom: {
        x,
        y: targetRect.bottom - bodyRect.top
      }
    }
  }

  getRef = ref => {
    this.positionerRef = ref
    this.props.innerRef(ref)
  }

  handleEnter = () => {
    const { useSmartPositioning, bodyOffset } = this.props
    const { top, bottom } = this.getAnchors()
    let side = this.props.side

    // Smartly position the positioner when it overflows the body
    const viewportHeight =
      document.documentElement.clientHeight + window.scrollY
    const viewportWidth = document.documentElement.clientWidth + window.scrollX

    if (
      useSmartPositioning &&
      this.positionerRef.offsetHeight + bottom.y > viewportHeight
    ) {
      side = 'top'
    }

    this.positionerRef.setAttribute('data-position', side)

    let left = Math.max(
      bottom.x - this.positionerRef.offsetWidth / 2,
      bodyOffset
    )
    left = Math.min(
      left,
      viewportWidth - this.positionerRef.offsetWidth - bodyOffset
    )

    let transformOriginX = bottom.x - left
    transformOriginX = Math.max(transformOriginX - bodyOffset, bottom.x - left)

    this.setState({
      left,
      side,
      transformOriginX,
      top:
        side === PositionerSides.BOTTOM
          ? bottom.y
          : top.y - this.positionerRef.offsetHeight
    })
  }

  handleExited = () => {
    this.setState(initialState())
  }

  render() {
    const {
      children,
      zIndex,
      isShown,
      targetRect,
      initialScale,
      targetOffset,
      animationDuration
    } = this.props

    const { left, top, side, transformOriginX } = this.state

    const transformOrigin = `${transformOriginX}px ${
      side === PositionerSides.BOTTOM ? 'top' : 'bottom'
    }`

    return (
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
              side,
              state,
              zIndex,
              css: getCSS({ targetOffset, initialScale, animationDuration }),
              style: {
                left,
                top,
                transformOrigin,
                zIndex
              },
              getRef: this.getRef,
              targetRect,
              transformOrigin,
              animationDuration
            })
          }
        </Transition>
      </Portal>
    )
  }
}
