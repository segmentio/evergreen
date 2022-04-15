import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import Positions from '../../constants/src/Position'
import { Pane } from '../../layers'
import warning from '../../lib/warning'
import { Popover } from '../../popover'
import { minorScale } from '../../scales'
import { Text } from '../../typography'
import { Pulsar } from './Pulsar'

export const Nudge = ({
  children,
  isShown = false,
  position = Positions.TOP_RIGHT,
  size,
  tooltipContent: tooltipContentProp,
  onClick
}) => {
  if (process.env.NODE_ENV !== 'production') {
    warning(true, '<Nudge> is deprecated and will be renamed to Pulsar in the next major version of Evergreen.')
  }

  const [isHovered, setIsHovered] = useState(false)
  const handleMouseEnter = useCallback(() => setIsHovered(true), [setIsHovered])
  const handleMouseLeave = useCallback(() => setIsHovered(false), [setIsHovered])

  const isTooltipContentString = typeof tooltipContentProp === 'string'
  const innerContent = isTooltipContentString ? <Text>{tooltipContentProp}</Text> : tooltipContentProp
  const tooltipContent = (
    <Pane maxWidth={240} padding={isTooltipContentString ? minorScale(2) : undefined}>
      {innerContent}
    </Pane>
  )

  return (
    <Popover
      content={tooltipContent}
      position={position}
      isShown={isShown && isHovered && !!tooltipContentProp}
      trigger="hover"
      onOpen={handleMouseEnter}
      maxWidth={240}
    >
      <Pane position="relative" onMouseLeave={handleMouseLeave}>
        {isShown && <Pulsar onClick={onClick} position={position} size={size} />}
        {children}
      </Pane>
    </Popover>
  )
}

Nudge.propTypes = {
  /**
   * The position for the Pulsar and the Tooltip
   */
  position: PropTypes.oneOf([Positions.TOP_LEFT, Positions.TOP_RIGHT, Positions.BOTTOM_LEFT, Positions.BOTTOM_RIGHT]),

  /**
   * Size of the Pulsar
   */
  size: Pulsar.propTypes.size,

  /**
   * Whether or not the Pulsar/Tooltip is shown
   */
  isShown: PropTypes.bool,

  /**
   * Content for the tooltip
   */
  tooltipContent: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

  /**
   * Content for the Pulsar/tooltip to be anchored to
   */
  children: PropTypes.node,

  /**
   * Called when the Pulsar is clicked
   */
  onClick: PropTypes.func
}
