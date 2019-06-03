import React from 'react'
import PropTypes from 'prop-types'

interface Props {
  children: (props: {
    setState: React.Component['setState']
    state: State
  }) => JSX.Element
}

interface State {
  [key: number]: any
  [key: string]: any
}

export default class Manager extends React.Component<Props, State> {
  static propTypes = {
    children: PropTypes.func
  }

  state = {}

  render() {
    return this.props.children({
      setState: (...args) => {
        this.setState(...args)
      },
      state: this.state
    })
  }
}
