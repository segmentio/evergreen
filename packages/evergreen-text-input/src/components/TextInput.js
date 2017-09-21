import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Text, TextStyles } from 'evergreen-typography'
import TextInputAppearances from '../styles/text-input-appearances'

const getTextStyleForTextInput = ({ height }) => {
  if (height <= 28) return TextStyles['300']
  if (height <= 32) return TextStyles['300']
  if (height <= 36) return TextStyles['400']
  if (height <= 40) return TextStyles['400']
  if (height <= 48) return TextStyles['500']
  if (height <= 56) return TextStyles['700']
  return TextStyles['800']
}

const getBorderRadiusForTextInput = ({ height }) => {
  if (height <= 28) return 3
  if (height <= 32) return 4
  return 5
}

export default class TextInput extends PureComponent {
  static propTypes = {
    ...Text.propTypes,
    appearance: PropTypes.oneOf(Object.keys(TextInputAppearances)).isRequired,
    disabled: PropTypes.bool.isRequired,
    isInvalid: PropTypes.bool.isRequired,
    spellcheck: PropTypes.bool.isRequired,
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
    spellcheck: true,
  }

  render() {
    const {
      css,
      height,
      disabled,
      isInvalid,
      appearance,
      spellcheck,
      ...props
    } = this.props
    const appearanceStyle = TextInputAppearances[appearance]
    const textStyle = getTextStyleForTextInput({ height })
    const borderRadius = getBorderRadiusForTextInput({ height })

    return (
      <Text
        height={height}
        disabled={disabled}
        paddingLeft={Math.round(height / 3.2)}
        paddingRight={Math.round(height / 3.2)}
        borderRadius={borderRadius}
        spellcheck={spellcheck}
        {...(isInvalid ? { 'aria-invalid': true } : {})}
        {...(disabled ? { color: 'extraMuted' } : {})}
        {...textStyle}
        css={{ ...css, ...appearanceStyle }}
        {...props}
      />
    )
  }
}
