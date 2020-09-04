import React, { forwardRef, memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Box, { spacing, dimensions, position, layout } from 'ui-box'
import useInputAppearance from '../../theme/src/hooks/useInputAppearance'

const TextInput = memo(
  forwardRef(function TextInput(props, ref) {
    const {
      className,
      required,
      placeholder,
      width = 280,
      disabled = false,
      isInvalid = false,
      spellCheck = true,
      appearance = 'default',
      size = 'medium',
      ...restProps
    } = props

    const { className: themedClassName, boxProps } = useInputAppearance({ appearance, size })

    return (
      <Box
        is="input"
        className={cx(themedClassName, className)}
        type="text"
        width={width}
        required={required}
        disabled={disabled}
        placeholder={placeholder}
        spellCheck={spellCheck}
        aria-invalid={isInvalid}
        ref={ref}
        {...boxProps}
        {...restProps}
      />
    )
  })
)

TextInput.propTypes = {
  /**
   * Composes the dimensions spec from the Box primitive.
   */
  ...dimensions.propTypes,

  /**
   * Composes the spacing spec from the Box primitive.
   */
  ...spacing.propTypes,

  /**
   * Composes the position spec from the Box primitive.
   */
  ...position.propTypes,

  /**
   * Composes the layout spec from the Box primitive.
   */
  ...layout.propTypes,

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
