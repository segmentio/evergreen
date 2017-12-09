import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Text } from 'evergreen-typography'
import {
  getBorderRadiusForControlHeight,
  getTextStyleForControlHeight
} from 'evergreen-shared-styles'
import TextInputAppearances from '../styles/TextInputAppearances'

export default class TextInput extends PureComponent {
  static propTypes = {
    ...Text.propTypes,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    isInvalid: PropTypes.bool,
    spellCheck: PropTypes.bool,
    placeholder: PropTypes.string,
    appearance: PropTypes.oneOf(Object.keys(TextInputAppearances))
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
    spellCheck: true
  }

  render() {
    const {
      css,
      height,
      disabled,
      required,
      isInvalid,
      appearance,
      placeholder,
      spellCheck,
      ...props
    } = this.props
    const appearanceStyle = TextInputAppearances[appearance]
    const textStyle = getTextStyleForControlHeight({ height })
    const borderRadius = getBorderRadiusForControlHeight({ height })

    return (
      <Text
        height={height}
        required={required}
        disabled={disabled}
        placeholder={placeholder}
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
