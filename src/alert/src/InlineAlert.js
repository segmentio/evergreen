import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import { spacing, dimensions, position, layout } from 'ui-box'
import { Pane } from '../../layers'
import { Text } from '../../typography'
import { getIconForIntent } from './getIconForIntent'

const InlineAlert = memo(
  forwardRef(function InlineAlert(props, ref) {
    const {
      children,
      intent = 'none',
      hasIcon = true,
      size = 400,
      ...restProps
    } = props

    return (
      <Pane ref={ref} alignItems="center" display="flex" {...restProps}>
        {hasIcon && (
          <Pane display="inline" marginRight={8}>
            {getIconForIntent(intent, { size: 14, marginTop: 2 })}
          </Pane>
        )}
        <Text size={size} fontWeight={500}>
          {children}
        </Text>
      </Pane>
    )
  })
)

InlineAlert.propTypes = {
  /**
   * Composes some Box APIs.
   */
  ...spacing.propTypes,
  ...position.propTypes,
  ...layout.propTypes,
  ...dimensions.propTypes,

  /**
   * The content of the alert.
   */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  /**
   * The intent of the alert. This should always be set explicitly.
   */
  intent: PropTypes.oneOf(['none', 'success', 'warning', 'danger']),

  /**
   * When true, show a icon on the left matching the type.
   * There is no point not showing this.
   */
  hasIcon: PropTypes.bool,

  /**
   * The size of the Text.
   */
  size: PropTypes.number
}

export default InlineAlert
