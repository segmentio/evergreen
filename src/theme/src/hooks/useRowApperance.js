import { useMemo } from 'react'
import useStyleConfig from '../../../hooks/use-style-config'
import getRowStyles from '../components/row'
import useTheme from '../useTheme'

const pseudoSelectors = {
  _hover: '&[data-isselectable="true"]:not(:active):not([aria-current="true"]):hover',
  _focus: '&[data-isselectable="true"]:focus, &[aria-selected="true"]',
  _active: '&[aria-current="true"], &[data-isselectable="true"]:active',
  _current: '&[aria-current="true"]'
}

/**
 * Get the className of an `row` element - either `<Table.Row />`, or `<MenuItem />` .
 * @param {string} appearance
 * @return {string} the appearance class name.
 */

function useRowApperance(modifiers, internalStyles) {
  const theme = useTheme()
  const rowStyles = useMemo(() => getRowStyles(theme), [theme])

  const defaultModifiers = {
    appearance: 'default',
    size: 'medium'
  }

  return useStyleConfig(
    rowStyles,
    {...defaultModifiers, ...modifiers},
    pseudoSelectors,
    internalStyles
  )
}

export default useRowApperance
