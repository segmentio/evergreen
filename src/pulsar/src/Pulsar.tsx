import React, { memo } from 'react'
import { css } from 'glamor'
import PropTypes from 'prop-types'
import Positions from '../../constants/src/Position'
import { Pane } from '../../layers'
import { majorScale } from '../../scales'
import { useTheme } from '../../theme'

// @ts-expect-error ts-migrate(2339) FIXME: Property 'keyframes' does not exist on type 'typeo... Remove this comment to see the full error message
const pulseAnimation = css.keyframes('pulseAnimation', {
  '0%': {
    transform: 'scale(1)'
  },
  '50%': {
    transform: 'scale(1.9)'
  },
  '100%': {
    transform: 'scale(1)'
  }
})

const animationTiming = 'cubic-bezier(0, 0, 0.58, 1)'
const animationDuration = '1.8s'

const pulsarAnimationClassName = css({
  animation: `${pulseAnimation} ${animationDuration} ${animationTiming} both infinite`
}).toString()

const POSITION_KEYS = {
  [Positions.TOP_LEFT]: ['top', 'left'],
  [Positions.TOP_RIGHT]: ['top', 'right'],
  [Positions.BOTTOM_LEFT]: ['bottom', 'left'],
  [Positions.BOTTOM_RIGHT]: ['bottom', 'right']
}

const getPositionProps = ({
  position,
  size
}: any) => {
  const keys = POSITION_KEYS[position]
  const props = {}

  keys.forEach(key => {
    const isYAxisKey = key === 'top' || key === 'bottom'

    if (isYAxisKey) {
      // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
      props[key] = -(size / 2)
    } else {
      // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
      props[key] = -size
    }
  })

  return props
}

// @ts-expect-error ts-migrate(2339) FIXME: Property 'position' does not exist on type '{ chil... Remove this comment to see the full error message
export const Pulsar = memo(({ position = Positions.TOP_RIGHT, size = majorScale(1), onClick }) => {
  const { colors } = useTheme()
  const positionProps = getPositionProps({ position, size })
  const outerPadding = size * 0.25

  return (
    // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
    <Pane
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
      position="absolute"
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
      borderRadius="50%"
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
      backgroundColor={colors.blue100}
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
      boxSizing="content-box"
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
      opacity={0.7}
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
      display="flex"
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
      alignItems="center"
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
      justifyContent="center"
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
      padding={outerPadding}
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
      className={pulsarAnimationClassName}
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
      onClick={onClick}
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'string | undefined' is not assignable to typ... Remove this comment to see the full error message
      cursor={onClick ? 'pointer' : undefined}
      {...positionProps}
    >
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
      <Pane width={size} height={size} backgroundColor={colors.blue200} borderRadius="50%" opacity={0.7} />
    </Pane>
  )
})

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'Named... Remove this comment to see the full error message
Pulsar.propTypes = {
  /**
   * The position of the pulsar
   */
  position: PropTypes.oneOf([Positions.TOP_LEFT, Positions.TOP_RIGHT, Positions.BOTTOM_LEFT, Positions.BOTTOM_RIGHT]),

  /**
   * The width/height of the dot
   */
  size: PropTypes.number,

  /**
   * Called when the Pulsar is clicked
   */
  onClick: PropTypes.func
}
