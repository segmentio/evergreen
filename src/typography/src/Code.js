import React, { forwardRef, memo } from 'react'
import PropTypes from 'prop-types'
import useStyleConfig from '../../hooks/use-style-config'
import Text from './Text'

const pseudoSelectors = {}
const internalStyles = {}

const Code = memo(
  forwardRef(function Code(props, ref) {
    const { className, appearance = 'default', ...restProps } = props

    const styleProps = useStyleConfig(
      'Code',
      { appearance },
      pseudoSelectors,
      internalStyles
    )

    return (
      <Text
        is="code"
        ref={ref}
        className={className}
        fontFamily="mono"
        {...styleProps}
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
