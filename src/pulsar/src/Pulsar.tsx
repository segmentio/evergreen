import React, { memo } from 'react'
import { css } from 'glamor'
import Positions from '../../constants/src/Position'
import { Pane } from '../../layers'
import { PaneProps } from '../../layers/src/Pane'
import { majorScale } from '../../scales'
import { useTheme } from '../../theme'

export type PulsarPosition = Positions.TOP_LEFT | Positions.TOP_RIGHT | Positions.BOTTOM_LEFT | Positions.BOTTOM_RIGHT
export interface PulsarProps {
  /**
   * The position the Tooltip is on.
   */
  position?: PulsarPosition
  /**
   * The size of the pulsar
   */
  size?: number
  /**
   * Called when the Pulsar is clicked
   */
  onClick?: PaneProps['onClick']
}

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

const POSITION_KEYS: Record<PulsarPosition, string[]> = {
  [Positions.TOP_LEFT]: ['top', 'left'],
  [Positions.TOP_RIGHT]: ['top', 'right'],
  [Positions.BOTTOM_LEFT]: ['bottom', 'left'],
  [Positions.BOTTOM_RIGHT]: ['bottom', 'right']
}

const getPositionProps = ({ position, size }: Pick<PulsarProps, 'position' | 'size'>) => {
  const keys = POSITION_KEYS[position!]
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

export const Pulsar: React.FC<PulsarProps> = memo(
  ({ position = Positions.TOP_RIGHT, size = majorScale(1), onClick }) => {
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
        onClick={onClick}
        cursor={onClick ? 'pointer' : undefined}
        {...positionProps}
      >
        <Pane width={size} height={size} backgroundColor={colors.blue200} borderRadius="50%" opacity={0.7} />
      </Pane>
    )
  }
)
