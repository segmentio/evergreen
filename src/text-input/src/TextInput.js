import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Text } from '../../typography'
import {
  getBorderRadiusForControlHeight,
  getTextStyleForControlHeight,
  InputAppearances
} from '../../shared-styles'

export default class TextInput extends PureComponent {
  static propTypes = {
    /**
     * Composes the Text component as the base.
     */
    ...Text.propTypes,

    /**
     * Makes the input element required.
     */
    required: PropTypes.bool,

    /**
     * Makes the input element disabled.
     */
    disabled: PropTypes.bool,

    /**
     * Sets visual styling to be invalid.
     */
    isInvalid: PropTypes.bool,

    /**
     * Use the native spell check functionality of the browser.
     */
    spellCheck: PropTypes.bool,

    /**
     * The placeholder text when there is no value present.
     */
    placeholder: PropTypes.string,

    /**
     * The appearance of the TextInput.
     */
    appearance: PropTypes.oneOf(Object.keys(InputAppearances))
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
    const appearanceStyle = InputAppearances[appearance]
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
        aria-invalid={isInvalid}
        {...(disabled ? { color: 'extraMuted' } : {})}
        {...textStyle}
        css={{ ...css, ...appearanceStyle }}
        {...props}
      />
    )
  }
}
