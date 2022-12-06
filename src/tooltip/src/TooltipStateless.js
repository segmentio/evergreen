import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import { useStyleConfig } from '../../hooks'
import { Pane } from '../../layers'
import { Paragraph } from '../../typography'

const pseudoSelectors = {}
const internalStyles = {}

const TooltipStateless = memo(
  forwardRef(function TooltipStateless(props, ref) {
    const { appearance, children, ...restProps } = props
    const { color, ...themedProps } = useStyleConfig('Tooltip', { appearance }, pseudoSelectors, internalStyles)

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
