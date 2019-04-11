import cx from 'classnames'
import * as PropTypes from 'prop-types'
import * as React from 'react'

import { PropsWithTheme, withTheme } from '../../theme'
import Text, { TextProps } from './Text'

type Appearance = 'default' | 'minimal'

interface CodeProps extends TextProps {
  // The appearance of the code.
  appearance?: Appearance

  // Class name passed to the button. Only use if you know what you are doing
  className?: string
}

class Code extends React.PureComponent<PropsWithTheme<CodeProps>> {
  static propTypes = {
    ...Text.propTypes,
    appearance: PropTypes.oneOf(['default', 'minimal'])
      .isRequired as PropTypes.Validator<Appearance>,
    theme: PropTypes.object.isRequired,
    className: PropTypes.string
  }

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

export default withTheme<CodeProps>(Code)
