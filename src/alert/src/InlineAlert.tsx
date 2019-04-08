import * as PropTypes from 'prop-types'
import * as React from 'react'
import {
  dimensions,
  layout,
  position,
  spacing,
  TDimensions,
  TLayout,
  TPosition,
  TSpacing
} from 'ui-box'

import { IntentType } from '../../constants'
import { Icon } from '../../icon'
import { Pane } from '../../layers'
import { withTheme, PropsWithTheme } from '../../theme'
import { Text } from '../../typography'
import { TextSize } from '../../typography/src/Text'

type BoxProps = TDimensions & TLayout & TPosition & TSpacing

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
  static propTypes = {
    ...dimensions.propTypes,
    ...layout.propTypes,
    ...position.propTypes,
    ...spacing.propTypes,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    intent: PropTypes.oneOf(['none', 'success', 'warning', 'danger'])
      .isRequired as PropTypes.Validator<IntentType>,
    hasIcon: PropTypes.bool,
    size: PropTypes.number as PropTypes.Validator<TextSize>,
    theme: PropTypes.object.isRequired
  }

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
