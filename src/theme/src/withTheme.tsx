import React from 'react'
import { ThemeConsumer, Theme } from './ThemeContext'

type Difference<T, K> = Pick<T, Exclude<keyof T, keyof K>>

interface WithThemeProps {
  /**
   * The theme context from the ThemeProvider
   */
  theme: Theme
}

/**
 * HOC that injects the `theme` from the ThemeConsumer into the wrapper component.
 */
export function withTheme<P extends WithThemeProps>(
  Component: React.ComponentType<P>
): React.ComponentClass<Difference<P, WithThemeProps>, {}> {
  const displayName = Component.displayName || Component.name || 'Component'

  return class WithTheme extends React.Component<
    Difference<P, WithThemeProps>
  > {
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
