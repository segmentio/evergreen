import { useCallback } from 'react'
import safeInvoke from '../lib/safe-invoke'
import { useRovingTabindex } from '../roving-tabindex'
import { useClickable } from './use-clickable'

export function useListBehavior({
  disabled,
  isHighlighted,
  isMultiSelect,
  isSelectable,
  isSelected,
  onSelect,
  ref
}) {
  const { 'aria-selected': ariaSelected, onClick: rovingTabIndexOnClick, onKeyDown: rovingTabIndexOnKeyDown, tabIndex: rovingTabIndex, ...rovingProps } = useRovingTabindex({
    disabled,
    isSelectable,
    isSelected,
    ref
  })

  const { onKeyDown, tabIndex: useClickableTabIndex } = useClickable({
    disabled,
    onKeyDown: rovingTabIndexOnKeyDown,
    tabIndex: rovingTabIndex
  })

  const clickHandler = useCallback(
    event => {
      safeInvoke(rovingTabIndexOnClick, event)
      safeInvoke(onSelect, event)
    },
    [ onSelect, rovingTabIndexOnClick ]
  )

  const checkboxProps = {
    role: isMultiSelect ? 'checkbox' : 'radio',
    'aria-label': ref.current?.textContent
  }

  return {
    tabIndex: useClickableTabIndex,
    onKeyDown,
    onClick: clickHandler,
    disabled,
    'aria-selected': isHighlighted || ariaSelected,
    ...checkboxProps,
    ...rovingProps
  }
}
