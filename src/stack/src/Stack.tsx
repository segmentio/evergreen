import React, { useContext, memo } from 'react'
import PropTypes from 'prop-types'
import { StackingOrder } from '../../constants'
import StackingContext from './StackingContext'

// @ts-expect-error ts-migrate(2339) FIXME: Property 'value' does not exist on type '{ childre... Remove this comment to see the full error message
const Stack = memo(function Stack({ children, value = StackingOrder.STACKING_CONTEXT }) {
  const previousValue = useContext(StackingContext)
  const currentValue = Math.max(value, previousValue)
  const nextValue = currentValue + 1

  // @ts-expect-error ts-migrate(2349) FIXME: This expression is not callable.
  return <StackingContext.Provider value={nextValue}>{children(currentValue)}</StackingContext.Provider>
})

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'Named... Remove this comment to see the full error message
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
