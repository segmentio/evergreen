import * as React from 'react'
import { AnyFunction } from '../../types/helper'

interface IProps {
  children?: AnyFunction
}

// This component is a utility component to manage state in stories and examples.
export default class Manager extends React.Component<IProps, any> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      ...props
    }
  }

  render() {
    return this.props.children({
      setState: this.setState,
      state: this.state
    })
  }
}
