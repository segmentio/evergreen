import React, { forwardRef, memo } from 'react'
import PropTypes from 'prop-types'
import { useStyleConfig } from '../../hooks'
import Text from './Text'

const pseudoSelectors = {}
const internalStyles = {}

const Code = memo(
  forwardRef(function Code(props, ref) {
    const { appearance = 'default', className, ...restProps } = props

    const themedProps = useStyleConfig('Code', { appearance }, pseudoSelectors, internalStyles)

    return <Text is="code" ref={ref} {...themedProps} fontFamily="mono" className={className} {...restProps} />
  })
)

Code.propTypes = {
  ...Text.propTypes,

  /**
   * The appearance of the code.
   */
  appearance: PropTypes.oneOf(['default', 'minimal']),

  /**
   * Class name passed to the Code component.
   * Only use if you know what you are doing.
   */
  className: PropTypes.string
}

export default Code
