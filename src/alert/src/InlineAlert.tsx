import * as React from 'react'
import { BoxProps } from 'ui-box'

import { withTheme, PropsWithTheme } from '../../theme'
import { Pane } from '../../layers'
import { Text } from '../../typography'
import { Icon } from '../../icon'
import { IntentType } from '../../constants'
import { TextSize } from '../../typography/src/Text'

interface IProps extends BoxProps {
  // The content of the alert.
  children?: string | React.ReactNode

  // The intent of the alert. This should always be set explicitly.
  intent?: IntentType

  // When true, show a icon on the left matching the type. There is no point not showing this.
  hasIcon?: boolean

  // The size of the Text.
  size?: TextSize
}

class InlineAlert extends React.PureComponent<PropsWithTheme<IProps>> {
  static defaultProps = {
    intent: 'none' as IntentType,
    hasIcon: true,
    size: 400 as TextSize
  }

  getIconForIntent = (intent: IntentType) => {
    const { theme } = this.props

    return <Icon size={14} marginTop={2} {...theme.getIconForIntent(intent)} />
  }

  render() {
    const { theme, children, intent, hasIcon, size, ...props } = this.props

    return (
      <Pane alignItems="center" display="flex" {...props}>
        {hasIcon && (
          <Pane display="inline" marginRight={8}>
            {this.getIconForIntent(intent)}
          </Pane>
        )}
        <Text size={size} fontWeight={500}>
          {children}
        </Text>
      </Pane>
    )
  }
}

export default withTheme(InlineAlert)
