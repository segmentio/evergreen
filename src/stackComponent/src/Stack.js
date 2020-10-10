import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import { spacing, dimensions, position, layout } from 'ui-box'
import { Pane } from '../../layers'

const Stack = memo(
  forwardRef(function Stack(props, ref) {
    const { className, children, space, align, ...restProps } = props

    let justifyItems = align
    if (align === 'left') justifyItems = 'start'
    if (align === 'right') justifyItems = 'end'

    return (
      <Pane
        display="grid"
        rowGap={space}
        justifyItems={justifyItems}
        ref={ref}
        className={className}
        {...restProps}
      >
        {children}
      </Pane>
    )
  })
)

Stack.propTypes = {
  /**
   * Composes some Box APIs.
   */
  ...spacing.propTypes,
  ...position.propTypes,
  ...layout.propTypes,
  ...dimensions.propTypes,

  /**
   * The gap between each children.
   */
  space: PropTypes.number,

  /**
   * The alignement between each children.
   */
  align: PropTypes.string
}

export default Stack
