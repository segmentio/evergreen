import { useRef, useContext, useLayoutEffect, useCallback } from 'react'
import { uniqueId } from 'lodash'
import { RovingTabIndexContext, ActionTypes } from './tabindex-provider'

const TabDirection = {
  Next: 'Next',
  Previous: 'Previous'
}

export default function useRovingTabIndex({
  disabled,
  isSelectable,
  isSelected,
  ref = null
}) {
  const tabIndexId = useRef(uniqueId('eg-roving-tabindex_'))
  const context = useContext(RovingTabIndexContext)

  useLayoutEffect(() => {
    if (disabled) {
      return
    }
    context.dispatch({
      type: ActionTypes.REGISTER,
      payload: { id: tabIndexId.current, ref }
    })
    return () => {
      context.dispatch({
        type: ActionTypes.UNREGISTER,
        payload: { id: tabIndexId.current }
      })
    }
  }, [disabled])

  const getDirection = (
    event
  ) => {
    if (
      context.state.direction === 'horizontal'
    ) {
      if (event.key === 'ArrowLeft') {
        return TabDirection.Previous
      } else if (event.key === 'ArrowRight') {
        return TabDirection.Next
      }
    }
    if (
      context.state.direction === 'vertical'
    ) {
      if (event.key === 'ArrowUp') {
        return TabDirection.Previous
      } else if (event.key === 'ArrowDown') {
        return TabDirection.Next
      }
    }
    return null
  }

  const handleKeyDown = useCallback(
    (event) => {
      const payload = { id: tabIndexId.current }
      const direction = getDirection(event)
      if (direction === TabDirection.Previous) {
        context.dispatch({
          type: ActionTypes.TAB_TO_PREVIOUS,
          payload
        })
        event.preventDefault()
      } else if (direction === TabDirection.Next) {
        context.dispatch({
          type: ActionTypes.TAB_TO_NEXT,
          payload
        })
        event.preventDefault()
      }
    },
    [context.state]
  )

  const handleClick = useCallback(() => {
    context.dispatch({
      type: ActionTypes.CLICKED,
      payload: { id: tabIndexId.current }
    })
  }, [ tabIndexId ])

  const isFocused = !disabled && tabIndexId.current === context.state.selectedId
  const tabIndex = isFocused ? 0 : -1

  return { 
    tabIndex,
    'aria-selected': isFocused,
    'aria-current': isSelected,
    'data-isselectable': isSelectable,
    onKeyDown: handleKeyDown,
    onClick: handleClick
  }
}