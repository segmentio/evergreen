import React, { memo, forwardRef } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { spacing, dimensions, position, layout } from 'ui-box'
import { useStyleConfig } from '../../hooks'
import { Pane } from '../../layers'
import { Text } from '../../typography'
import { getIconForIntent } from './getIconForIntent'

const pseudoSelectors = {}

const internalStyles = {
  display: 'flex',
  alignItems: 'center'
}

const InlineAlert = memo(
  forwardRef(function InlineAlert(props, ref) {
    // @ts-expect-error ts-migrate(2700) FIXME: Rest types may only be created from object types.
    const { children, className, hasIcon = true, intent = 'info', size = 400, ...restProps } = props

    // @ts-expect-error ts-migrate(2367) FIXME: This condition will always return 'false' since th... Remove this comment to see the full error message
    const intentToken = intent === 'none' ? 'info' : intent
    const { className: themedClassName, ...styleProps } = useStyleConfig(
      'InlineAlert',
      { intent: intentToken },
      pseudoSelectors,
      internalStyles
    )

    return (
      <Pane ref={ref} className={cx(className, themedClassName)} {...styleProps} {...restProps}>
        {hasIcon && (
          // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
          <Pane display="flex" marginRight={16}>
            {getIconForIntent(intent, { size: 16 })}
          </Pane>
        )}
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
        <Text size={size} lineHeight={1} fontWeight={500} color="inherit">
          {children}
        </Text>
      </Pane>
    )
  })
)

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
InlineAlert.propTypes = {
  /**
   * Composes some Box APIs.
   */
  ...spacing.propTypes,
  ...position.propTypes,
  ...layout.propTypes,
  ...dimensions.propTypes,

  /**
   * The content of the alert.
   */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  /**
   * The intent of the alert. This should always be set explicitly.
   */
  intent: PropTypes.string,

  /**
   * When true, show a icon on the left matching the type.
   * There is no point not showing this.
   */
  hasIcon: PropTypes.bool,

  /**
   * The size of the Text.
   */
  size: PropTypes.number
}

export default InlineAlert
