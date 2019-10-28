import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { spacing, dimensions, position, layout } from 'ui-box'
import { withTheme } from '../../theme'
import { Pane } from '../../layers'
import { Heading, Paragraph } from '../../typography'
import { IconButton } from '../../buttons'
import { Icon } from '../../icon'

class Alert extends PureComponent {
  static propTypes = {
    /**
     * Composes some Box APIs.
     */
    ...spacing.propTypes,
    ...position.propTypes,
    ...layout.propTypes,
    ...dimensions.propTypes,

    /**
     * The content of the alert. When a string is passed it is wrapped in a `<Text size={400} />` component.
     */
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

    /**
     * The intent of the alert.
     */
    intent: PropTypes.oneOf(['none', 'success', 'warning', 'danger'])
      .isRequired,

    /**
     * The title of the alert.
     */
    title: PropTypes.node,

    /**
     * When true, show a border on the left matching the type.
     */
    hasTrim: PropTypes.bool,

    /**
     * When true, show a icon on the left matching the type,
     */
    hasIcon: PropTypes.bool,

    /**
     * When true, show a remove icon button.
     */
    isRemoveable: PropTypes.bool,

    /**
     * Function called when the remove button is clicked.
     */
    onRemove: PropTypes.func,

    /**
     * The appearance of the alert.
     */
    appearance: PropTypes.oneOf(['default', 'card']),

    /**
     * Theme provided by ThemeProvider.
     */
    theme: PropTypes.object.isRequired
  }

  static defaultProps = {
    intent: 'none',
    hasTrim: true,
    hasIcon: true,
    isRemoveable: false,
    appearance: 'default'
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
            height={20}
            display="flex"
            alignItems="center"
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
