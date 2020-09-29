import { useRef, useContext, useLayoutEffect, useCallback } from 'react'
import { useId } from '../hooks'
import { RovingTabIndexContext, ActionTypes } from './tabindex-provider'

const MoveDirection = {
  Next: 'Next',
  Previous: 'Previous'
}

export default function useRovingTabIndex({
  disabled,
  isSelectable,
  isSelected,
  ref = null
}) {
  const stopElementId = useId('eg-roving-tabindex_')
  const stopElementRef = useRef(stopElementId)
  const context = useContext(RovingTabIndexContext)

  useLayoutEffect(() => {
    if (disabled) {
      return
    }
    context.dispatch({
      type: ActionTypes.REGISTER,
      payload: { id: stopElementRef.current, ref }
    })
    return () => {
      context.dispatch({
        type: ActionTypes.UNREGISTER,
        payload: { id: stopElementRef.current }
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
        return MoveDirection.Previous
      } else if (event.key === 'ArrowRight') {
        return MoveDirection.Next
      }
    }
    if (
      context.state.direction === 'vertical'
    ) {
      if (event.key === 'ArrowUp') {
        return MoveDirection.Previous
      } else if (event.key === 'ArrowDown') {
        return MoveDirection.Next
      }
    }
    return null
  }

  const handleKeyDown = useCallback(
    (event) => {
      const payload = { id: stopElementRef.current }
      const direction = getDirection(event)
      if (direction === MoveDirection.Previous) {
        context.dispatch({
          type: ActionTypes.MOVE_TO_PREVIOUS,
          payload
        })
        event.preventDefault()
      } else if (direction === MoveDirection.Next) {
        context.dispatch({
          type: ActionTypes.MOVE_TO_NEXT,
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
      payload: { id: stopElementRef.current }
    })
  }, [])

  const isFocused = !disabled && stopElementRef.current === context.state.selectedId
  const tabIndex = isFocused ? 0 : -1

  return { 
    tabIndex,
    'aria-selected': isFocused,
    'aria-current': isSelected,
    'aria-checked': isSelected,
    'data-isselectable': isSelectable,
    onKeyDown: handleKeyDown,
    onClick: handleClick
  }
}