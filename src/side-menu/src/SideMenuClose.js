import React, { PureComponent } from 'react'
import { css } from 'glamor'
import PropTypes from 'prop-types'
import Box from 'ui-box'
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
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.6)'
  },
  '&:active': {
    backgroundColor: 'rgba(255, 255, 255, 0.4)'
  }
}

const withAnimations = (animateIn, animateOut) => {
  return {
    '&[data-state="entering"], &[data-state="entered"]': {
      animation: `${animateIn} ${ANIMATION_DURATION}ms ${animationEasing.deceleration} both`
    },
    '&[data-state="exiting"]': {
      animation: `${animateOut} ${ANIMATION_DURATION}ms ${animationEasing.acceleration} both`
    }
  }
}

const sheetCloseStyles = {
  [Position.LEFT]: {
    marginRight: -12,
    right: 0,
    marginTop: 12,
    transform: 'translateX(100%)',
    ...withAnimations(
      css.keyframes('leftRotate360InAnimation', {
        from: { transform: 'translateX(-100%) rotate(0deg)' },
        to: { transform: 'translateX(100%), rotate(360deg)' }
      }),
      css.keyframes('leftRotate360OutAnimation', {
        from: { transform: 'translateX(100%) rotate(0deg)' },
        to: { transform: 'translateX(-100%), rotate(360deg)' }
      })
    )
  }
}

const sheetCloseClassNameCache = {}

const getSheetCloseClassName = position => {
  if (!sheetCloseClassNameCache[position]) {
    sheetCloseClassNameCache[position] = css({
      ...sheetCloseStyles[position],
      ...sharedStyles
    }).toString()
  }

  return sheetCloseClassNameCache[position]
}

export default class SideMenuClose extends PureComponent {
  static propTypes = {
    ...Box.propTypes,
    isClosing: PropTypes.bool,
    position: PropTypes.oneOf([Position.LEFT]).isRequired
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
        className={getSheetCloseClassName(position)}
        {...props}
      >
        <CrossIcon color="#fff" />
      </Box>
    )
  }
}
// export default SheetClose

