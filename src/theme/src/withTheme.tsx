import * as React from 'react'
import { ThemeConsumer } from './ThemeContext'
import { AnyObject } from '../../types/helper'

/**
 * HOC that uses ThemeConsumer.
 * @param {React.Component} WrappedComponent - Component that gets theme.
 */

export type PropsWithTheme<Props> = Props & { theme: AnyObject }

function withTheme<I>(
  WrappedComponent: React.ComponentType<PropsWithTheme<I>>
) {
  const render: React.SFC<I> = () => (
    <ThemeConsumer>
      {theme => <WrappedComponent theme={theme} {...this.props} />}
    </ThemeConsumer>
  )

  render.displayName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component'

  return render
}

export default withTheme
