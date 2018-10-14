import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { StackingOrder } from '../../constants'
import StackingContext from './StackingContext'

export default class Stack extends PureComponent {
  static propTypes = {
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

  static defaultProps = {
    value: StackingOrder.STACKING_CONTEXT
  }

  render() {
    const { children, value } = this.props
    return (
      <StackingContext.Consumer>
        {previousValue => {
          const currentValue = Math.max(value, previousValue)
          const nextValue = currentValue + 1
          return (
            <StackingContext.Provider value={nextValue}>
              {children(currentValue)}
            </StackingContext.Provider>
          )
        }}
      </StackingContext.Consumer>
    )
  }
}
