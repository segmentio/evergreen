import React, { memo, forwardRef } from 'react'
import cx from 'classnames'
import Box, { PolymorphicBoxProps } from 'ui-box'
import { useStyleConfig } from '../../hooks'
import { useTheme } from '../../theme'
import { Theme } from '../../types/theme/theme'
import { TextOwnProps } from '../../typography/src/Text'

export interface TextareaOwnProps extends TextOwnProps {
  required?: boolean
  disabled?: boolean
  isInvalid?: boolean
  spellCheck?: boolean
  grammarly?: boolean
  appearance?: string
  name?: string
  placeholder?: string
  theme?: Theme
  className?: string
}

export type TextareaProps = PolymorphicBoxProps<'textarea', TextareaOwnProps>

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
  minHeight: 80,
  paddingX: 12,
  paddingY: 8,
  borderRadius: 4,
}

const Textarea: React.FC<TextareaProps> = memo(
  forwardRef(function Textarea(props, ref) {
    const {
      className,
      disabled = false,
      fontFamily = 'ui',
      grammarly = false,
      height,
      isInvalid = false,
      placeholder,
      required,
      spellCheck = true,
      width = '100%',
      ...restProps
    } = props

    const theme = useTheme()
    const { fontFamilies } = theme
    // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    const themedFontFamily = fontFamilies[fontFamily] || fontFamily

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
        fontFamily={themedFontFamily}
        {...boxProps}
        {...restProps}
      />
    )
  })
)

export default Textarea
