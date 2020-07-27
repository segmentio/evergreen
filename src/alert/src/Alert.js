import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import { spacing, dimensions, position, layout } from 'ui-box'
import { useTheme } from '../../theme'
import { Pane } from '../../layers'
import { Heading, Paragraph } from '../../typography'
import { IconButton } from '../../buttons'
import { CrossIcon } from '../../icons'
import { getIconForIntent } from './getIconForIntent'

const Alert = memo(
  forwardRef(function Alert(props, ref) {
    const {
      appearance = 'default',
      children,
      hasIcon = true,
      hasTrim = true,
      intent = 'none',
      isRemoveable = false,
      onRemove,
      title,
      ...restProps
    } = props

    const theme = useTheme()

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
        ref={ref}
        className={className}
        role="alert"
        backgroundColor="white"
        overflow="hidden"
        position="relative"
        display="flex"
        paddingY={12}
        paddingX={16}
        {...themeProps}
        {...restProps}
      >
        {hasIcon && (
          <Pane
            marginRight={10}
            marginLeft={2}
            height={20}
            display="flex"
            alignItems="center"
          >
            {getIconForIntent(intent, { size: 14 })}
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
                icon={CrossIcon}
                appearance="minimal"
                height={24}
                onClick={onRemove}
              />
            </Pane>
          )}
        </Pane>
      </Pane>
    )
  })
)

Alert.propTypes = {
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
  intent: PropTypes.oneOf(['none', 'success', 'warning', 'danger']),

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
  appearance: PropTypes.oneOf(['default', 'card'])
}

export default Alert
