import React, { PureComponent, Validator } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { withTheme, Theme } from '../../theme'
import Text from './Text'

type Appearance = 'default' | 'minimal'

export interface CodeProps extends React.ComponentProps<typeof Text> {
  /**
   * The appearance of the code.
   */
  appearance: Appearance

  /**
   * Class name passed to the component.
   * Only use if you know what you are doing.
   */
  className?: string

  /**
   * Theme provided by ThemeProvider.
   */
  theme: Theme
}

class Code extends PureComponent<CodeProps> {
  static propTypes = {
    appearance: PropTypes.oneOf(['default', 'minimal']).isRequired as Validator<
      Appearance
    >,
    className: PropTypes.string,
    theme: PropTypes.object.isRequired as Validator<Theme>
  }

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
