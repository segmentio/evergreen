import React from 'react'
import PropTypes from 'prop-types'

export default class Manager extends React.Component {
  static propTypes = {
    children: PropTypes.func
  }

  state = {}

  _setState = (...args) => {
    this.setState(...args)
  }

  render() {
    return this.props.children({
      setState: this._setState,
      state: this.state
    })
  }
}
