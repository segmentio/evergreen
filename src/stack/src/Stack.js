import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
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

  render() {
    const { children, value } = this.props
    return (
      <StackingContext.Consumer>
        {previousValue => {
          const currentValue = Math.max(value, previousValue)
          return (
            <StackingContext.Provider value={currentValue}>
              <StackingContext.Consumer>
                {consumerValue => {
                  const nextValue = currentValue + 1
                  return (
                    <StackingContext.Provider value={nextValue}>
                      {children(consumerValue)}
                    </StackingContext.Provider>
                  )
                }}
              </StackingContext.Consumer>
            </StackingContext.Provider>
          )
        }}
      </StackingContext.Consumer>
    )
  }
}
