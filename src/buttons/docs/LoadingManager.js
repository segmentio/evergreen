import React from 'react'
import PropTypes from 'prop-types'

export default class LoadingManager extends React.PureComponent {
  static propTypes = {
    children: PropTypes.func
  }

  state = {
    isLoading: false
  }

  setLoading = () => {
    this.setState({
      isLoading: true
    })

    window.setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 2000)
  }

  render() {
    return this.props.children({
      isLoading: this.state.isLoading,
      setLoading: this.setLoading
    })
  }
}
