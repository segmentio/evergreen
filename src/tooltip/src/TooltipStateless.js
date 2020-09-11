import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import { Pane } from '../../layers'
import { Paragraph } from '../../typography'
import useStyleConfig from '../../hooks/use-style-config'

const pseudoSelectors = {}
const internalStyles = {}

const TooltipStateless = memo(
  forwardRef(function TooltipStateless(props, ref) {
    const { children, appearance, ...restProps } = props
    const { ...boxProps } = useStyleConfig(
      'Tooltip',
      { appearance },
      pseudoSelectors,
      internalStyles
    )

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

TooltipStateless.propTypes = {
  children: PropTypes.node,

  /**
   * The appearance of the tooltip.
   */
  appearance: PropTypes.oneOf(['default', 'card']).isRequired
}

export default TooltipStateless
