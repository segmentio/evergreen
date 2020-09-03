import { useMemo } from 'react'
import { css } from 'glamor'
import useTheme from '../useTheme'

const baseStyle = {
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  lineHeight: '12px',
  border: 'none'
}

const invalidState = '&[aria-invalid="true"]'
const placeholder = '&::placeholder'
const focusState = '&:focus'
const disabledState = '&:disabled'
const hoverPlaceholderState = '&:hover::placeholder'
const focusPlaceholderState = '&:focus::placeholder'

const getInputStyles = (theme, appearance) => {
  const { inputs } = theme

  const {
    base: baseStyles = {},
    invalid: invalidStyles = {},
    placeholder: placeholderStyles = {},
    focus: focusStyles = {},
    disabled: disabledStyles = {},
    hoverPlaceholder: hoverPlaceholderStyles = {},
    focusPlaceholder: focusPlaceholderStyles = {}
  } = (inputs || {})[appearance]

  return {
    ...baseStyle,
    ...baseStyles,
    [placeholder]: {
      ...placeholderStyles
    },
    [hoverPlaceholderState]: {
      ...hoverPlaceholderStyles
    },
    [invalidState]: {
      ...invalidStyles
    },
    [focusState]: {
      ...focusStyles
    },
    [focusPlaceholderState]: {
      ...focusPlaceholderStyles
    },
    [disabledState]: {
      ...disabledStyles
    }
  }
}

/**
 * Get the className of an `input` element - either `<TagInput />`, `<TextArea />`, or `<TextInput />` .
 * @param {string} appearance
 * @return {string} the appearance class name.
 */

function useInputAppearance(appearance = 'default') {
  const theme = useTheme()
  const className = useMemo(
    () => css(getInputStyles(theme, appearance)).toString(),
    [appearance, theme]
  )
  return className
}

export default useInputAppearance
