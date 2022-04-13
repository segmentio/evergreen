import React, { memo, forwardRef } from 'react'
import { PolymorphicBoxProps } from 'ui-box'
import { IntentTypes } from '../../..'
import { SymbolCircleIcon } from '../../icons'
import { majorScale } from '../../scales'
import { Text } from '../../typography'
import { TextOwnProps } from '../../typography/src/Text'

export interface StatusIndicatorOwnProps extends TextOwnProps {
  disabled?: boolean
  color?: IntentTypes | string
  dotSize?: number
}

export type StatusIndicatorProps = PolymorphicBoxProps<'span', StatusIndicatorOwnProps>

const StatusIndicator: React.FC<StatusIndicatorProps> = memo(
  forwardRef(function StatusIndicator(props, ref) {
    const { children, color = 'disabled', dotSize = 10, ...rest } = props

    return (
      <Text display="inline-flex" alignItems="center" ref={ref} {...rest}>
        <SymbolCircleIcon flexShrink={0} marginRight={majorScale(1)} size={dotSize} color={color} />
        {children}
      </Text>
    )
  })
)

export default StatusIndicator
