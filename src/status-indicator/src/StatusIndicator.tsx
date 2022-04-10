import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import { SymbolCircleIcon } from '../../icons'
import { majorScale } from '../../scales'
import { Text } from '../../typography'

const StatusIndicator = memo(
  forwardRef(function StatusIndicator(props, ref) {
    // @ts-expect-error ts-migrate(2700) FIXME: Rest types may only be created from object types.
    const { children, color = 'disabled', disabled, dotSize = 10, ...rest } = props

    return (
      <Text display="inline-flex" alignItems="center" ref={ref} {...rest}>
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
        <SymbolCircleIcon flexShrink={0} marginRight={majorScale(1)} size={dotSize} color={color} />
        {children}
      </Text>
    )
  })
)

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
StatusIndicator.propTypes = {
  /**
   * Composes the Text component as the base.
   */
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
  ...Text.propTypes,

  /**
   * The label of the status hint.
   */
  children: PropTypes.node,

  /**
   * The color of the status hint. Can be an intent or hex value.
   */
  color: PropTypes.string,

  /**
   * The size of the dot to the left of the text
   */
  dotSize: PropTypes.number
}

export default StatusIndicator
