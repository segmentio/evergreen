import React, { useContext, memo } from 'react'
import PropTypes from 'prop-types'
import { StackingOrder } from '../../constants'
import StackingContext from './StackingContext'

const Stack = memo(function Stack({
  children,
  value = StackingOrder.STACKING_CONTEXT
}) {
  const previousValue = useContext(StackingContext)
  const currentValue = Math.max(value, previousValue)
  const nextValue = currentValue + 1

  return (
    <StackingContext.Provider value={nextValue}>
      {children(currentValue)}
    </StackingContext.Provider>
  )
})

Stack.propTypes = {
  /**
   * Function that takes the current z-index and returns a React Node.
   * (zIndex) => ReactNode.
   */
  children: PropTypes.func.isRequired,

  /**
   * Set the value of the stack. This will increment for children.
   */
  value: PropTypes.number
}

export default Stack
