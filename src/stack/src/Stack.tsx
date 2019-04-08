import * as PropTypes from 'prop-types'
import * as React from 'react'
import { StackingOrder } from '../../constants'
import StackingContext from './StackingContext'

interface IProps {
  // Function that takes the current z-index and returns a React Node.
  children: (zIndex: number) => React.ReactNode

  // Set the value of the stack. This will increment for children.
  value?: number
}

export default class Stack extends React.PureComponent<IProps> {
  static propTypes = {
    children: PropTypes.func.isRequired,
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
