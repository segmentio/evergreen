import { IconName } from '@blueprintjs/icons'
import cx from 'classnames'
import * as React from 'react'
import { BoxProps } from 'ui-box'

import { Appearance } from '../../types/appearance'
import { IntentType } from '../../constants'
import { Icon } from '../../icon'
import { Spinner } from '../../spinner'
import { withTheme, PropsWithTheme } from '../../theme'
import { Text } from '../../typography'

export interface IButtonProps extends BoxProps {
  // The intent of the button.
  intent?: IntentType

  // The appearance of the button.
  appearance?: Appearance

  // When true, show a loading spinner before the children. This also disables the button.
  isLoading?: boolean

  // Forcefully set the active state of a button. Useful in conjuction with a Popover.
  isActive?: boolean

  // Sets an icon before the text. Can be any icon from Evergreen.
  iconBefore?: IconName

  // Sets an icon after the text. Can be any icon from Evergreen.
  iconAfter?: IconName

  // When true, the button is disabled. isLoading also sets the button to disabled.
  disabled?: boolean

  // Class name passed to the button. Only use if you know what you are doing.
  className?: string
}

class Button extends React.PureComponent<PropsWithTheme<IButtonProps>> {
  static defaultProps = {
    appearance: 'default' as Appearance,
    height: 32,
    intent: 'none' as IntentType,
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
      paddingRight !== undefined ? paddingRight : Math.round(Number(height) / 2) // eslint-disable-line no-negated-condition
    const pl =
      paddingLeft !== undefined ? paddingLeft : Math.round(Number(height) / 2) // eslint-disable-line no-negated-condition

    let iconBefore
    if (iconBeforeKey) {
      iconBefore = (
        <Icon
          icon={iconBeforeKey}
          size={iconSize}
          marginLeft={-Math.round(Number(pl) * 0.2)}
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
          marginRight={-Math.round(Number(pl) * 0.2)}
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
            marginLeft={-Math.round(Number(height) / 8)}
            marginRight={Math.round(Number(height) / 4)}
            size={Math.round(Number(height) / 2)}
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
