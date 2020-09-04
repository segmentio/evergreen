import React, { forwardRef, memo } from 'react'
import PropTypes from 'prop-types'
import useCodeAppearance from '../../theme/src/hooks/useCodeAppearance'
import Text from './Text'

const Code = memo(
  forwardRef(function Code(props, ref) {
    const { className, appearance = 'default', ...restProps } = props

    const { boxProps } = useCodeAppearance({ appearance })

    return (
      <Text
        is="code"
        ref={ref}
        className={className}
        fontFamily="mono"
        {...boxProps}
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
