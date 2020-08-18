import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { Text } from '../../typography'
import useIconColor from '../../theme/src/hooks/useIconColor'

const StatusIndicator = memo(
  forwardRef(function StatusIndicator(props, ref) {
    const { children, disabled, color = 'info', ...rest } = props
    const dotColor = useIconColor(color === 'none' ? 'info' : color)

    return (
      <Text display="inline-flex" alignItems="center" ref={ref} {...rest}>
        <Box
          flexShrink={0}
          marginRight={8}
          borderRadius="50%"
          height={7}
          width={7}
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
  color: PropTypes.string
}

export default StatusIndicator
