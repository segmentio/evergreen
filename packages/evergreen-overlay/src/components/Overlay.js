import React from 'react'
import PropTypes from 'prop-types'
import Transition from 'react-transition-group/Transition'
import { Portal } from 'evergreen-portal'
import colors from 'evergreen-colors'
import Box, { css } from 'ui-box'

const animationEasing = {
  standard: `cubic-bezier(0.4, 0.0, 0.2, 1)`,
  deceleration: `cubic-bezier(0.0, 0.0, 0.2, 1)`,
  acceleration: `cubic-bezier(0.4, 0.0, 1, 1)`,
  sharp: `cubic-bezier(0.4, 0.0, 0.6, 1)`,
  spring: `cubic-bezier(0.175, 0.885, 0.320, 1.175)`
}

const ANIMATION_DURATION = 240

const fadeInAnimation = css.keyframes('fadeInAnimation', {
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  }
})

const fadeOutAnimation = css.keyframes('fadeOutAnimation', {
  from: {
    opacity: 1
  },
  to: {
    opacity: 0
  }
})

const animationStyles = {
  '&::before': {
    backgroundColor: colors.neutral['200A'],
    left: 0,
    top: 0,
    position: 'fixed',
    display: 'block',
    width: '100%',
    height: '100%',
    content: '" "'
  },
  '&[data-state="entering"]::before, &[data-state="entered"]::before': {
    animation: `${fadeInAnimation} ${ANIMATION_DURATION}ms ${
      animationEasing.deceleration
    } both`
  },
  '&[data-state="exiting"]::before, &[data-state="exited"]::before': {
    animation: `${fadeOutAnimation} ${ANIMATION_DURATION}ms ${
      animationEasing.acceleration
    } both`
  }
}

class Overlay extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    isShown: PropTypes.bool,
    hasBackdrop: PropTypes.bool,
    containerProps: PropTypes.object,

    onHide: PropTypes.func,
    onExit: PropTypes.func,
    onExiting: PropTypes.func,
    onExited: PropTypes.func,
    onEnter: PropTypes.func,
    onEntering: PropTypes.func,
    onEntered: PropTypes.func,
    onBackdropClick: PropTypes.func
  }

  static defaultProps = {
    onHide: () => {},
    hasBackdrop: true
  }

  constructor() {
    super()

    this.state = {
      exiting: false
    }
  }

  /**
   * Need to figure out what to do here.
   */
  onHide = () => {}

  handleHidden = (...args) => {
    this.setState({ exiting: false })
    this.onHide()

    if (this.props.onExited) {
      this.props.onExited(...args)
    }
  }

  handleBackdropClick = e => {
    if (e.target !== e.currentTarget) {
      return
    }

    this.setState({ exiting: true })

    if (this.props.onBackdropClick) {
      this.props.onBackdropClick(e)
    }

    if (this.props.hasBackdrop === true) {
      this.props.onHide()
    }
  }

  handleClose = () => {
    this.setState({ exiting: true })

    if (this.props.hasBackdrop === true) {
      this.props.onHide()
    }
  }

  render() {
    const {
      containerProps = {},
      isShown,
      children,
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
            <Box
              onClick={this.handleBackdropClick}
              position="fixed"
              top={0}
              left={0}
              right={0}
              bottom={0}
              zIndex={40}
              css={animationStyles}
              data-state={state}
              {...containerProps}
            >
              {typeof children === 'function'
                ? children({ state, close: this.handleClose })
                : children}
            </Box>
          )}
        </Transition>
      </Portal>
    )
  }
}

export default Overlay
