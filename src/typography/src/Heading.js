import React, { forwardRef, memo } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import useHeadingStyle from '../../theme/src/hooks/useHeadingStyle'

const Heading = memo(
  forwardRef(function Heading(props, ref) {
    const { size = 500, ...restProps } = props
    const headingStyles = useHeadingStyle(size)

    return (
      <Box
        is="h2"
        ref={ref}
        marginTop={0}
        marginBottom={0}
        {...headingStyles}
        {...restProps}
      />
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
  size: PropTypes.oneOf([100, 200, 300, 400, 500, 600, 700, 800, 900]),

  /**
   * Pass `default` to use the default margin top for that size.
   */
  marginTop: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
    PropTypes.string
  ])
}

export default Heading
