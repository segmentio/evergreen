import * as React from 'react'
import { ThemeConsumer } from './ThemeContext'
import { AddOptionalTo, PropsOf } from '../../types/helper'

/**
 * HOC that uses ThemeConsumer.
 * @param {React.Component} WrappedComponent - Component that gets theme.
 */
function withTheme<C extends React.ComponentType<any>>(WrappedComponent: C) {
  const render: React.SFC<AddOptionalTo<PropsOf<C>, 'theme'>> = () => (
    <ThemeConsumer>
      {theme => <WrappedComponent theme={theme} {...this.props} />}
    </ThemeConsumer>
  )

  render.displayName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component'

  return render
}

export default withTheme
