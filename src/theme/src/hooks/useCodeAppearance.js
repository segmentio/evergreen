import { useMemo } from 'react'
import useStyleConfig from '../../../hooks/use-style-config'
import getCodeStyles from '../components/code'
import useTheme from '../useTheme'

// TODO evaluate making selectors consistent across all components?
const pseudoSelectors = {}

function useCodeAppearance(modifiers, internalStyles = {}) {
  const theme = useTheme()
  const codeStyles = useMemo(() => getCodeStyles(theme), [theme])

  return useStyleConfig(codeStyles, modifiers, pseudoSelectors, internalStyles)
}

export default useCodeAppearance
