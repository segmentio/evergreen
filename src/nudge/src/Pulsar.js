import React, { memo } from 'react'
import { css } from 'glamor'
import PropTypes from 'prop-types'
import Positions from '../../constants/src/Position'
import { Pane } from '../../layers'
import { majorScale } from '../../scales'
import { useTheme } from '../../theme'

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

const getPositionProps = ({ position, size }) => {
  const keys = POSITION_KEYS[position]
  const props = {}

  keys.forEach(key => {
    const isYAxisKey = key === 'top' || key === 'bottom'

    if (isYAxisKey) {
      props[key] = -(size / 2)
    } else {
      props[key] = -size
    }
  })

  return props
}

export const Pulsar = memo(({ position = Positions.TOP_RIGHT, size = majorScale(1) }) => {
  const { colors } = useTheme()
  const positionProps = getPositionProps({ position, size })
  const outerPadding = size * 0.25

  return (
    <Pane
      position="absolute"
      borderRadius="50%"
      backgroundColor={colors.blue100}
      boxSizing="content-box"
      opacity={0.7}
      display="flex"
      alignItems="center"
      justifyContent="center"
      padding={outerPadding}
      className={pulsarAnimationClassName}
      {...positionProps}
    >
      <Pane width={size} height={size} backgroundColor={colors.blue200} borderRadius="50%" opacity={0.7} />
    </Pane>
  )
})

Pulsar.propTypes = {
  /**
   * The position of the pulsar
   */
  position: PropTypes.oneOf([Positions.TOP_LEFT, Positions.TOP_RIGHT, Positions.BOTTOM_LEFT, Positions.BOTTOM_RIGHT]),

  /**
   * The width/height of the dot
   */
  size: PropTypes.number
}
