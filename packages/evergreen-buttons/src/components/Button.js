import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Text } from 'evergreen-typography'
import { IconMap, IconAim } from 'evergreen-icons'
import {
  getBorderRadiusForControlHeight,
  getTextStyleForControlHeight,
  getIconSizeForControlHeight
} from 'evergreen-shared-styles'
import ButtonAppearances from '../styles/ButtonAppearances'

export default class Button extends PureComponent {
  static propTypes = {
    /**
     * Composes the Text component as the base.
     */
    ...Text.propTypes,

    /**
     * The appearance of the button.
     */
    appearance: PropTypes.oneOf(Object.keys(ButtonAppearances)).isRequired,

    /**
     * Forcefully set the active state of a button.
     * Useful in conjuction with a Popover.
     */
    isActive: PropTypes.bool,

    /**
     * Sets an icon before the text. Can be any icon from `evergreen-icons`.
     */
    iconBefore: PropTypes.oneOf(Object.keys(IconMap)),

    /**
     * The aim of the left icon. Not a big use case for this.
     */
    iconBeforeAim: PropTypes.oneOf(Object.keys(IconAim)),

    /**
     * Sets an icon after the text. Can be any icon from `evergreen-icons`
     */
    iconAfter: PropTypes.oneOf(Object.keys(IconMap)),

    /**
     * The aim of the right icon. Useful to aim a triangle down.
     */
    iconAfterAim: PropTypes.oneOf(Object.keys(IconAim))
  }

  static defaultProps = {
    is: 'button',
    position: 'relative',
    appearance: 'default',
    paddingTop: 0,
    paddingBottom: 0,
    height: 32,
    fontFamily: 'ui',
    fontWeight: 500,
    display: 'inline-flex',
    alignItems: 'center',
    flexWrap: 'nowrap',

    isActive: false,
    iconBeforeAim: 'none',
    iconAfterAim: 'none'
  }

  render() {
    const {
      css,
      height,
      isActive,
      children,
      appearance,

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
    const appearanceStyle = ButtonAppearances[appearance]
    const textStyle = getTextStyleForControlHeight({ height })
    const borderRadius = getBorderRadiusForControlHeight({ height })
    const iconHeight = height - 4
    const iconSize = getIconSizeForControlHeight({ height: iconHeight })

    const pr =
      paddingRight !== undefined ? paddingRight : Math.round(height / 2) // eslint-disable-line no-negated-condition
    const pl = paddingLeft !== undefined ? paddingLeft : Math.round(height / 2) // eslint-disable-line no-negated-condition

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
        borderTopRightRadius={borderRadius}
        borderBottomRightRadius={borderRadius}
        borderTopLeftRadius={borderRadius}
        borderBottomLeftRadius={borderRadius}
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        paddingRight={pr}
        paddingLeft={pl}
        margin={0} // Removes weird margins in Safari
        {...textStyle}
        css={{
          ...css,
          ...appearanceStyle
        }}
        height={height}
        lineHeight={`${height}px`}
        {...(isActive ? { 'data-active': true } : {})}
        {...props}
      >
        {iconBefore || null}
        <span>{children}</span>
        {iconAfter || null}
      </Text>
    )
  }
}
