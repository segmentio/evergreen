import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Text } from 'evergreen-typography'
import {
  getBorderRadiusForControlHeight,
  getTextStyleForControlHeight,
} from 'evergreen-shared-styles'
import TextInputAppearances from '../styles/text-input-appearances'

export default class TextInput extends PureComponent {
  static propTypes = {
    ...Text.propTypes,
    appearance: PropTypes.oneOf(Object.keys(TextInputAppearances)).isRequired,
    disabled: PropTypes.bool.isRequired,
    isInvalid: PropTypes.bool.isRequired,
    spellCheck: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    type: 'text',
    is: 'input',
    appearance: 'default',
    boxSizing: 'border-box',
    height: 32,
    width: 280,
    disabled: false,
    isInvalid: false,
    spellCheck: true,
  }

  render() {
    const {
      css,
      height,
      disabled,
      isInvalid,
      appearance,
      spellCheck,
      ...props
    } = this.props
    const appearanceStyle = TextInputAppearances[appearance]
    const textStyle = getTextStyleForControlHeight({ height })
    const borderRadius = getBorderRadiusForControlHeight({ height })

    return (
      <Text
        height={height}
        disabled={disabled}
        paddingLeft={Math.round(height / 3.2)}
        paddingRight={Math.round(height / 3.2)}
        borderRadius={borderRadius}
        spellCheck={spellCheck}
        {...(isInvalid ? { 'aria-invalid': true } : {})}
        {...(disabled ? { color: 'extraMuted' } : {})}
        {...textStyle}
        css={{ ...css, ...appearanceStyle }}
        {...props}
      />
    )
  }
}
