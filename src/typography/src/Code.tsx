import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { withTheme } from '../../theme'
import Text from './Text'

class Code extends PureComponent {
  static propTypes = {
    ...Text.propTypes,

    /**
     * The appearance of the code.
     */
    appearance: PropTypes.oneOf(['default', 'minimal']).isRequired,

    /**
     * Theme provided by ThemeProvider.
     */
    theme: PropTypes.object.isRequired,

    /**
     * Class name passed to the button.
     * Only use if you know what you are doing.
     */
    className: PropTypes.string
  }

  static defaultProps = {
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
