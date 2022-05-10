import React from 'react'

export default class Manager extends React.Component {
  state = {}

  _setState = (...args) => {
    this.setState(...args)
  }

  render() {
    return this.props.children({
      setState: this._setState,
      state: this.state,
    })
  }
}
