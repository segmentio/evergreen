import React from 'react'
import PropTypes from 'prop-types'
import Positions from '../../constants/src/Position'
import { Pane } from '../../layers'
import { Tooltip } from '../../tooltip'
import { Pulsar } from './Pulsar'

export const Nudge = ({ children, isShown = false, position = Positions.TOP_RIGHT, size, tooltipContent }) => {
  return (
    <Tooltip content={tooltipContent} position={position} isShown={isShown ? undefined : false}>
      <Pane position="relative">
        {isShown && <Pulsar position={position} size={size} />}
        {children}
      </Pane>
    </Tooltip>
  )
}

Nudge.propTypes = {
  /**
   * The position for the Puslar and the Tooltip
   */
  position: PropTypes.oneOf([Positions.TOP_LEFT, Positions.TOP_RIGHT, Positions.BOTTOM_LEFT, Positions.BOTTOM_RIGHT]),

  /**
   * Size of the Pulsar
   */
  size: Pulsar.propTypes.size,

  /**
   * Wether or not the Pulsar/Tooltip is shown
   */
  isShown: PropTypes.bool,

  /**
   * Content for the tooltip
   */
  tooltipContent: Tooltip.propTypes.content,

  /**
   * Content for the pulsar/tooltip to be anchored too
   */
  children: PropTypes.node
}
