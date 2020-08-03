import React, { forwardRef, memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Text } from '../../typography'
import { useTheme } from '../../theme'

const TextInput = memo(
  forwardRef(function TextInput(props, ref) {
    const {
      className,
      required,
      placeholder,
      width = 280,
      height = 32,
      disabled = false,
      isInvalid = false,
      appearance = 'default',
      spellCheck = true,
      ...restProps
    } = props
    const theme = useTheme()

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
        paddingLeft={Math.round(height / 3.2)}
        paddingRight={Math.round(height / 3.2)}
        borderRadius={borderRadius}
        spellCheck={spellCheck}
        aria-invalid={isInvalid}
        {...(disabled ? { color: 'muted' } : {})}
        ref={ref}
        {...restProps}
      />
    )
  })
)

TextInput.propTypes = {
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
   * Sets visual styling of _only_ the text input to be "invalid".
   * Note that this does not effect any `validationMessage`.
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
  appearance: PropTypes.string,

  /**
   * The width of the TextInput.
   */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Class name passed to the button.
   * Only use if you know what you are doing.
   */
  className: PropTypes.string
}

export default TextInput
