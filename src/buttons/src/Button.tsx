import React, { PureComponent, ReactNode } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Text } from '../../typography'
import { Icon, IconName } from '../../icon'
import { Spinner } from '../../spinner'
import { withTheme, Theme } from '../../theme'

type Intent = 'none' | 'success' | 'warning' | 'danger'
type Appearance = 'default' | 'minimal' | 'primary'

interface ButtonProps extends React.ComponentProps<typeof Text> {
  /**
   * The intent of the button.
   */
  intent: Intent

  /**
   * The appearance of the button.
   */
  appearance: Appearance

  /**
   * Sets the height and font-size of the button.
   */
  height: number

  /**
   * When true, show a loading spinner before the children.
   * This also disables the button.
   */
  isLoading?: boolean

  /**
   * Forcefully set the active state of a button.
   * Useful in conjuction with a Popover.
   */
  isActive?: boolean

  /**
   * Sets an icon before the text. Can be any icon from Evergreen.
   */
  iconBefore?: IconName

  /**
   * Sets an icon after the text. Can be any icon from Evergreen.
   */
  iconAfter?: IconName

  /**
   * When true, the button is disabled.
   * isLoading also sets the button to disabled.
   */
  disabled?: boolean

  /**
   * Theme provided by ThemeProvider.
   */
  theme: Theme
}

class Button extends PureComponent<ButtonProps> {
  static propTypes = {
    intent: PropTypes.oneOf(['none', 'success', 'warning', 'danger'])
      .isRequired as PropTypes.Validator<Intent>,
    appearance: PropTypes.oneOf(['default', 'minimal', 'primary'])
      .isRequired as PropTypes.Validator<Appearance>,
    height: PropTypes.number.isRequired,
    isLoading: PropTypes.bool,
    isActive: PropTypes.bool,
    iconBefore: PropTypes.string as PropTypes.Requireable<IconName>,
    iconAfter: PropTypes.string as PropTypes.Requireable<IconName>,
    disabled: PropTypes.bool,
    theme: PropTypes.object.isRequired as PropTypes.Validator<Theme>
  }

  static defaultProps = {
    appearance: 'default' as const,
    height: 32,
    intent: 'none' as const,
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
      typeof paddingRight === 'number' ? paddingRight : Math.round(height / 2)
    const pl =
      typeof paddingLeft === 'number' ? paddingLeft : Math.round(height / 2)

    let iconBefore: ReactNode | undefined
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

    let iconAfter: ReactNode | undefined
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
