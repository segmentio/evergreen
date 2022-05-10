import React, { useContext, memo } from 'react'
import { StackingOrder } from '../../constants'
import StackingContext from './StackingContext'

export interface StackProps {
  children: (zIndex: number) => React.ReactNode
  value?: number
}

const Stack: React.FC<StackProps> = memo(function Stack({ children, value = StackingOrder.STACKING_CONTEXT }) {
  const previousValue = useContext(StackingContext)
  const currentValue = Math.max(value, previousValue)
  const nextValue = currentValue + 1

  return <StackingContext.Provider value={nextValue}>{children(currentValue)}</StackingContext.Provider>
})

export default Stack
