import { useState, useCallback } from 'react'

export function useForceUpdate() {
  // eslint-disable-next-line no-unused-vars
  const [_, setValue] = useState()
  return useCallback(() => setValue({}), [setValue])
}
