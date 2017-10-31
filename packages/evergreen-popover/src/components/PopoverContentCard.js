import React, { Component } from 'react'
import PropTypes from 'prop-types'
import objectValues from 'object-values'
import Transition from 'react-transition-group/Transition'
import { Card } from 'evergreen-layers'
import { Portal } from 'evergreen-portal'
import PopoverSides from '../popover-sides'

const INITIAL_SCALE = 0.9

const animationEasing = {
  standard: `cubic-bezier(0.4, 0.0, 0.2, 1)`,
  deceleration: `cubic-bezier(0.0, 0.0, 0.2, 1)`,
  acceleration: `cubic-bezier(0.4, 0.0, 1, 1)`,
  sharp: `cubic-bezier(0.4, 0.0, 0.6, 1)`,
  spring: `cubic-bezier(0.175, 0.885, 0.320, 1.175)`,
}

const styles = ({ targetOffset, animationDuration }) => ({
  position: 'absolute',
  opacity: 0,
  transition: `all ${animationDuration}ms ${animationEasing.spring}`,
  transform: `scale(${INITIAL_SCALE}) translateY(-4px)`,
  '&[data-state="entering"][data-position="bottom"], &[data-state="entered"][data-position="bottom"]': {
    opacity: 1,
    visibility: 'visible',
    transform: `scale(1) translateY(${targetOffset}px)`,
  },
  '&[data-state="entering"][data-position="top"], &[data-state="entered"][data-position="top"]': {
    opacity: 1,
    visibility: 'visible',
    transform: `scale(1) translateY(-${targetOffset}px)`,
  },
  '&[data-state="exiting"]': {
    opacity: 0,
    transform: 'scale(1) translateY(0)',
  },
})

const initialState = () => ({
  top: null,
  left: null,
  side: null,
  transformOriginX: null,
})

export default class PopoverContentCard extends Component {
  static propTypes = {
    ...Card.propTypes,
    side: PropTypes.oneOf(objectValues(PopoverSides)),
    isOpen: PropTypes.bool.isRequired,
    zIndex: PropTypes.number,
    children: PropTypes.node,
    innerRef: PropTypes.func,
    bodyOffset: PropTypes.number,
    targetOffset: PropTypes.number,
    animationDuration: PropTypes.number,
    useSmartPositioning: PropTypes.bool,
  }

  static defaultProps = {
    animationDuration: 300,
  }

  constructor() {
    super()
    this.state = initialState()
  }

  getAnchors = () => {
    const { targetRect } = this.props
    const bodyRect = document.body.getBoundingClientRect()
    const x = targetRect.left + targetRect.width / 2
    return {
      top: {
        x,
        y: targetRect.top - bodyRect.top,
      },
      bottom: {
        x,
        y: targetRect.bottom - bodyRect.top,
      },
    }
  }

  handleEnter = () => {
    const { useSmartPositioning, bodyOffset } = this.props
    const { top, bottom } = this.getAnchors()
    let side = this.props.side

    // Smartly position the popover when it overflows the body
    const popoverRect = this.popoverNode.getBoundingClientRect()
    popoverRect.width *= 1 / INITIAL_SCALE
    popoverRect.height *= 1 / INITIAL_SCALE
    const viewportHeight =
      document.documentElement.clientHeight + window.scrollY
    const viewportWidth = document.documentElement.clientWidth + window.scrollX

    if (useSmartPositioning && popoverRect.height + bottom.y > viewportHeight) {
      side = 'top'
    }

    this.popoverNode.setAttribute('data-position', side)

    let left = Math.max(bottom.x - popoverRect.width / 2, bodyOffset)
    left = Math.min(left, viewportWidth - popoverRect.width - bodyOffset)

    let transformOriginX = bottom.x - left
    transformOriginX = Math.max(transformOriginX - bodyOffset, bottom.x - left)

    this.setState({
      left,
      side,
      transformOriginX,
      top: side === PopoverSides.BOTTOM ? bottom.y : top.y - popoverRect.height,
    })
  }

  handleExited = () => {
    this.setState(initialState())
  }

  render() {
    const {
      children,
      isOpen,
      zIndex,
      innerRef,
      targetOffset,
      animationDuration,
    } = this.props

    const { left, top, side, transformOriginX } = this.state

    const transformOrigin = `${transformOriginX}px ${side ===
    PopoverSides.BOTTOM
      ? 'top'
      : 'bottom'}`

    return (
      <Portal>
        <Transition
          in={isOpen}
          timeout={animationDuration}
          onEnter={this.handleEnter}
          onExited={this.handleExited}
          unmountOnExit
        >
          {state => (
            <Card
              role="dialog"
              elevation={3}
              backgroundColor="white"
              overflow="hidden"
              data-state={state}
              css={{
                ...styles({ targetOffset, animationDuration }),
              }}
              style={{
                left,
                top,
                transformOrigin,
                zIndex,
              }}
              innerRef={node => {
                this.popoverNode = node
                innerRef(node)
              }}
              minWidth={200}
            >
              {children}
            </Card>
          )}
        </Transition>
      </Portal>
    )
  }
}
