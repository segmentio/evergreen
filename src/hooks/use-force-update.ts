import { useState, useCallback } from 'react'

export function useForceUpdate() {
  const [, setValue] = useState({})
  return useCallback(() => setValue({}), [setValue])
}
