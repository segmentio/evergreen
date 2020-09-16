import { useState, useCallback } from 'react'

/**
 * Hook that returns bind props + accessibility props for
 * "selectable" elements
 */

const resetStyles = {
  outline: 'none'
}

function useListBehavior({
  disabled,
  isHighlighted,
  isSelectable,
  isSelected,
  onSelect,
  ref: inputRef
}) {
  const [ref, setRef] = useState(inputRef)

  const keyDownHandler = useCallback(
    e => {
      const { key } = e
      if (ref) {
        let nextItemToFocus
        const tableBodyChildren = Array.from(ref.parentElement.children)
        const rowIndex = tableBodyChildren.indexOf(ref)

        if (key === 'ArrowUp' && rowIndex - 1 >= 0) {
          nextItemToFocus = tableBodyChildren[rowIndex - 1]
        } else if (
          key === 'ArrowDown' &&
          rowIndex + 1 < tableBodyChildren.length
        ) {
          nextItemToFocus = tableBodyChildren[rowIndex + 1]
        }

        if (nextItemToFocus && nextItemToFocus.hasAttribute('tabindex')) {
          nextItemToFocus.focus()
        }

        if (key === 'Enter' || key === ' ' || key === 'Spacebar') {
          e.preventDefault()
          e.currentTarget.click()
          onSelect(e)
        }
      }
    },
    [ref, disabled]
  )

  return {
    'aria-selected': isHighlighted,
    'aria-current': isSelected,
    'data-isselectable': isSelectable && !disabled,
    tabIndex: isSelectable && !disabled ? 0 : undefined,
    onKeyDown: keyDownHandler,
    onClick: keyDownHandler,
    getRef: setRef,
    ...resetStyles
  }
}

export default useListBehavior
