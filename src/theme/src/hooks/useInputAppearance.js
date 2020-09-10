import { useMemo } from 'react'
import useStyleConfig from '../../../hooks/use-style-config'
import getInputStyles from '../components/input'
import useTheme from '../useTheme'

const pseudoSelectors = {
  _focus: '&:focus',
  _disabled: '&:disabled',
  _invalid: '&[aria-invalid="true"]',
  _placeholder: '&::placeholder',
  _placeholderHover: '&:hover::placeholder',
  _placeholderFocus: '&:focus::placeholder'
}

/**
 * Get the className of an `input` element - either `<TagInput />`, `<TextArea />`, or `<TextInput />` .
 * @param {string} appearance
 * @return {string} the appearance class name.
 */

function useInputAppearance(modifiers, internalStyles) {
  const theme = useTheme()
  const inputStyles = useMemo(() => getInputStyles(theme), [theme])

  const defaultModifiers = {
    appearance: 'default',
    size: 'medium'
  }

  return useStyleConfig(
    inputStyles,
    { ...defaultModifiers, ...modifiers },
    pseudoSelectors,
    internalStyles
  )
}

export default useInputAppearance
