import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { useTheme } from '../../theme'

const Heading = memo(
  forwardRef((props, ref) => {
    const theme = useTheme()
    const { marginTop, size, ...restProps } = props
    const {
      marginTop: defaultMarginTop,
      ...headingStyle
    } = theme.getHeadingStyle(size)

    let finalMarginTop = marginTop
    if (marginTop === 'default') {
      finalMarginTop = defaultMarginTop
    }

    return (
      <Box
        is="h2"
        innerRef={ref}
        marginTop={finalMarginTop || 0}
        marginBottom={0}
        {...headingStyle}
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

Heading.defaultProps = {
  size: 500
}

export default Heading
