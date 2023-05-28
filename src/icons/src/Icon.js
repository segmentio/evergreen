import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { useStyleConfig } from '../../hooks'

const pseudoSelectors = {}
const internalStyles = {}

const Icon = forwardRef(function Icon(
  { className, color = 'currentColor', name, size = 16, svgPaths16, svgPaths20, title, ...svgProps },
  ref
) {
  const themedProps = useStyleConfig('Icon', { color }, pseudoSelectors, internalStyles)
  const SIZE_STANDARD = 16
  const SIZE_LARGE = 20

  // Choose which pixel grid is most appropriate for given icon size
  const pixelGridSize = size >= SIZE_LARGE ? SIZE_LARGE : SIZE_STANDARD
  const pathStrings = pixelGridSize === SIZE_STANDARD ? svgPaths16 : svgPaths20
  const paths = pathStrings.map((d, i) => (
    // eslint-disable-next-line react/no-array-index-key
    <path key={i} d={d} fillRule="evenodd" />
  ))

  const viewBox = `0 0 ${pixelGridSize} ${pixelGridSize}`

  return (
    <Box
      is="svg"
      ref={ref}
      className={className}
      {...themedProps}
      {...svgProps}
      data-icon={name}
      width={size}
      height={size}
      viewBox={viewBox}
    >
      {title && <title>{title}</title>}
      {paths}
    </Box>
  )
})

Icon.propTypes = {
  /**
   * Class name passed to the component.
   * Only use if you know what you are doing.
   */
  className: PropTypes.string,

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

  svgPaths16: PropTypes.arrayOf(PropTypes.string).isRequired,

  svgPaths20: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Icon
