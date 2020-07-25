import { useState, useEffect, useRef } from 'react'
import safeInvoke from '../lib/safe-invoke'

export const TRANSITION_STATES = {
  unmounted: 'unmounted',
  entering: 'entering',
  entered: 'entered',
  exiting: 'exiting',
  exited: 'exited'
}

/**
 * React hook that replaces react-transition-group functionality
 * @param {boolean} isActive
 * @param {number} timeout
 * @param {object} [options]
 */
export function useTransition(isActive, timeout, options = {}) {
  const unmountOnExit = Boolean(options.unmountOnExit)
  const onEnter = useRef(options.onEnter || null)
  const onExit = useRef(options.onExit || null)

  useEffect(() => {
    onEnter.current = options.onEnter
    onExit.current = options.onExit
  }, [options.onEnter, options.onExit])

  const [state, setState] = useState(() => {
    if (isActive) {
      // Simulates Transition's `appear={true}` prop
      return TRANSITION_STATES.exited
    }

    return unmountOnExit
      ? TRANSITION_STATES.unmounted
      : TRANSITION_STATES.exited
  })

  useEffect(() => {
    if (isActive) {
      switch (state) {
        case TRANSITION_STATES.unmounted:
          setState(TRANSITION_STATES.exited)
          break
        case TRANSITION_STATES.exited:
        case TRANSITION_STATES.exiting:
          safeInvoke(onEnter.current)
          setState(TRANSITION_STATES.entering)
          break
        case TRANSITION_STATES.entering: {
          const timer = setTimeout(() => {
            setState(TRANSITION_STATES.entered)
          }, timeout)

          return () => clearTimeout(timer)
        }

        default:
          break
      }
    } else {
      switch (state) {
        case TRANSITION_STATES.entered:
        case TRANSITION_STATES.entering:
          safeInvoke(onExit.current)
          setState(TRANSITION_STATES.exiting)
          break
        case TRANSITION_STATES.exiting: {
          const timer = setTimeout(() => {
            setState(TRANSITION_STATES.exited)
          }, timeout)

          return () => clearTimeout(timer)
        }

        case TRANSITION_STATES.exited: {
          if (unmountOnExit) {
            setState(TRANSITION_STATES.unmounted)
          }

          break
        }

        default:
          break
      }
    }
  }, [isActive, state, timeout, unmountOnExit])

  return state
}
