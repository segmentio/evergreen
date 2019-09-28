import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { dimensions, spacing, position, layout } from 'ui-box'
import { Text } from '../../typography'
import { Icon } from '../../icon'
import { Spinner } from '../../spinner'
import { withTheme } from '../../theme'

class Button extends PureComponent {
  static propTypes = {
    /**
     * Composes the dimensions spec from the Box primitivie.
     */
    ...dimensions.propTypes,

    /**
     * Composes the spacing spec from the Box primitivie.
     */
    ...spacing.propTypes,

    /**
     * Composes the position spec from the Box primitivie.
     */
    ...position.propTypes,

    /**
     * Composes the layout spec from the Box primitivie.
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
     * Theme provided by ThemeProvider.
     */
    theme: PropTypes.object.isRequired,

    /**
     * Class name passed to the button.
     * Only use if you know what you are doing.
     */
    className: PropTypes.string
  }

  static defaultProps = {
    appearance: 'default',
    height: 32,
    intent: 'none',
    isActive: false,
    paddingBottom: 0,
    paddingTop: 0
  }

  static styles = {
    position: 'relative',
    fontFamily: 'ui',
    fontWeight: 500,
    display: 'inline-flex',
    alignItems: 'center',
    flexWrap: 'nowrap'
  }

  render() {
    const {
      theme,
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
      iconBefore: iconBeforeKey,
      iconAfter: iconAfterKey,

      ...props
    } = this.props

    const themedClassName = theme.getButtonClassName(appearance, intent)
    const textSize = theme.getTextSizeForControlHeight(height)

    const borderRadius = theme.getBorderRadiusForControlHeight(height)
    const iconSize = theme.getIconSizeForButton(height)

    const pr =
      paddingRight !== undefined ? paddingRight : Math.round(height / 2) // eslint-disable-line no-negated-condition
    const pl = paddingLeft !== undefined ? paddingLeft : Math.round(height / 2) // eslint-disable-line no-negated-condition

    let iconBefore
    if (iconBeforeKey) {
      iconBefore = (
        <Icon
          icon={iconBeforeKey}
          size={iconSize}
          marginLeft={-Math.round(pl * 0.2)}
          marginRight={Math.round(iconSize * 0.7)}
        />
      )
    }

    let iconAfter
    if (iconAfterKey) {
      iconAfter = (
        <Icon
          icon={iconAfterKey}
          size={iconSize}
          marginRight={-Math.round(pl * 0.2)}
          marginLeft={Math.round(iconSize * 0.7)}
        />
      )
    }

    return (
      <Text
        is="button"
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
        {...props}
        disabled={disabled || isLoading}
      >
        {isLoading && (
          <Spinner
            marginLeft={-Math.round(height / 8)}
            marginRight={Math.round(height / 4)}
            size={Math.round(height / 2)}
          />
        )}
        {iconBefore || null}
        {children}
        {iconAfter || null}
      </Text>
    )
  }
}

export default withTheme(Button)
