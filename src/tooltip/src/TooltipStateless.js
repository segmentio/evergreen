import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import { Pane } from '../../layers'
import { Paragraph } from '../../typography'
import useTooltipStyle from '../../theme/src/hooks/useTooltipStyle'

const TooltipStateless = memo(
  forwardRef(function TooltipStateless(props, ref) {
    const { children, appearance, ...restProps } = props
    console.log(appearance)
    const { color, ...themedProps } = useTooltipStyle(appearance)

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
      <Pane
        ref={ref}
        borderRadius={8}
        maxWidth={240}
        {...themedProps}
        {...restProps}
      >
        {child}
      </Pane>
    )
  })
)

TooltipStateless.propTypes = {
  children: PropTypes.node,

  /**
   * The appearance of the tooltip.
   */
  appearance: PropTypes.oneOf(['default', 'card']).isRequired
}

export default TooltipStateless
