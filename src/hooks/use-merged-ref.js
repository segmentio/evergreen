import React from 'react'

function setRef(ref, node) {
  if (typeof ref === 'function') {
    ref(node)
  } else if (ref && 'current' in ref) {
    ref.current = node
  }
}

/**
 * React hook that merges up to two React refs into a single memoized function React Ref
 * @param {import('react').Ref<any>} refA
 * @param {import('react').Ref<any>} [refB]
 */
export function useMergedRef(refA, refB) {
  return React.useMemo(() => {
    if (!refA && !refB) {
      return null
    }

    return node => {
      setRef(refA, node)
      setRef(refB, node)
    }
  }, [refA, refB])
}
