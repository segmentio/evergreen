import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Text } from 'evergreen-typography'
import {
  getBorderRadiusForControlHeight,
  getTextStyleForControlHeight,
} from 'evergreen-shared-styles'
import ButtonAppearances from '../styles/ButtonAppearances'

export default class Button extends PureComponent {
  static propTypes = {
    ...Text.propTypes,
    appearance: PropTypes.oneOf(Object.keys(ButtonAppearances)).isRequired,
    isActive: PropTypes.bool,
  }

  static defaultProps = {
    is: 'button',
    position: 'relative',
    appearance: 'default',
    paddingTop: 0,
    paddingBottom: 0,
    display: 'inline-block',
    height: 32,
    fontFamily: 'ui',
    fontWeight: 500,
    isActive: false,
  }

  render() {
    const {
      appearance,
      css,
      height,
      paddingRight,
      paddingLeft,
      paddingTop,
      paddingBottom,
      isActive,
      ...props
    } = this.props
    const appearanceStyle = ButtonAppearances[appearance]
    const textStyle = getTextStyleForControlHeight({ height })
    const borderRadius = getBorderRadiusForControlHeight({ height })

    return (
      <Text
        borderTopRightRadius={borderRadius}
        borderBottomRightRadius={borderRadius}
        borderTopLeftRadius={borderRadius}
        borderBottomLeftRadius={borderRadius}
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        paddingRight={
          paddingRight !== undefined ? paddingRight : Math.round(height / 2)
        }
        paddingLeft={
          paddingLeft !== undefined ? paddingLeft : Math.round(height / 2)
        }
        {...textStyle}
        css={{
          ...css,
          ...appearanceStyle,
        }}
        height={height}
        lineHeight={`${height}px`}
        {...(isActive ? { 'data-active': true } : {})}
        {...props}
      />
    )
  }
}
