import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { useTheme } from '../../theme'

const IconWithRef = forwardRef((props, ref) => {
  const theme = useTheme()
  const SIZE_STANDARD = 16
  const SIZE_LARGE = 20

  const {
    color = 'currentColor',
    size = 16,
    name,
    title,
    svgPaths16,
    svgPaths20,
    ...svgProps
  } = props

  // Choose which pixel grid is most appropriate for given icon size
  const pixelGridSize = size >= SIZE_LARGE ? SIZE_LARGE : SIZE_STANDARD
  const pathStrings = pixelGridSize === SIZE_STANDARD ? svgPaths16 : svgPaths20
  const paths = pathStrings.map((d, i) => (
    // eslint-disable-next-line react/no-array-index-key
    <path key={i} d={d} fillRule="evenodd" />
  ))

  const viewBox = `0 0 ${pixelGridSize} ${pixelGridSize}`

  const style = svgProps.style || {}
  if (color) {
    Object.assign(style, { fill: theme.getIconColor(color) })
  }

  return (
    <Box
      is="svg"
      // To allow innerRef to be passed from the consumer this needs to be before svgProps
      innerRef={ref}
      {...svgProps}
      data-icon={name}
      style={style}
      width={size}
      height={size}
      viewBox={viewBox}
    >
      {title && <title>{title}</title>}
      {paths}
    </Box>
  )
})

IconWithRef.propTypes = {
  /**
   * Color of icon. Equivalent to setting CSS `fill` property.
   */
  color: PropTypes.string,

  /**
   * Size of the icon, in pixels.
   * Blueprint contains 16px and 20px SVG icon images,
   * and chooses the appropriate resolution based on this prop.
   */
  size: PropTypes.number,

  /**
   * Name of the icon
   */
  name: PropTypes.string,

  /**
   * Description string.
   * Browsers usually render this as a tooltip on hover, whereas screen
   * readers will use it for aural feedback.
   * By default, this is set to the icon's name for accessibility.
   */
  title: PropTypes.string,

  /**
   * CSS style properties.
   */
  style: PropTypes.object,

  svgPaths16: PropTypes.arrayOf(PropTypes.string).isRequired,

  svgPaths20: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default IconWithRef
