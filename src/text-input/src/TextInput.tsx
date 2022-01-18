import React, { forwardRef, memo } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import Box, { spacing, dimensions, position, layout } from 'ui-box'
import { useStyleConfig } from '../../hooks'
import { getTextPropsForControlHeight } from '../../lib/deprecated-theme-helpers'
import { useTheme } from '../../theme'

const pseudoSelectors = {
  _focus: '&:focus',
  _disabled: '&:disabled',
  _invalid: '&[aria-invalid="true"]:not(:focus)',
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
  WebkitFontSmoothing: 'antialiased'
}

const TextInput = memo(
  forwardRef(function TextInput(props, ref) {
    const {
      appearance = 'default',
      className,
      disabled = false,
      fontFamily = 'ui',
      isInvalid = false,
      placeholder,
      required,
      spellCheck = true,
      width = 280,
      // @ts-expect-error ts-migrate(2700) FIXME: Rest types may only be created from object types.
      ...restProps
    } = props

    const theme = useTheme()
    const { fontFamilies } = theme
    const themedFontFamily = fontFamilies[fontFamily] || fontFamily
    const { className: themedClassName, ...boxProps } = useStyleConfig(
      'Input',
      { appearance, size: restProps.size || 'medium' },
      pseudoSelectors,
      internalStyles
    )

    const height = restProps.height || boxProps.height
    const textProps = !restProps.size && restProps.height ? getTextPropsForControlHeight(restProps.height) : {}

    return (
      <Box
        is="input"
        className={cx(themedClassName, className)}
        type="text"
        // @ts-expect-error ts-migrate(2783) FIXME: 'width' is specified more than once, so this usage... Remove this comment to see the full error message
        width={width}
        required={required}
        disabled={disabled}
        placeholder={placeholder}
        spellCheck={spellCheck}
        aria-invalid={isInvalid}
        ref={ref}
        // @ts-expect-error ts-migrate(2783) FIXME: 'fontFamily' is specified more than once, so this ... Remove this comment to see the full error message
        fontFamily={themedFontFamily}
        {...boxProps}
        {...restProps}
        {...textProps}
        height={height}
      />
    )
  })
)

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
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
