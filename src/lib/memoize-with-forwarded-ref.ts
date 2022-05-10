import { forwardRef, memo, ForwardRefRenderFunction } from 'react'

const memoizeWithForwardedRef = <TProps, TType>(render: ForwardRefRenderFunction<TType, TProps>) =>
  memo(forwardRef(render))

export default memoizeWithForwardedRef
