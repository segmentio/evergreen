import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import { spacing, dimensions, position, layout } from 'ui-box'
import { useTheme } from '../../theme'
import { Pane } from '../../layers'
import { Heading, Paragraph } from '../../typography'
import { IconButton } from '../../buttons'
import { CrossIcon } from '../../icons'
import useAlertApperance from '../../theme/src/hooks/useAlertApperance'
import { getIconForIntent } from './getIconForIntent'

const Alert = memo(
  forwardRef(function Alert(props, ref) {
    const {
      children,
      hasIcon = true,
      intent = 'info',
      isRemoveable = false,
      onRemove,
      title,
      ...restProps
    } = props

    const {
      tokens: { intents }
    } = useTheme()

    const intentToken = intent === 'none' ? 'info' : intent
    const className = useAlertApperance(intentToken)

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
        {...restProps}
      >
        <Pane flex={1}>
          <Pane display="flex" alignItems="center">
            {hasIcon && (
              <Pane
                marginRight={16}
                marginLeft={2}
                display="flex"
                alignItems="center"
              >
                {getIconForIntent(intentToken, { size: 16 })}
              </Pane>
            )}
            <Heading
              is="h4"
              size={400}
              marginTop={0}
              marginBottom={0}
              fontWeight={500}
              lineHeight={1}
              color={intents[intentToken].text}
            >
              {title}
            </Heading>
          </Pane>
          {typeof children === 'string' ? (
            <Paragraph
              size={400}
              color="muted"
              marginTop={8}
              lineHeight={1}
              paddingLeft={hasIcon ? 34 : 0}
            >
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
              intent={intentToken}
            />
          </Pane>
        )}
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
