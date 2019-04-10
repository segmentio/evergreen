import * as React from 'react'

import { ThemeConsumer } from './ThemeContext'

// HOC that uses ThemeConsumer.

export type PropsWithTheme<Props> = Props & { theme: { [key: string]: any } }

function withTheme<TProps>(
  WrappedComponent: React.ComponentType<PropsWithTheme<TProps>>
) {
  const render: React.SFC<TProps> = (props: TProps) => (
    <ThemeConsumer>
      {theme => <WrappedComponent theme={theme} {...props} />}
    </ThemeConsumer>
  )

  render.displayName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component'

  return render
}

export default withTheme
