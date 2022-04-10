import React, { memo, forwardRef } from 'react'
import cx from 'classnames'
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
      // @ts-expect-error ts-migrate(2700) FIXME: Rest types may only be created from object types.
      ...restProps
    } = props

    // @ts-expect-error ts-migrate(2367) FIXME: This condition will always return 'false' since th... Remove this comment to see the full error message
    const intentToken = intent === 'none' ? 'info' : intent
    const { className: themedClassName, ...styleProps } = useStyleConfig(
      'Alert',
      { appearance, intent: intentToken },
      pseudoSelectors,
      // @ts-expect-error ts-migrate(2345) FIXME: Argument of type '{ position: string; overflow: st... Remove this comment to see the full error message
      internalStyles
    )

    return (
      <Pane ref={ref} className={cx(className, themedClassName)} role="alert" {...styleProps} {...restProps}>
        {hasIcon && (
          /* @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message */
          <Pane marginRight={16} marginLeft={2} marginTop={-1} display="flex" alignItems="flex-start">
            {getIconForIntent(intentToken, { size: 16 })}
          </Pane>
        )}
        {/* @ts-expect-error ts-migrate(2746) FIXME: This JSX tag's 'children' prop expects a single ch... Remove this comment to see the full error message */}
        <Pane flex={1}>
          {title && (
            <Heading
              // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
              is="h4"
              // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
              size={400}
              // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
              marginTop={0}
              // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
              marginBottom={0}
              // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
              fontWeight={500}
              // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
              lineHeight={1}
              // Get this from the theme / props on the Alert
              // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
              color="inherit"
            >
              {title}
            </Heading>
          )}
          {typeof children === 'string' ? (
            /* @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'. */
            <Paragraph size={400} color="muted" marginTop={title ? 8 : 0} lineHeight={1}>
              {children}
            </Paragraph>
          ) : (
            <Pane>{children}</Pane>
          )}
        </Pane>
        {isRemoveable && (
          /* @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message */
          <Pane marginLeft={24} flexShrink={0} marginBottom={-2} marginTop={-4} marginRight={-4}>
            {/* @ts-expect-error ts-migrate(2322) FIXME: Type 'MemoExoticComponent<ForwardRefExoticComponen... Remove this comment to see the full error message */}
            <IconButton icon={CrossIcon} appearance="minimal" height={24} onClick={onRemove} intent={intentToken} />
          </Pane>
        )}
      </Pane>
    )
  })
)

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
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
