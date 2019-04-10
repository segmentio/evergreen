import * as PropTypes from 'prop-types'
import * as React from 'react'

interface IProps {
  children?: (...args: any[]) => any
  [key: string]: any
}

// This component is a utility component to manage state in stories and examples.
export default class Manager extends React.Component<IProps, any> {
  static propTypes = {
    children: PropTypes.func
  }

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
