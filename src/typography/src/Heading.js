import React, { forwardRef, memo } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { useStyleConfig } from '../../hooks'

const pseudoSelectors = {}
const internalStyles = {}

const Heading = memo(
  forwardRef(function Heading(props, ref) {
    const { className, size = 500, ...restProps } = props
    const themedProps = useStyleConfig('Heading', { size }, pseudoSelectors, internalStyles)

    return (
      <Box is="h2" ref={ref} className={className} marginTop={0} marginBottom={0} {...themedProps} {...restProps} />
    )
  })
)

Heading.propTypes = {
  /**
   * Heading composes Box as the base.
   */
  ...Box.propTypes,

  /**
   * The size of the heading.
   */
  size: PropTypes.oneOf([100, 200, 300, 400, 500, 600, 700, 800, 900])
}

export default Heading
