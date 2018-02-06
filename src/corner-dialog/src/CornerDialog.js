import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { css } from 'ui-box'
import Transition from 'react-transition-group/Transition'
import { Pane } from '../../layers'
import { Portal } from '../../portal'
import { Heading } from '../../typography'
import { IconButton } from '../../buttons'

const animationEasing = {
  deceleration: `cubic-bezier(0.0, 0.0, 0.2, 1)`,
  acceleration: `cubic-bezier(0.4, 0.0, 1, 1)`,
  spring: `cubic-bezier(0.175, 0.885, 0.320, 1.175)`
}

const ANIMATION_DURATION = 240

const openAnimation = css.keyframes('openAnimation', {
  from: {
    transform: 'translateY(100%)'
  },
  to: {
    transform: 'translateY(0)'
  }
})

const closeAnimation = css.keyframes('closeAnimation', {
  from: {
    transform: 'scale(1)',
    opacity: 1
  },
  to: {
    transform: 'scale(0.9)',
    opacity: 0
  }
})

const animationStyles = {
  '&[data-state="entering"], &[data-state="entered"]': {
    animation: `${openAnimation} ${ANIMATION_DURATION}ms ${
      animationEasing.spring
    } both`
  },
  '&[data-state="exiting"]': {
    animation: `${closeAnimation} 120ms ${animationEasing.acceleration} both`
  }
}

export default class CornerDialog extends PureComponent {
  static propTypes = {
    title: PropTypes.node,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    isShown: PropTypes.bool,
    children: PropTypes.node,
    hasCloseIcon: PropTypes.bool,
    containerProps: PropTypes.object,

    onHide: PropTypes.func,
    onExit: PropTypes.func,
    onExiting: PropTypes.func,
    onExited: PropTypes.func,
    onEnter: PropTypes.func,
    onEntering: PropTypes.func,
    onEntered: PropTypes.func
  }

  static defaultProps = {
    onHide: () => {},
    width: 320,
    height: 176,
    hasCloseIcon: true
  }

  constructor() {
    super()

    this.state = {
      exiting: false
    }
  }

  handleHidden = (...args) => {
    this.setState({ exiting: false })
    this.props.onHide()

    if (this.props.onExited) {
      this.props.onExited(...args)
    }
  }

  handleClose = () => {
    this.setState({ exiting: true })
    this.props.onHide()
  }

  render() {
    const {
      children,
      width,
      height,
      hasCloseIcon,
      containerProps,
      isShown,
      title,
      onExit,
      onExiting,
      onEnter,
      onEntering,
      onEntered
    } = this.props

    const { exiting } = this.state

    return (
      <Portal>
        <Transition
          appear
          unmountOnExit
          timeout={ANIMATION_DURATION}
          in={isShown && !exiting}
          onExit={onExit}
          onExiting={onExiting}
          onExited={this.handleHidden}
          onEnter={onEnter}
          onEntering={onEntering}
          onEntered={onEntered}
        >
          {state => (
            <Pane
              role="dialog"
              backgroundColor="white"
              elevation={4}
              borderRadius={8}
              width={width}
              height={height}
              css={animationStyles}
              data-state={state}
              position="fixed"
              bottom={8}
              right={8}
              {...containerProps}
            >
              <Pane
                padding={8}
                borderBottom="extraMuted"
                display="flex"
                alignItems="center"
              >
                <Heading is="h4" size={500} flex="1">
                  {title}
                </Heading>
                {hasCloseIcon && (
                  <IconButton
                    height={24}
                    icon="close"
                    appearance="ghost"
                    onClick={this.handleClose}
                  />
                )}
              </Pane>

              <Pane overflowY="auto" data-state={state} padding={8}>
                {typeof children === 'function'
                  ? children({
                      close
                    })
                  : children}
              </Pane>
            </Pane>
          )}
        </Transition>
      </Portal>
    )
  }
}
