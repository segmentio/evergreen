import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { spacing, dimensions, position, layout } from 'ui-box'
import { withTheme } from '../../theme'
import { colors } from '../../colors'
import { Pane } from '../../layers'
import { Text } from '../../typography'
import { IconButton } from '../../buttons'
import { Icon } from '../../icon'

const AlertAppearances = {
  default: {
    boxShadow: `inset 0 0 0 1px ${colors.neutral['20A']}`
  },
  card: {
    elevation: 1,
    borderRadius: 3
  }
}

export default withTheme(
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
      intent: PropTypes.oneOf(['none', 'success', 'warning', 'danger', 'info'])
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

    getStyle = intent => ({
      '&:before': {
        content: '""',
        width: 3,
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: this.getColorForIntent(intent)
      }
    })

    getColorForIntent = intent => {
      const { theme } = this.props

      return theme.colors.intent[intent]
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

      let style = {}
      if (hasTrim && intent !== 'none') {
        style = this.getStyle(intent)
      }

      const appearanceProps = AlertAppearances[appearance]

      return (
        <Pane
          role="alert"
          backgroundColor="white"
          overflow="hidden"
          position="relative"
          display="flex"
          paddingY={12}
          paddingX={16}
          css={style}
          {...appearanceProps}
          {...props}
        >
          {hasIcon &&
            intent !== 'none' && (
              <Pane
                marginRight={10}
                marginLeft={2}
                height={14}
                display="block"
                marginTop={3}
              >
                {this.getIconForIntent(intent)}
              </Pane>
            )}
          <Pane display="flex" width="100%">
            <Pane flex={1}>
              <Text
                is="h4"
                fontWeight={600}
                size={400}
                marginTop={0}
                marginBottom={0}
              >
                {title}
              </Text>
              {typeof children === 'string' ? (
                <Text size={400} color="muted">
                  {children}
                </Text>
              ) : (
                children
              )}
            </Pane>
            {isRemoveable && (
              <Pane marginLeft={24} flexShrink={0}>
                <IconButton
                  onClick={onRemove}
                  height={24}
                  appearance="minimal"
                  icon="cross"
                />
              </Pane>
            )}
          </Pane>
        </Pane>
      )
    }
  }
)
