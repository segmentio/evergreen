import React from 'react'

export default class DialogManager extends React.PureComponent {
  state = {
    isShown: false,
    isLoading: false,
  }

  render() {
    return this.props.children({
      isShown: this.state.isShown,
      isLoading: this.state.isLoading,
      confirmLoading: () => {
        this.setState({
          isLoading: true,
        })

        window.setTimeout(() => {
          this.setState({
            isShown: false,
          })
        }, 2000)
      },
      show: () =>
        this.setState({
          isShown: true,
        }),
      hide: () =>
        this.setState({
          isShown: false,
          isLoading: false,
        }),
    })
  }
}
