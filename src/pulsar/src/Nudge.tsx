import React, { useCallback, useState } from 'react'
import { PositionTypes } from "../../.."
import Positions from '../../constants/src/Position'
import { Pane } from '../../layers'
import { PaneProps } from "../../layers/src/Pane"
import warning from '../../lib/warning'
import { Popover } from '../../popover'
import { minorScale } from '../../scales'
import { Text } from '../../typography'
import { Pulsar } from './Pulsar'

/** @deprecated This component will be renamed to Pulsar in the next major version of Evergreen */
export interface NudgeProps {
    /**
     * The position the Tooltip is on.
     */
    position?: Exclude<PositionTypes, 'top' | 'bottom' | 'left' | 'right'>;
    /**
     * The size of the Pulsar
     */
    size?: number;
    /**
     * The content of the Tooltip.
     */
    tooltipContent?: React.ReactNode | ((object: { close: () => void }) => React.ReactNode);
    /**
     * When true, manually show the Tooltip.
     */
    isShown?: boolean;
    /**
     * Called when the Pulsar is clicked
     */
    onClick?: PaneProps['onClick'];
}

export const Nudge: React.FC<NudgeProps> = ({
  children,
  isShown = false,
  position = Positions.TOP_RIGHT,
  size,
  tooltipContent: tooltipContentProp,
  onClick
}: any) => {
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
      // @ts-expect-error ts-migrate(2322) FIXME: Type '{ children: Element; content: Element; posit... Remove this comment to see the full error message
      maxWidth={240}
    >
      <Pane position="relative" onMouseLeave={handleMouseLeave}>
        {isShown && <Pulsar onClick={onClick} position={position} size={size} />}
        {children}
      </Pane>
    </Popover>
  )
}
