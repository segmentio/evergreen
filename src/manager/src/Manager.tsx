import React from 'react'

interface RenderProps {
  state: any
  setState: (...args: any[]) => any
}

interface ManagerProps {
  children: (args: RenderProps) => React.ReactNode
}

/**
 * This component is a utility component to manage state in stories and examples.
 */
export default class Manager extends React.Component<ManagerProps, any> {
  state = {
    ...this.props
  }

  render() {
    return this.props.children({
      setState: this.setState.bind(this),
      state: this.state
    })
  }
}
