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

const withAnimations = (animateIn: any, animateOut: any) => {
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
  [Position.RIGHT]: {
    left: 0,
    marginLeft: -12,
    marginTop: 12,
    transform: 'translateX(-100%)',
    ...withAnimations(
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'keyframes' does not exist on type 'typeo... Remove this comment to see the full error message
      css.keyframes('rotate360InAnimation', {
        from: { transform: 'translateX(100%) rotate(0deg)' },
        to: { transform: 'translateX(-100%) rotate(-360deg)' }
      }),
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'keyframes' does not exist on type 'typeo... Remove this comment to see the full error message
      css.keyframes('rotate360OutAnimation', {
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
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'keyframes' does not exist on type 'typeo... Remove this comment to see the full error message
      css.keyframes('leftRotate360InAnimation', {
        from: { transform: 'translateX(-100%) rotate(0deg)' },
        to: { transform: 'translateX(100%), rotate(360deg)' }
      }),
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'keyframes' does not exist on type 'typeo... Remove this comment to see the full error message
      css.keyframes('leftRotate360OutAnimation', {
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
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'keyframes' does not exist on type 'typeo... Remove this comment to see the full error message
      css.keyframes('topRotate360InAnimation', {
        from: { transform: 'translateY(-200%) rotate(0deg)' },
        to: { transform: 'translateY(0%), rotate(360deg)' }
      }),
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'keyframes' does not exist on type 'typeo... Remove this comment to see the full error message
      css.keyframes('topRotate360OutAnimation', {
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
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'keyframes' does not exist on type 'typeo... Remove this comment to see the full error message
      css.keyframes('bottomRotate360InAnimation', {
        from: { transform: 'translateY(200%) rotate(0deg)' },
        to: { transform: 'translateY(0%), rotate(360deg)' }
      }),
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'keyframes' does not exist on type 'typeo... Remove this comment to see the full error message
      css.keyframes('bottomRotate360OutAnimation', {
        from: { transform: 'translateY(0%) rotate(0deg)' },
        to: { transform: 'translateY(200%), rotate(360deg)' }
      })
    )
  }
}

const sheetCloseClassNameCache = {}

const getSheetCloseClassName = (position: any) => {
  // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
  if (!sheetCloseClassNameCache[position]) {
    // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    sheetCloseClassNameCache[position] = css({
      ...sheetCloseStyles[position],
      ...sharedStyles
    }).toString()
  }

  // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
  return sheetCloseClassNameCache[position]
}

export default class SheetClose extends PureComponent {
  static propTypes = {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type '<E ex... Remove this comment to see the full error message
    ...Box.propTypes,
    isClosing: PropTypes.bool,
    position: PropTypes.oneOf([Position.LEFT, Position.RIGHT, Position.TOP, Position.BOTTOM]).isRequired
  }

  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'isClosing' does not exist on type 'Reado... Remove this comment to see the full error message
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
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
        <CrossIcon color="#fff" />
      </Box>
    )
  }
}
