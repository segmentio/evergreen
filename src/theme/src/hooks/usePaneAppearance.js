import { deprecatedUseStyleConfig } from '../../../hooks/use-style-config'
import getPaneStyles from '../components/pane'
import useTheme from '../useTheme'

const pseudoSelectors = {
  _hover: '&:hover',
  _active: '&:active'
}

function usePaneAppearance(props, internalStyles) {
  const theme = useTheme()
  const paneStyles = getPaneStyles(theme, props)

  return deprecatedUseStyleConfig(
    paneStyles,
    props,
    pseudoSelectors,
    internalStyles
  )
}

export default usePaneAppearance
