import React, { memo, forwardRef } from 'react'
import { TooltipAppearance } from '../../..'
import { useStyleConfig } from '../../hooks'
import { Pane } from '../../layers'
import { PaneProps } from '../../layers/src/Pane'
import { Paragraph } from '../../typography'

export interface TooltipStatelessProps extends PaneProps {
  /**
   * The appearance of the tooltip.
   */
  appearance?: TooltipAppearance
}

const pseudoSelectors = {}
const internalStyles = {}

const TooltipStateless: React.FC<TooltipStatelessProps> = memo(
  forwardRef(function TooltipStateless(props, ref) {
    const { appearance, children, ...restProps } = props
    const { ...boxProps } = useStyleConfig('Tooltip', { appearance }, pseudoSelectors, internalStyles)

    const { color, ...themedProps } = boxProps

    let child
    if (typeof children === 'string') {
      child = (
        <Paragraph color={color} size={400}>
          {children}
        </Paragraph>
      )
    } else {
      child = children
    }

    return (
      <Pane ref={ref} {...themedProps} {...restProps}>
        {child}
      </Pane>
    )
  })
)

export default TooltipStateless
