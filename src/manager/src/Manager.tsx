import React from 'react'

interface RenderProps {
  state: State
  setState: React.Component['setState']
}

interface ManagerProps {
  children: (args: RenderProps) => React.ReactNode
  [key: string]: any
  [key: number]: any
}

interface State {
  [key: string]: any
  [key: number]: any
}

/**
 * This component is a utility component to manage state in stories and examples.
 */
export default class Manager extends React.Component<ManagerProps, State> {
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
