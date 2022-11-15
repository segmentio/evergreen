import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Box, { keyframes } from 'ui-box'
import { Position } from '../../constants'
import { CrossIcon } from '../../icons'

const animationEasing = {
  deceleration: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
  acceleration: 'cubic-bezier(0.4, 0.0, 1, 1)'
}

const ANIMATION_DURATION = 240

const sharedStyles = {
  padding: 4,
  borderRadius: 9999,
  position: 'absolute',
  cursor: 'pointer',
  backgroundColor: 'rgba(255, 255, 255, 0.4)',
  transition: 'background-color 120ms',
  selectors: {
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.6)'
    },
    '&:active': {
      backgroundColor: 'rgba(255, 255, 255, 0.4)'
    }
  }
}

const withAnimations = (animateIn, animateOut) => {
  const enterAnimation = {
    animation: `${animateIn} ${ANIMATION_DURATION}ms ${animationEasing.deceleration} both`
  }
  return {
    selectors: {
      '&[data-state="entering"]': enterAnimation,
      '&[data-state="entered"]': enterAnimation,
      '&[data-state="exiting"]': {
        animation: `${animateOut} ${ANIMATION_DURATION}ms ${animationEasing.acceleration} both`
      }
    }
  }
}

const sheetCloseStyles = {
  [Position.RIGHT]: {
    left: 0,
    marginLeft: -12,
    marginTop: 12,
    transform: 'translateX(-100%)',
    ...withAnimations(
      keyframes('rotate360InAnimation', {
        from: { transform: 'translateX(100%) rotate(0deg)' },
        to: { transform: 'translateX(-100%) rotate(-360deg)' }
      }),
      keyframes('rotate360OutAnimation', {
        from: { transform: 'translateX(-100%) rotate(0deg)' },
        to: { transform: 'translateX(100%) rotate(360deg)' }
      })
    )
  },
  [Position.LEFT]: {
    marginRight: -12,
    right: 0,
    marginTop: 12,
    transform: 'translateX(100%)',
    ...withAnimations(
      keyframes('leftRotate360InAnimation', {
        from: { transform: 'translateX(-100%) rotate(0deg)' },
        to: { transform: 'translateX(100%), rotate(360deg)' }
      }),
      keyframes('leftRotate360OutAnimation', {
        from: { transform: 'translateX(100%) rotate(0deg)' },
        to: { transform: 'translateX(-100%), rotate(360deg)' }
      })
    )
  },
  [Position.TOP]: {
    right: 0,
    marginRight: 12,
    top: '100%',
    marginTop: 12,
    transform: 'translateY(0)',
    ...withAnimations(
      keyframes('topRotate360InAnimation', {
        from: { transform: 'translateY(-200%) rotate(0deg)' },
        to: { transform: 'translateY(0%), rotate(360deg)' }
      }),
      keyframes('topRotate360OutAnimation', {
        from: { transform: 'translateY(0%) rotate(0deg)' },
        to: { transform: 'translateY(-200%), rotate(360deg)' }
      })
    )
  },
  [Position.BOTTOM]: {
    right: 0,
    marginRight: 12,
    bottom: '100%',
    marginBottom: 12,
    transform: 'translateY(0)',
    ...withAnimations(
      keyframes('bottomRotate360InAnimation', {
        from: { transform: 'translateY(200%) rotate(0deg)' },
        to: { transform: 'translateY(0%), rotate(360deg)' }
      }),
      keyframes('bottomRotate360OutAnimation', {
        from: { transform: 'translateY(0%) rotate(0deg)' },
        to: { transform: 'translateY(200%), rotate(360deg)' }
      })
    )
  }
}

export default class SheetClose extends PureComponent {
  static propTypes = {
    ...Box.propTypes,
    isClosing: PropTypes.bool,
    position: PropTypes.oneOf([Position.LEFT, Position.RIGHT, Position.TOP, Position.BOTTOM]).isRequired
  }

  render() {
    const { isClosing, position, ...props } = this.props
    return (
      <Box
        width={32}
        height={32}
        display="flex"
        alignItems="center"
        justifyContent="center"
        {...sheetCloseStyles[position]}
        {...sharedStyles}
        {...props}
      >
        <CrossIcon color="#fff" />
      </Box>
    )
  }
}
