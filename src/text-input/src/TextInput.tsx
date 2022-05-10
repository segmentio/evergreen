import React, { forwardRef, memo } from 'react'
import cx from 'classnames'
import Box, { PolymorphicBoxProps } from 'ui-box'
import { useStyleConfig } from '../../hooks'
import { getTextPropsForControlHeight } from '../../lib/deprecated-theme-helpers'
import { useTheme } from '../../theme'
import { DefaultAppearance } from '../../types'

export interface TextInputOwnProps {
  /**
   * Makes the input element required.
   */
  required?: boolean
  /**
   * Makes the input element disabled.
   */
  disabled?: boolean
  /**
   * Sets visual styling of _only_ the text input to be "invalid".
   * Note that this does not effect any `validationMessage`.
   */
  isInvalid?: boolean
  /**
   * Use the native spell check functionality of the browser.
   */
  spellCheck?: boolean
  /**
   * The placeholder text when there is no value present.
   */
  placeholder?: string
  /**
   * The appearance of the TextInput.
   */
  appearance?: DefaultAppearance | 'primary' | 'none'
  /**
   * The width of the TextInput.
   */
  width?: string | number
  /**
   * Class name passed to the button.
   */
  className?: string
  /**
   * Size of the input
   */
  size?: 'small' | 'medium' | 'large'
}

export type TextInputProps = PolymorphicBoxProps<'input', TextInputOwnProps>

const pseudoSelectors = {
  _focus: '&:focus',
  _disabled: '&:disabled',
  _invalid: '&[aria-invalid="true"]:not(:focus)',
  _placeholder: '&::placeholder',
  _placeholderHover: '&:hover::placeholder',
  _placeholderFocus: '&:focus::placeholder',
}

const internalStyles = {
  border: 'none',
  MozAppearance: 'none',
  outline: 'none',
  textDecoration: 'none',
  WebkitAppearance: 'none',
  WebkitFontSmoothing: 'antialiased',
}

const TextInput: React.FC<TextInputProps> = memo(
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
      ...restProps
    } = props

    const theme = useTheme()
    const { fontFamilies } = theme
    // @ts-expect-error ts-migrate(2538) FIXME: Type 'false' cannot be used as an index type.
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
      // @ts-expect-error ts-migrate(2322) FIXME: Type '{ height: number | false | (string & {}) | "... Remove this comment to see the full error message
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
        fontFamily={themedFontFamily}
        {...boxProps}
        {...restProps}
        {...textProps}
        height={height}
      />
    )
  })
)

export default TextInput
