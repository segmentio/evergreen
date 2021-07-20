import React, { forwardRef, memo } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { useStyleConfig } from '../../hooks'
import { useTheme } from '../../theme'

const pseudoSelectors = {}
const internalStyles = {}

const Heading = memo(
  forwardRef(function Heading(props, ref) {
    const { className, color: colorProp = 'default', size = 500, ...restProps } = props
    const { className: themedClassName, ...styleProps } = useStyleConfig(
      'Heading',
      { size },
      pseudoSelectors,
      internalStyles
    )

    const { colors } = useTheme()

    const color = colorProp === 'none' || colorProp === 'default' ? 'default' : colorProp

    const themedColor = colors[color] || (colors.text && colors.text[color]) || color

    return (
      <Box
        is="h2"
        ref={ref}
        className={cx(themedClassName, className)}
        marginTop={0}
        marginBottom={0}
        color={themedColor}
        {...styleProps}
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
  size: PropTypes.oneOf([100, 200, 300, 400, 500, 600, 700, 800, 900])
}

export default Heading
