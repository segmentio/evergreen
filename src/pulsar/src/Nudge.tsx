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
}: any) => {
  // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'process'. Do you need to install... Remove this comment to see the full error message
  if (process.env.NODE_ENV !== 'production') {
    warning(true, '<Nudge> is deprecated and will be renamed to Pulsar in the next major version of Evergreen.')
  }

  const [isHovered, setIsHovered] = useState(false)
  const handleMouseEnter = useCallback(() => setIsHovered(true), [setIsHovered])
  const handleMouseLeave = useCallback(() => setIsHovered(false), [setIsHovered])

  const isTooltipContentString = typeof tooltipContentProp === 'string'
  // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
  const innerContent = isTooltipContentString ? <Text>{tooltipContentProp}</Text> : tooltipContentProp
  const tooltipContent = (
    // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
    <Pane maxWidth={240} padding={isTooltipContentString ? minorScale(2) : undefined}>
      {innerContent}
    </Pane>
  )

  return (
    // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
    <Popover
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'Element' is not assignable to type 'never'.
      content={tooltipContent}
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
      position={position}
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
      isShown={isShown && isHovered && !!tooltipContentProp}
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
      trigger="hover"
      // @ts-expect-error ts-migrate(2322) FIXME: Type '() => void' is not assignable to type 'never... Remove this comment to see the full error message
      onOpen={handleMouseEnter}
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
      maxWidth={240}
    >
      {/* @ts-expect-error ts-migrate(2746) FIXME: This JSX tag's 'children' prop expects a single ch... Remove this comment to see the full error message */}
      <Pane position="relative" onMouseLeave={handleMouseLeave}>
        {/* @ts-expect-error ts-migrate(2322) FIXME: Type '{ onClick: any; position: any; size: any; }'... Remove this comment to see the full error message */}
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
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'Named... Remove this comment to see the full error message
  size: Pulsar.propTypes.size,

  /**
   * Wether or not the Pulsar/Tooltip is shown
   */
  isShown: PropTypes.bool,

  /**
   * Content for the tooltip
   */
  tooltipContent: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

  /**
   * Content for the pulsar/tooltip to be anchored too
   */
  children: PropTypes.node,

  /**
   * Called when the Pulsar is clicked
   */
  onClick: PropTypes.func
}
