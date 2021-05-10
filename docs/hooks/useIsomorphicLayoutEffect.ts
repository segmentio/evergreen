import { useLayoutEffect, useEffect } from 'react'

const useIsomorphicLayoutEffect = typeof document !== 'undefined' ? useLayoutEffect : useEffect

export default useIsomorphicLayoutEffect
