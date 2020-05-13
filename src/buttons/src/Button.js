import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { dimensions, spacing, position, layout } from 'ui-box'
import { IconWrapper } from '../../icons/src/IconWrapper'
import { Text } from '../../typography'
import { Spinner } from '../../spinner'
import { useTheme } from '../../theme'

/* eslint-disable-next-line react/prop-types */
const Icon = memo(({ icon, size, spacing, edge }) => {
  const edgeMargin = -Math.round(spacing * 0.2)
  const innerMargin = Math.round(size * 0.7)
  const marginLeft = edge === 'start' ? edgeMargin : innerMargin
  const marginRight = edge === 'end' ? edgeMargin : innerMargin

  return (
    <IconWrapper
      icon={icon}
      size={size}
      marginLeft={marginLeft}
      marginRight={marginRight}
    />
  )
})

const Button = memo(
  forwardRef((props, ref) => {
    const theme = useTheme()

    const {
      className,

      intent,
      height,
      isActive,
      children,
      disabled,
      appearance,
      isLoading,

      // Paddings
      paddingRight,
      paddingLeft,
      paddingTop,
      paddingBottom,

      // Icons
      iconBefore,
      iconAfter,

      ...restProps
    } = props

    const themedClassName = theme.getButtonClassName(appearance, intent)
    const textSize = theme.getTextSizeForControlHeight(height)

    const borderRadius = theme.getBorderRadiusForControlHeight(height)
    const iconSize = theme.getIconSizeForButton(height)

    const padding = Math.round(height / 2)
    const pr = paddingRight !== undefined ? paddingRight : padding // eslint-disable-line no-negated-condition
    const pl = paddingLeft !== undefined ? paddingLeft : padding // eslint-disable-line no-negated-condition

    return (
      <Text
        is="button"
        ref={ref}
        className={cx(themedClassName, className)}
        borderTopRightRadius={borderRadius}
        borderBottomRightRadius={borderRadius}
        borderTopLeftRadius={borderRadius}
        borderBottomLeftRadius={borderRadius}
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        paddingRight={pr}
        paddingLeft={pl}
        marginLeft={0} // Removes weird margins in Safari
        marginRight={0} // Removes weird margins in Safari
        marginTop={0} // Removes weird margins in Safari
        marginBottom={0} // Removes weird margins in Safari
        size={textSize}
        color={null} // Prevent the Text color overriding the glamor appearanceStyle color
        height={height}
        lineHeight={`${height}px`}
        {...(isActive ? { 'data-active': true } : {})}
        {...Button.styles}
        {...restProps}
        disabled={disabled || isLoading}
      >
        {isLoading && (
          <Spinner
            marginLeft={-Math.round(height / 8)}
            marginRight={Math.round(height / 4)}
            size={Math.round(height / 2)}
          />
        )}
        <Icon icon={iconBefore} size={iconSize} spacing={pl} edge="start" />
        {children}
        <Icon icon={iconAfter} size={iconSize} spacing={pr} edge="end" />
      </Text>
    )
  })
)

Button.propTypes = {
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
   * The intent of the button.
   */
  intent: PropTypes.oneOf(['none', 'success', 'warning', 'danger']),

  /**
   * The appearance of the button.
   */
  appearance: PropTypes.oneOf(['default', 'minimal', 'primary']).isRequired,

  /**
   * When true, show a loading spinner before the children.
   * This also disables the button.
   */
  isLoading: PropTypes.bool,

  /**
   * Forcefully set the active state of a button.
   * Useful in conjuction with a Popover.
   */
  isActive: PropTypes.bool,

  /**
   * Sets an icon before the text. Can be any icon from Evergreen or a custom element.
   */
  iconBefore: PropTypes.node,

  /**
   * Sets an icon after the text. Can be any icon from Evergreen or a custom element.
   */
  iconAfter: PropTypes.node,

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

Button.defaultProps = {
  appearance: 'default',
  height: 32,
  intent: 'none',
  isActive: false,
  paddingBottom: 0,
  paddingTop: 0
}

Button.styles = {
  position: 'relative',
  fontFamily: 'ui',
  fontWeight: 500,
  display: 'inline-flex',
  alignItems: 'center',
  flexWrap: 'nowrap'
}

export default Button
