import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import { spacing, dimensions, position, layout } from 'ui-box'
import { IconButton } from '../../buttons'
import { useStyleConfig } from '../../hooks'
import { CrossIcon } from '../../icons'
import { Pane } from '../../layers'
import { Heading, Paragraph } from '../../typography'
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
      appearance = 'default',
      children,
      className,
      hasIcon = true,
      intent = 'info',
      isRemoveable = false,
      onRemove,
      title,
      ...restProps
    } = props

    const intentToken = intent === 'none' ? 'info' : intent
    const themedProps = useStyleConfig('Alert', { appearance, intent: intentToken }, pseudoSelectors, internalStyles)

    return (
      <Pane ref={ref} className={className} role="alert" {...themedProps} {...restProps}>
        {hasIcon && (
          <Pane marginRight={16} marginLeft={2} marginTop={-1} display="flex" alignItems="flex-start">
            {getIconForIntent(intentToken, { size: 16 })}
          </Pane>
        )}
        <Pane flex={1}>
          {title && (
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
          )}
          {typeof children === 'string' ? (
            <Paragraph size={400} color="muted" marginTop={title ? 8 : 0} lineHeight={1}>
              {children}
            </Paragraph>
          ) : (
            <Pane>{children}</Pane>
          )}
        </Pane>
        {isRemoveable && (
          <Pane marginLeft={24} flexShrink={0} marginBottom={-4} marginTop={-5} marginRight={-4}>
            <IconButton icon={CrossIcon} appearance="minimal" height={24} onClick={onRemove} intent={intentToken} />
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
  intent: PropTypes.string,

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
