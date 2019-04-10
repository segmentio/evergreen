import * as PropTypes from 'prop-types'
import * as React from 'react'
import Box, { BoxProps } from 'ui-box'

import { IconButton } from '../../buttons'
import { IntentType } from '../../constants'
import { Icon } from '../../icon'
import { Pane } from '../../layers'
import { PropsWithTheme, withTheme } from '../../theme'

import { Heading, Paragraph } from '../../typography'

type Appearance = 'default' | 'card'

interface IProps extends Partial<BoxProps> {
  // The content of the alert. When a string is passed it is wrapped in a `<Text size={400} />` component.
  children?: string | React.ReactNode

  // The intent of the alert.
  intent?: IntentType

  // The title of the alert.
  title?: React.ReactNode

  // When true, show a border on the left matching the type.
  hasTrim?: boolean

  // When true, show a icon on the left matching the type,
  hasIcon?: boolean

  // When true, show a remove icon button.
  isRemoveable?: boolean

  // Function called when the remove button is clicked.
  onRemove?: (...args: any[]) => any

  // The appearance of the alert.
  appearance?: Appearance
}

class Alert extends React.PureComponent<PropsWithTheme<IProps>> {
  static propTypes = {
    ...Box.propTypes,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    intent: PropTypes.oneOf(['none', 'success', 'warning', 'danger'])
      .isRequired as PropTypes.Validator<IntentType>,
    title: PropTypes.node,
    hasTrim: PropTypes.bool,
    hasIcon: PropTypes.bool,
    isRemoveable: PropTypes.bool,
    onRemove: PropTypes.func,
    appearance: PropTypes.oneOf(['default', 'card']) as PropTypes.Validator<
      Appearance
    >,
    theme: PropTypes.object.isRequired
  }

  static defaultProps = {
    intent: 'none' as IntentType,
    hasTrim: true,
    hasIcon: true,
    isRemoveable: false,
    appearance: 'default' as Appearance
  }

  getIconForIntent = (intent: IntentType) => {
    const { theme } = this.props

    return <Icon size={14} {...theme.getIconForIntent(intent)} />
  }

  render() {
    const {
      theme,

      title,
      intent,
      hasTrim,
      hasIcon,
      children,
      appearance,
      isRemoveable,
      onRemove,
      ...props
    } = this.props

    // Note that Alert return a className and additional properties.
    const { className, ...themeProps } = theme.getAlertProps({
      appearance,
      intent,
      hasTrim
    })

    return (
      <Pane
        className={className}
        role="alert"
        backgroundColor="white"
        overflow="hidden"
        position="relative"
        display="flex"
        paddingY={12}
        paddingX={16}
        {...themeProps}
        {...props}
      >
        {hasIcon && (
          <Pane
            marginRight={10}
            marginLeft={2}
            height={14}
            display="block"
            marginTop={2}
          >
            {this.getIconForIntent(intent)}
          </Pane>
        )}
        <Pane display="flex" width="100%">
          <Pane flex={1}>
            <Heading
              is="h4"
              fontWeight={600}
              size={400}
              marginTop={0}
              marginBottom={0}
            >
              {title}
            </Heading>
            {typeof children === 'string' ? (
              <Paragraph size={400} color="muted">
                {children}
              </Paragraph>
            ) : (
              children
            )}
          </Pane>
          {isRemoveable && (
            <Pane
              marginLeft={24}
              flexShrink={0}
              marginBottom={-2}
              marginTop={-2}
              marginRight={-2}
            >
              <IconButton
                icon="cross"
                appearance="minimal"
                height={24}
                onClick={onRemove}
              />
            </Pane>
          )}
        </Pane>
      </Pane>
    )
  }
}

export default withTheme(Alert)
