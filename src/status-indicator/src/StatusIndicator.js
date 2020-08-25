import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { Text } from '../../typography'
import { majorScale } from '../../scales'
import useIconColor from '../../theme/src/hooks/useIconColor'

const StatusIndicator = memo(
  forwardRef(function StatusIndicator(props, ref) {
    const {
      children,
      disabled,
      color = 'disabled',
      dotSize = 6,
      ...rest
    } = props
    const dotColor = useIconColor(color === 'none' ? 'disabled' : color)

    return (
      <Text display="inline-flex" alignItems="center" ref={ref} {...rest}>
        <Box
          flexShrink={0}
          marginRight={majorScale(1)}
          borderRadius="50%"
          height={dotSize}
          width={dotSize}
          background={dotColor}
        />
        {children}
      </Text>
    )
  })
)

StatusIndicator.propTypes = {
  /**
   * Composes the Text component as the base.
   */
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
