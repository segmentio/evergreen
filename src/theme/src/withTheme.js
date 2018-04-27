import React from 'react'
import { ThemeConsumer } from './ThemeContext'

/**
 * HOC that uses ThemeConsumer.
 * @param {React.Component} WrappedComponent - Component that gets theme.
 * @param {function} [selector] - Optional selector that returns props to spread.
 */
function withTheme(WrappedComponent, selector = theme => ({ theme })) {
  return class extends React.Component {
    render() {
      return (
        <ThemeConsumer>
          {theme => <WrappedComponent {...selector(theme)} {...this.props} />}
        </ThemeConsumer>
      )
    }
  }
}

export default withTheme
