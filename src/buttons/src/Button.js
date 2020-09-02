import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { spacing, dimensions, position, layout } from 'ui-box'
import { Text } from '../../typography'
import { useTheme } from '../../theme'
import { IconWrapper } from '../../icons/src/IconWrapper'
import { Spinner } from '../../spinner'
import useButtonAppearance from '../../theme/src/hooks/useButtonAppearance'

/* eslint-disable-next-line react/prop-types */
const ButtonIcon = memo(function ButtonIcon({ icon, size, spacing, edge }) {
  if (!icon) return null

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

export const sizes = {
  small: {
    height: 24,
    textSize: 300
  },
  medium: {
    height: 32,
    textSize: 300
  },
  large: {
    height: 40,
    textSize: 400
  }
}

export const styles = {
  appearance: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',
  verticalAlign: 'middle',
  position: 'relative',
  fontWeight: 500,
  flexWrap: 'nowrap',
  outline: 'none',
  userSelect: 'none',
  whiteSpace: 'nowrap'
}

const getIconSizeForButton = height => {
  if (height <= 28) return 12
  if (height <= 32) return 14
  if (height <= 40) return 16
  if (height <= 48) return 18
  return 20
}

const Button = memo(
  forwardRef(function Button(props, ref) {
    const {
      className,

      // Intent = 'none',
      size = 'default',
      isActive = false,
      children,
      disabled,
      appearance = 'default',
      isLoading,

      // Paddings
      paddingRight,
      paddingLeft,
      paddingTop = 0,
      paddingBottom = 0,

      // Icons
      iconBefore,
      iconAfter,

      is = 'button',

      ...restProps
    } = props

    const theme = useTheme()
    const { tokens } = theme
    const themedClassName = useButtonAppearance(appearance)

    const buttonSize = sizes[size] || sizes.medium
    const height = restProps.height || buttonSize.height
    const iconSize = getIconSizeForButton(height)

    const padding = Math.round(height / 2)
    const pr = paddingRight !== undefined ? paddingRight : padding // eslint-disable-line no-negated-condition
    const pl = paddingLeft !== undefined ? paddingLeft : padding // eslint-disable-line no-negated-condition

    return (
      <Text
        is={is}
        ref={ref}
        type={is === 'button' ? 'button' : undefined}
        className={cx(themedClassName, className)}
        borderTopRightRadius={tokens.borderRadius}
        borderBottomRightRadius={tokens.borderRadius}
        borderTopLeftRadius={tokens.borderRadius}
        borderBottomLeftRadius={tokens.borderRadius}
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        paddingRight={pr}
        paddingLeft={pl}
        marginLeft={0} // Removes weird margins in Safari
        marginRight={0} // Removes weird margins in Safari
        marginTop={0} // Removes weird margins in Safari
        marginBottom={0} // Removes weird margins in Safari
        size={buttonSize.textSize}
        color={null} // Prevent the Text color overriding the glamor appearanceStyle color
        height={height}
        lineHeight={`${height}px`}
        {...(isActive ? { 'data-active': true } : {})}
        {...styles}
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
        <ButtonIcon
          icon={iconBefore}
          size={iconSize}
          spacing={pl}
          edge="start"
        />
        {children}
        <ButtonIcon icon={iconAfter} size={iconSize} spacing={pr} edge="end" />
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
  appearance: PropTypes.oneOf(['default', 'minimal', 'primary']),

  /**
   * The size of the button
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),

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
  iconBefore: PropTypes.oneOfType([PropTypes.elementType, PropTypes.element]),

  /**
   * Sets an icon after the text. Can be any icon from Evergreen or a custom element.
   */
  iconAfter: PropTypes.oneOfType([PropTypes.elementType, PropTypes.element]),

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

export default Button
