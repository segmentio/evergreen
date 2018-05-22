import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Text } from '../../typography'
import { IconMap, IconAim } from '../../icons'
import {
  getBorderRadiusForControlHeight,
  getTextSizeForControlHeight,
  getIconSizeForControlHeight
} from '../../shared-styles'
import { Spinner } from '../../spinner'
import { withTheme } from '../../theme'

export default withTheme(
  class Button extends PureComponent {
    static propTypes = {
      /**
       * Composes the Text component as the base.
       */
      ...Text.propTypes,

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
       * Sets an icon before the text. Can be any icon from Evergreen.
       */
      iconBefore: PropTypes.oneOf(Object.keys(IconMap)),

      /**
       * The aim of the left icon. Not a big use case for this.
       */
      iconBeforeAim: PropTypes.oneOf(Object.keys(IconAim)),

      /**
       * Sets an icon after the text. Can be any icon from Evergreen.
       */
      iconAfter: PropTypes.oneOf(Object.keys(IconMap)),

      /**
       * The aim of the right icon. Useful to aim a triangle down.
       */
      iconAfterAim: PropTypes.oneOf(Object.keys(IconAim)),

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
      isActive: false,
      iconBeforeAim: 'none',
      iconAfterAim: 'none',
      height: 32,
      paddingTop: 0,
      paddingBottom: 0
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
        iconBeforeAim,
        iconAfter: iconAfterKey,
        iconAfterAim,

        ...props
      } = this.props
      const themedClassName = theme.getButtonClassName(appearance, intent)
      const textSize = getTextSizeForControlHeight({ height })

      const borderRadius = getBorderRadiusForControlHeight({ height })
      const iconHeight = height - 4
      const iconSize = getIconSizeForControlHeight({ height: iconHeight })

      const pr =
        paddingRight !== undefined ? paddingRight : Math.round(height / 2) // eslint-disable-line no-negated-condition
      const pl =
        paddingLeft !== undefined ? paddingLeft : Math.round(height / 2) // eslint-disable-line no-negated-condition

      let iconBefore
      if (iconBeforeKey) {
        iconBefore = React.createElement(IconMap[iconBeforeKey], {
          aim: iconBeforeAim,
          iconSize,
          color: 'inherit',
          size: iconHeight,
          marginLeft: -Math.round(pl * 0.6)
        })
      }

      let iconAfter
      if (iconAfterKey) {
        iconAfter = React.createElement(IconMap[iconAfterKey], {
          aim: iconAfterAim,
          iconSize,
          color: 'inherit',
          size: iconHeight,
          marginRight: -Math.round(pl * 0.6)
        })
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
          margin={0} // Removes weird margins in Safari
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
)
