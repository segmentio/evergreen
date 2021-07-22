import React from 'react'

/**
 * A React Ref that stores the latest value it is given (updated in useEffect's callback).
 * @return {{ readonly current: any }}
 */
export function useLatest(value) {
  const ref = React.useRef(value)
  ref.current = value
  return ref
}
