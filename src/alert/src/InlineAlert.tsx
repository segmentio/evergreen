import React, { memo, forwardRef } from 'react'
import cx from 'classnames'
import { PolymorphicBoxProps } from 'ui-box'
import { Size } from '../../types'
import { useStyleConfig } from '../../hooks'
import { Pane } from '../../layers'
import { PaneOwnProps } from '../../layers/src/Pane'
import { Text } from '../../typography'
import { getIconForIntent } from './getIconForIntent'
import { IntentTypes } from '../../types/theme/intent-types'

export interface InlineAlertOwnProps extends PaneOwnProps {
  intent?: IntentTypes
  /**
   * When true, show a icon on the left matching the type,
   */
  hasIcon?: boolean
  /**
   * The size of the Text.
   */
  size?: Size
}

export type InlineAlertProps = PolymorphicBoxProps<'div', InlineAlertOwnProps>

const pseudoSelectors = {}

const internalStyles = {
  display: 'flex',
  alignItems: 'center'
}

const InlineAlert: React.FC<InlineAlertProps> = memo(
  forwardRef(function InlineAlert(props, ref) {
    const { children, className, hasIcon = true, intent = 'info', size = 400, ...restProps } = props

    const intentToken = intent === 'none' ? 'info' : intent
    const { className: themedClassName, ...styleProps } = useStyleConfig(
      'InlineAlert',
      { intent: intentToken },
      pseudoSelectors,
      internalStyles
    )

    return (
      <Pane ref={ref} className={cx(className, themedClassName)} {...styleProps} {...restProps}>
        {hasIcon && (
          <Pane display="flex" marginRight={16}>
            {getIconForIntent(intent, { size: 16 })}
          </Pane>
        )}
        <Text size={size} lineHeight={1} fontWeight={500} color="inherit">
          {children}
        </Text>
      </Pane>
    )
  })
)

export default InlineAlert
