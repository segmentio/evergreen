import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { withTheme, Theme } from '../../theme'
import { Pane } from '../../layers'
import { Heading, Paragraph } from '../../typography'
import { IconButton } from '../../buttons'
import { Icon } from '../../icon'

type Appearance = 'default' | 'card'
type Intent = 'none' | 'success' | 'warning' | 'danger'

interface AlertProps extends React.ComponentProps<typeof Box> {
  /**
   * The appearance of the alert.
   */
  appearance: Appearance

  /**
   * The content of the alert. When a string is passed it is wrapped in a `<Text size={400} />` component.
   */
  children?: React.ReactNode

  /**
   * When true, show a icon on the left matching the type,
   */
  hasIcon?: boolean

  /**
   * When true, show a border on the left matching the type.
   */
  hasTrim?: boolean

  /**
   * The intent of the alert.
   */
  intent: Intent

  /**
   * When true, show a remove icon button.
   */
  isRemoveable?: boolean

  /**
   * Function called when the remove button is clicked.
   */
  onRemove?: () => void

  /**
   * Theme provided by ThemeProvider.
   */
  theme: Theme

  /**
   * The title of the alert.
   */
  title?: React.ReactNode
}

class Alert extends PureComponent<AlertProps> {
  static propTypes = {
    appearance: PropTypes.oneOf(['default', 'card']) as PropTypes.Validator<
      Appearance
    >,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    hasIcon: PropTypes.bool,
    hasTrim: PropTypes.bool,
    intent: PropTypes.oneOf(['none', 'success', 'warning', 'danger'])
      .isRequired as PropTypes.Validator<Intent>,
    isRemoveable: PropTypes.bool,
    onRemove: PropTypes.func,
    theme: PropTypes.object.isRequired as PropTypes.Validator<Theme>,
    title: PropTypes.node
  }

  static defaultProps: Partial<AlertProps> = {
    appearance: 'default',
    hasIcon: true,
    hasTrim: true,
    intent: 'none',
    isRemoveable: false
  }

  getIconForIntent = intent => {
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

    /**
     * Note that Alert return a className and additional properties.
     */
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
