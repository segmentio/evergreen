import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Box, { spacing, dimensions, position, layout } from 'ui-box'
import useStyleConfig from '../../hooks/use-style-config'

const pseudoSelectors = {
  _focus: '&:focus',
  _disabled: '&:disabled',
  _invalid: '&[aria-invalid="true"]',
  _placeholder: '&::placeholder',
  _placeholderHover: '&:hover::placeholder',
  _placeholderFocus: '&:focus::placeholder'
}

const internalStyles = {
  border: 'none',
  MozAppearance: 'none',
  outline: 'none',
  textDecoration: 'none',
  WebkitAppearance: 'none',
  WebkitFontSmoothing: 'antialiased',
  minHeight: 80,
  paddingX: 12,
  paddingY: 8,
  borderRadius: 4
}

const Textarea = memo(
  forwardRef(function Textarea(props, ref) {
    const {
      className,
      width = '100%',
      height,
      disabled = false,
      required,
      isInvalid = false,
      placeholder,
      spellCheck = true,
      grammarly = false,
      ...restProps
    } = props

    const { className: themedClassName, ...boxProps } = useStyleConfig(
      'Input',
      { appearance: 'default' },
      pseudoSelectors,
      internalStyles
    )

    return (
      <Box
        is="textarea"
        ref={ref}
        className={cx(themedClassName, className)}
        width={width}
        height={height}
        required={required}
        disabled={disabled}
        placeholder={placeholder}
        spellCheck={spellCheck}
        aria-invalid={isInvalid}
        data-gramm_editor={grammarly}
        {...boxProps}
        {...restProps}
      />
    )
  })
)

Textarea.propTypes = {
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
   * Makes the textarea element required.
   */
  required: PropTypes.bool,

  /**
   * Makes the textarea element disabled.
   */
  disabled: PropTypes.bool,

  /**
   * Sets visual styling of _only_ the text area to be "invalid".
   * Note that this does not effect any `validationMessage`.
   */
  isInvalid: PropTypes.bool,

  /**
   * Use the native spell check functionality of the browser.
   */
  spellCheck: PropTypes.bool,

  /**
   * Allow the Grammarly browser extension to attach to the backing textarea.
   */
  grammarly: PropTypes.bool,

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

export default Textarea
