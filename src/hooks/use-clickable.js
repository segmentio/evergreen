import { useCallback } from 'react'
import safeInvoke from '../lib/safe-invoke'
import { useLatest } from './use-latest'

/**
 * React hook that returns bind props for a clickable component.
 * When the component has focus, Enter and space activate it
 */
export function useClickable({ disabled = false, onKeyDown: onKeyDownHandler, tabIndex = 0 } = {}) {
  const onKeyDownRef = useLatest(onKeyDownHandler)

  const onKeyDown = useCallback(
    event => {
      safeInvoke(onKeyDownRef.current, event)

      if (event.defaultPrevented) return
      if (disabled) return
      if (event.metaKey) return
      if (event.target !== event.currentTarget) return

      if (event.key === 'Enter' || event.key === ' ' || event.key === 'Spacebar') {
        // "Spacebar" for IE11 support
        // Prevent the default action to stop scrolling when space is pressed
        event.preventDefault()
        event.currentTarget.click()
      }
    },
    // onKeyDownRef is a ref, but eslint can't figure that out
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [disabled]
  )

  return {
    // TODO import useFocusable as well (needs to be focusable)
    tabIndex: disabled ? -1 : tabIndex,
    onKeyDown
  }
}
