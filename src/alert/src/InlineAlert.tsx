import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { withTheme, Theme } from '../../theme'
import { Pane } from '../../layers'
import { Text } from '../../typography'
import { Icon } from '../../icon'
import { TextProps } from '../../typography/src/Text'

type Intent = 'none' | 'success' | 'warning' | 'danger'

interface InlineAlertProps extends React.ComponentProps<typeof Box> {
  /**
   * The content of the alert. When a string is passed it is wrapped in a `<Text size={400} />` component.
   */
  children?: React.ReactNode

  /**
   * When true, show a icon on the left matching the type,
   */
  hasIcon?: boolean

  /**
   * The intent of the alert.
   */
  intent: Intent

  /**
   * The size of the Text.
   */
  size?: TextProps['size']

  /**
   * Theme provided by ThemeProvider.
   */
  theme: Theme
}

class InlineAlert extends PureComponent<InlineAlertProps> {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    hasIcon: PropTypes.bool,
    intent: PropTypes.oneOf(['none', 'success', 'warning', 'danger'])
      .isRequired as PropTypes.Validator<Intent>,
    size: PropTypes.number as PropTypes.Validator<TextProps['size']>,
    theme: PropTypes.object.isRequired as PropTypes.Validator<Theme>
  }

  static defaultProps: Partial<InlineAlertProps> = {
    intent: 'none',
    hasIcon: true,
    size: 400
  }

  getIconForIntent = intent => {
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
