import React from 'react'
import { ThemeConsumer } from './ThemeContext'

type Difference<A, B> = Pick<A, Exclude<keyof A, keyof B>>

interface ThemeProps {
  // TODO: type this
  theme: object
}

/**
 * HOC that uses ThemeConsumer.
 * @param {React.Component} Component - Component that gets theme.
 */
function withTheme<P extends ThemeProps>(Component: React.ComponentType<P>) {
  const displayName =
    Component.displayName || Component.name || 'Component'

  return class WithTheme extends React.Component<Difference<P, ThemeProps>> {
    static displayName = `withTheme(${displayName})`

    render() {
      return (
        <ThemeConsumer>
          {theme => <Component theme={theme} {...this.props as P} />}
        </ThemeConsumer>
      )
    }
  }
}

export default withTheme
