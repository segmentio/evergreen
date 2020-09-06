import { useMemo } from 'react'
import useStyleConfig from '../../../hooks/use-style-config'
import getTableCellStyles from '../components/table-cell'
import useTheme from '../useTheme'

const pseudoSelectors = {
  _focus:
    '&[data-isselectable="true"]:focus, &[aria-expanded="true"][aria-haspopup="true"]'
}

function useTableCellAppearance(modifiers, internalStyles = {}) {
  const theme = useTheme()
  const tableCellStyles = useMemo(() => getTableCellStyles(theme), [theme])

  return useStyleConfig(
    tableCellStyles,
    modifiers,
    pseudoSelectors,
    internalStyles
  )
}

export default useTableCellAppearance
