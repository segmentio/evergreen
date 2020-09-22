import { useCallback } from 'react'
import safeInvoke from '../lib/safe-invoke'
import { useRovingTabindex } from '../roving-tabindex'
import { useClickable } from './use-clickable'

export function useListBehavior({
  disabled,
  isSelectable,
  isSelected,
  onSelect,
  ref
}) {
  const { onClick: rovingTabIndexClick, onKeyDown: rovingTabIndexKeyDown, tabIndex: rovingTabIndex, ...rovingProps } = useRovingTabindex({
    disabled,
    isSelectable,
    isSelected,
    onSelect,
    ref
  })

  const { onKeyDown: useClickableOnKeyDown, tabIndex: useClickableTabIndex } = useClickable({
    disabled,
    ref,
    tabIndex: rovingTabIndex
  })

  const keyDownHandler = useCallback(
    event => {
      safeInvoke(useClickableOnKeyDown, event)
      safeInvoke(rovingTabIndexKeyDown, event)
    },
    [ rovingTabIndexKeyDown, useClickableOnKeyDown ]
  )

  const clickHandler = useCallback(
    event => {
      safeInvoke(rovingTabIndexClick, event)
      safeInvoke(onSelect, event)
    },
    [ onSelect, rovingTabIndexClick ]
  )

  return {
    tabIndex: useClickableTabIndex,
    onKeyDown: keyDownHandler,
    onClick: clickHandler,
    ...rovingProps
  }
}
