import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { useStyleConfig } from '../../hooks'

const pseudoSelectors = {}
const internalStyles = {}

const Label = memo(
  forwardRef(function Label(props, ref) {
    const { className, size = 400, ...restProps } = props

    const themedProps = useStyleConfig('Label', { size }, pseudoSelectors, internalStyles)

    return <Box is="label" ref={ref} className={className} {...themedProps} {...restProps} />
  })
)

Label.propTypes = {
  /**
   * Label composes Box as the base.
   */
  ...Box.propTypes,

  /**
   * The size of the label.
   */
  size: PropTypes.oneOf([100, 200, 300, 400, 500, 600, 700, 800, 900])
}

export default Label
