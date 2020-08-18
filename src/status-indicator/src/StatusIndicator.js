import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { Text } from '../../typography'
import useTheme from '../../theme/src/useTheme'

const StatusIndicator = memo(
  forwardRef(function StatusIndicator(props, ref) {
    const { children, disabled, intent = 'info', ...rest } = props
    const { tokens } = useTheme()

    const intentKey = intent === 'none' ? 'info' : intent
    let dotColor = tokens.intents[intentKey].icon

    if (disabled) {
      dotColor = tokens.states.disabled.icon
    }

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
   * When true, the status hint is disabled.
   */
  disabled: PropTypes.bool,

  /**
   * The intent of the status hint.
   */
  intent: PropTypes.oneOf(['none', 'info', 'success', 'warning', 'danger'])
}

export default StatusIndicator
