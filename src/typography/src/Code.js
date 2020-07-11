import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { forwardRef, memo } from 'react'
import { useTheme } from '../../theme'
import Text from './Text'

const Code = memo(
  forwardRef((props, ref) => {
    const theme = useTheme()
    const { className, appearance = 'default', ...restProps } = props

    const {
      className: themedClassName = '',
      ...themeProps
    } = theme.getCodeProps(appearance)

    return (
      <Text
        is="code"
        ref={ref}
        className={cx(className, themedClassName)}
        fontFamily="mono"
        {...themeProps}
        {...restProps}
      />
    )
  })
)

Code.propTypes = {
  ...Text.propTypes,

  /**
   * The appearance of the code.
   */
  appearance: PropTypes.oneOf(['default', 'minimal']),

  /**
   * Class name passed to the button.
   * Only use if you know what you are doing.
   */
  className: PropTypes.string
}

export default Code
