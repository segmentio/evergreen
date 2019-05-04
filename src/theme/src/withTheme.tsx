import React from 'react'
import { ThemeConsumer } from './ThemeContext'

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>

interface WithThemeProps {
  // TODO: type this
  theme: object
}

/**
 * HOC that injects the `theme` from the ThemeConsumer into the wrapper component.
 */
export default function withTheme<P extends WithThemeProps>(Component: React.ComponentType<P>) {
  const displayName =
    Component.displayName || Component.name || 'Component'

  return class WithTheme extends React.Component<Omit<P, keyof WithThemeProps>> {
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
