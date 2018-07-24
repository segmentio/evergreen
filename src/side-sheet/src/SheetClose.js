import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { css } from 'glamor'
import { Icon } from '../../icon'

const animationEasing = {
  deceleration: `cubic-bezier(0.0, 0.0, 0.2, 1)`,
  acceleration: `cubic-bezier(0.4, 0.0, 1, 1)`
}

const ANIMATION_DURATION = 240

const sharedStyles = {
  padding: 4,
  borderRadius: 9999,
  position: 'absolute',
  cursor: 'pointer',
  backgroundColor: `rgba(255, 255, 255, 0.4)`,
  transition: `background-color 120ms`,
  '&:hover': {
    backgroundColor: `rgba(255, 255, 255, 0.6)`
  },
  '&:active': {
    backgroundColor: `rgba(255, 255, 255, 0.4)`
  }
}

const withAnimations = (animateIn, animateOut) => {
  return {
    '&[data-state="entering"], &[data-state="entered"]': {
      animation: `${animateIn} ${ANIMATION_DURATION}ms ${
        animationEasing.deceleration
      } both`
    },
    '&[data-state="exiting"]': {
      animation: `${animateOut} ${ANIMATION_DURATION}ms ${
        animationEasing.acceleration
      } both`
    }
  }
}

const sheetCloseStyles = {
  right: {
    left: 0,
    marginLeft: -12,
    marginTop: 12,
    transform: `translateX(-100%)`,
    ...withAnimations(
      css.keyframes('rotate360InAnimation', {
        from: { transform: `translateX(100%) rotate(0deg)` },
        to: { transform: `translateX(-100%) rotate(-360deg)` }
      }),
      css.keyframes('rotate360OutAnimation', {
        from: { transform: `translateX(-100%) rotate(0deg)` },
        to: { transform: `translateX(100%) rotate(360deg)` }
      })
    )
  },
  left: {
    marginRight: -12,
    right: 0,
    marginTop: 12,
    transform: `translateX(100%)`,
    ...withAnimations(
      css.keyframes('leftRotate360InAnimation', {
        from: { transform: `translateX(-100%) rotate(0deg)` },
        to: { transform: `translateX(100%), rotate(360deg)` }
      }),
      css.keyframes('leftRotate360OutAnimation', {
        from: { transform: `translateX(100%) rotate(0deg)` },
        to: { transform: `translateX(-100%), rotate(360deg)` }
      })
    )
  },
  top: {
    right: 0,
    marginRight: 12,
    top: '100%',
    marginTop: 12,
    transform: `translateY(0)`,
    ...withAnimations(
      css.keyframes('topRotate360InAnimation', {
        from: { transform: `translateY(-200%) rotate(0deg)` },
        to: { transform: `translateY(0%), rotate(360deg)` }
      }),
      css.keyframes('topRotate360OutAnimation', {
        from: { transform: `translateY(0%) rotate(0deg)` },
        to: { transform: `translateY(-200%), rotate(360deg)` }
      })
    )
  },
  bottom: {
    right: 0,
    marginRight: 12,
    bottom: '100%',
    marginBottom: 12,
    transform: `translateY(0)`,
    ...withAnimations(
      css.keyframes('topRotate360InAnimation', {
        from: { transform: `translateY(200%) rotate(0deg)` },
        to: { transform: `translateY(0%), rotate(360deg)` }
      }),
      css.keyframes('topRotate360OutAnimation', {
        from: { transform: `translateY(0%) rotate(0deg)` },
        to: { transform: `translateY(200%), rotate(360deg)` }
      })
    )
  }
}

const sheetCloseClassName = anchor =>
  css({
    ...sheetCloseStyles[anchor],
    ...sharedStyles
  })

export default class SheetClose extends PureComponent {
  static propTypes = {
    ...Box.propTypes,
    isClosing: PropTypes.bool,
    anchor: PropTypes.oneOf(['left', 'right', 'top', 'bottom'])
  }

  render() {
    const { isClosing, anchor, ...props } = this.props
    return (
      <Box
        width={32}
        height={32}
        display="flex"
        alignItems="center"
        justifyContent="center"
        className={sheetCloseClassName(anchor).toString()}
        {...props}
      >
        <Icon icon="cross" color="#fff" />
      </Box>
    )
  }
}
