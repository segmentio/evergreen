import cx from 'classnames'
import * as React from 'react'

import { PropsWithTheme, withTheme } from '../../theme'
import Text, { ITextProps } from './Text'

type Appearance = 'default' | 'minimal'

interface IProps extends ITextProps {
  // The appearance of the code.
  appearance?: Appearance

  // Class name passed to the button. Only use if you know what you are doing
  className?: string
}

class Code extends React.PureComponent<PropsWithTheme<IProps>> {
  static defaultProps = {
    appearance: 'default' as Appearance
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

export default withTheme<IProps>(Code)
