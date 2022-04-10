import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import { useStyleConfig } from '../../hooks'
import { Pane } from '../../layers'
import { Paragraph } from '../../typography'

const pseudoSelectors = {}
const internalStyles = {}

const TooltipStateless = memo(
  forwardRef(function TooltipStateless(props, ref) {
    // @ts-expect-error ts-migrate(2700) FIXME: Rest types may only be created from object types.
    const { appearance, children, ...restProps } = props
    const { ...boxProps } = useStyleConfig('Tooltip', { appearance }, pseudoSelectors, internalStyles)

    const { color, ...themedProps } = boxProps

    let child
    if (typeof children === 'string') {
      child = (
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'number | false | Color | null | undefined' i... Remove this comment to see the full error message
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

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
TooltipStateless.propTypes = {
  children: PropTypes.node,

  /**
   * The appearance of the tooltip.
   */
  appearance: PropTypes.oneOf(['default', 'card']).isRequired
}

export default TooltipStateless
