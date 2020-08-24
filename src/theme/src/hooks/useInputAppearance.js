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
  const {
    tokens: { colors },
    inputs
  } = theme

  const {
    base: baseStyles = {},
    invalid: invalidStyles = {},
    placeholder: placeholderStyles = {},
    focus: focusStyles = {},
    disabled: disabledStyles = {}
  } = inputs || {}

  switch (appearance) {
    case 'none':
      return {
        ...baseStyle,
        backgroundColor: 'white',
        [invalidState]: {},
        [placeholder]: {
          color: colors.gray600
        },
        [focusState]: {
          outline: 'none'
        },
        [disabledState]: {
          cursor: 'not-allowed',
          backgroundColor: colors.gray100
        }
      }

    default:
      return {
        ...baseStyle,
        backgroundColor: 'white',
        border: `1px solid ${colors.gray400}`,
        ...baseStyles,
        [placeholder]: {
          color: colors.gray600,
          ...placeholderStyles
        },
        [hoverPlaceholderState]: {
          color: colors.gray700
        },
        [invalidState]: {
          border: `1px solid ${colors.red500}`,
          ...invalidStyles
        },
        [focusState]: {
          outline: 'none',
          transition: 'box-shadow 80ms ease-in-out',
          border: `1px solid ${colors.blue200}`,
          boxShadow: `0 0 0 2px ${colors.blue100}`,
          ...focusStyles
        },
        [focusPlaceholderState]: {
          color: colors.gray700
        },
        [disabledState]: {
          cursor: 'not-allowed',
          backgroundColor: colors.gray100,
          ...disabledStyles
        }
      }
  }
}

/**
 * Get the className of an `input` element - either `<TagInput />`, `<TextArea />`, or `<TextInput />` .
 * @param {string} appearance
 * @return {string} the appearance class name.
 */

function useInputAppearance(appearance) {
  const theme = useTheme()
  console.log('HELLO ARE WE IN HERE')
  const className = useMemo(
    () => css(getInputStyles(theme, appearance)).toString(),
    [appearance, theme]
  )
  return className
}

export default useInputAppearance
