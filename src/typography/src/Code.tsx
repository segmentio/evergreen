import React, { PureComponent } from 'react'
import cx from 'classnames'
import { withTheme, Theme } from '../../theme'
import Text from './Text'

interface CodeProps extends React.ComponentProps<typeof Text> {
  /**
   * The appearance of the code.
   */
  appearance: 'default' | 'minimal'

  /**
   * Class name passed to the button.
   * Only use if you know what you are doing.
   */
  className?: string

  /**
   * Theme provided by ThemeProvider.
   */
  theme: Theme
}

class Code extends PureComponent<CodeProps> {
  static defaultProps: Partial<CodeProps> = {
    appearance: 'default'
  }

  render() {
    const { theme, className, appearance, ...props } = this.props

    const {
      className: themedClassName = '',
      ...themeProps
    } = theme.getCodeProps(appearance)

    return (
      <Text
        is="code"
        className={cx(className, themedClassName)}
        fontFamily="mono"
        {...themeProps}
        {...props}
      />
    )
  }
}

export default withTheme(Code)
