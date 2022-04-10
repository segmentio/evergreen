import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import { dimensions, spacing, position, layout } from 'ui-box'
import { useStyleConfig } from '../../hooks'
import { IconWrapper } from '../../icons/src/IconWrapper'
import Button, { getIconSizeForButton, internalStyles, pseudoSelectors } from './Button'

const IconButton = memo(
  forwardRef(function IconButton(props, ref) {
    // @ts-expect-error ts-migrate(2700) FIXME: Rest types may only be created from object types.
    const { icon, iconSize, ...restProps } = props

    // modifiers
    const { appearance, intent = 'none', size = 'medium' } = props

    // Composes the exact same styles as button
    // @ts-expect-error ts-migrate(2345) FIXME: Argument of type '{ position: string; fontWeight: ... Remove this comment to see the full error message
    const styleProps = useStyleConfig('Button', { appearance, intent, size }, pseudoSelectors, internalStyles)

    const height = restProps.height || styleProps.height
    const relativeIconSize = getIconSizeForButton(height)

    return (
      <Button
        ref={ref}
        paddingLeft={0}
        paddingRight={0}
        flex="none"
        height={height}
        width={height}
        minWidth={height}
        {...restProps}
      >
        <IconWrapper
          icon={icon}
          color={intent === 'none' ? 'default' : 'currentColor'}
          size={iconSize || relativeIconSize}
        />
      </Button>
    )
  })
)

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
IconButton.propTypes = {
  /**
   * Composes the dimensions spec from the Box primitive.
   */
  ...dimensions.propTypes,

  /**
   * Composes the spacing spec from the Box primitive.
   */
  ...spacing.propTypes,

  /**
   * Composes the position spec from the Box primitive.
   */
  ...position.propTypes,

  /**
   * Composes the layout spec from the Box primitive.
   */
  ...layout.propTypes,

  /**
   * The size of the button
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),

  /**
   * The Evergreen icon or custom icon to render
   */
  icon: PropTypes.oneOfType([PropTypes.elementType, PropTypes.element]),

  /**
   * Specifies an explicit icon size instead of the default value
   */
  iconSize: PropTypes.number,

  /**
   * The intent of the button.
   */
  intent: PropTypes.string,

  /**
   * The appearance of the button.
   */
  appearance: PropTypes.oneOf(['default', 'minimal', 'primary']),

  /**
   * Forcefully set the active state of a button.
   * Useful in conjunction with a Popover.
   */
  isActive: PropTypes.bool,

  /**
   * When true, the button is disabled.
   * isLoading also sets the button to disabled.
   */
  disabled: PropTypes.bool,

  /**
   * Class name passed to the button.
   * Only use if you know what you are doing.
   */
  className: PropTypes.string
}

export default IconButton
