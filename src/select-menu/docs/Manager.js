import React from 'react'
import PropTypes from 'prop-types'

export default class Manager extends React.Component {
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
