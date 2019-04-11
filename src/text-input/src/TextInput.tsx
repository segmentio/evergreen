import cx from 'classnames'
import * as PropTypes from 'prop-types'
import * as React from 'react'

import { Text } from '../../typography'
import { TextProps } from '../../typography/src/Text'
import { withTheme, PropsWithTheme } from '../../theme'

export interface TextInputProps extends Partial<TextProps> {
  // Makes the input element required.
  required?: boolean

  // Makes the input element disabled.
  disabled?: boolean

  /**
   * Sets visual styling of _only_ the text input to be "invalid".
   * Note that this does not effect any `validationMessage`.
   */
  isInvalid?: boolean

  // Use the native spell check functionality of the browser.
  spellCheck?: boolean

  // The placeholder text when there is no value present.
  placeholder?: string

  // The appearance of the TextInput.
  appearance?: string

  // The width of the TextInput.
  width?: string | number

  // Class name passed to the button. Only use if you know what you are doing.
  className?: string
}

class TextInput extends React.PureComponent<PropsWithTheme<TextInputProps>> {
  static propTypes = {
    ...Text.propTypes,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    isInvalid: PropTypes.bool,
    spellCheck: PropTypes.bool,
    placeholder: PropTypes.string,
    appearance: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    theme: PropTypes.object.isRequired,
    className: PropTypes.string
  }

  static defaultProps = {
    appearance: 'default',
    height: 32,
    width: 280,
    disabled: false,
    isInvalid: false,
    spellCheck: true
  }

  render() {
    const {
      theme,
      className,

      css,
      width,
      height,
      disabled,
      required,
      isInvalid,
      appearance,
      placeholder,
      spellCheck,
      ...props
    } = this.props
    const themedClassName = theme.getTextInputClassName(appearance)
    const textSize = theme.getTextSizeForControlHeight(height)
    const borderRadius = theme.getBorderRadiusForControlHeight(height)

    return (
      <Text
        is="input"
        className={cx(themedClassName, className)}
        type="text"
        size={textSize}
        width={width}
        height={height}
        required={required}
        disabled={disabled}
        placeholder={placeholder}
        paddingLeft={Math.round(Number(height) / 3.2)}
        paddingRight={Math.round(Number(height) / 3.2)}
        borderRadius={borderRadius}
        spellCheck={spellCheck}
        aria-invalid={isInvalid}
        {...(disabled ? { color: 'muted' } : {})}
        css={css}
        {...props}
      />
    )
  }
}

export default withTheme(TextInput)
