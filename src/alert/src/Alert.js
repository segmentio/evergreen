import React, { memo, forwardRef } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { spacing, dimensions, position, layout } from 'ui-box'
import { Pane } from '../../layers'
import { Heading, Paragraph } from '../../typography'
import { IconButton } from '../../buttons'
import { CrossIcon } from '../../icons'
import useStyleConfig from '../../hooks/use-style-config'
import { getIconForIntent } from './getIconForIntent'

const pseudoSelectors = {}

const internalStyles = {
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  // 15 instead of 16 in order to maintain height with 1px border
  padding: '15px'
}

const Alert = memo(
  forwardRef(function Alert(props, ref) {
    const {
      children,
      appearance = 'default',
      className,
      hasIcon = true,
      intent = 'info',
      isRemoveable = false,
      onRemove,
      title,
      ...restProps
    } = props

    const intentToken = intent === 'none' ? 'info' : intent
    const { className: themedClassName, ...styleProps } = useStyleConfig(
      'Alert',
      { appearance, intent: intentToken },
      pseudoSelectors,
      internalStyles
    )

    return (
      <Pane
        ref={ref}
        className={cx(className, themedClassName)}
        role="alert"
        {...styleProps}
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
              // Get this from the theme / props on the Alert
              color="inherit"
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
