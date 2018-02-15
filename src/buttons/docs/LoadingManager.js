import React from 'react'
import PropTypes from 'prop-types'

export default class LoadingManager extends React.PureComponent {
  static propTypes = {
    children: PropTypes.func
  }

  state = {
    isLoading: false
  }

  render() {
    return this.props.children({
      isLoading: this.state.isLoading,
      setLoading: () => {
        this.setState({
          isLoading: true
        })

        window.setTimeout(() => {
          this.setState({
            isLoading: false
          })
        }, 2000)
      }
    })
  }
}
