import React from 'react'
import { useIsomorphicLayoutEffect } from './use-isomorphic-layout-effect'

/**
 * A React Ref that stores the latest value it is given (updated in useEffect's callback).
 */
export function useLatest(value) {
  const ref = React.useRef(value)

  useIsomorphicLayoutEffect(() => {
    ref.current = value
  })

  return ref
}
