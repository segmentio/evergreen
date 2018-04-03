import React from 'react'
import PropTypes from 'prop-types'

/**
 * This component is a utility component to manage state in stories and examples.
 */
export default class Manager extends React.Component {
  static propTypes = {
    children: PropTypes.func
  }

  constructor(props) {
    super(props)
    this.state = {
      ...props
    }
  }

  render() {
    return this.props.children({
      setState: (...args) => {
        this.setState(...args)
      },
      state: this.state
    })
  }
}
