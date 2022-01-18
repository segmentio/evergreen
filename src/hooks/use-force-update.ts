import { useState, useCallback } from 'react'

export function useForceUpdate() {
  // eslint-disable-next-line no-unused-vars
  const [_, setValue] = useState()
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type '{}' is not assignable to paramet... Remove this comment to see the full error message
  return useCallback(() => setValue({}), [setValue])
}
