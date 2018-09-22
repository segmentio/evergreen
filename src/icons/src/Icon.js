import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { withTheme } from '../../theme'

/**
 * This implementation is a remix of the Icon component in Blueprintjs:
 * https://github.com/palantir/blueprint/blob/813e93f2/packages/core/src/components/icon/icon.tsx#L15
 * Refer to the LICENSE for BlueprintJS here: https://github.com/palantir/blueprint/blob/develop/LICENSE
 */

class Icon extends PureComponent {
  static SIZE_STANDARD = 16
  static SIZE_LARGE = 20

  static propTypes = {
    /**
     * Color of icon. Equivalent to setting CSS `fill` property.
     */
    color: PropTypes.string,

    /**
     * Size of the icon, in pixels.
     * Blueprint contains 16px and 20px SVG icon images,
     * and chooses the appropriate resolution based on this prop.
     */
    size: PropTypes.number.isRequired,

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

    /**
     * Theme provided by ThemeProvider.
     */
    theme: PropTypes.object.isRequired,

    svgPaths16: PropTypes.arrayOf(PropTypes.string).isRequired,

    svgPaths20: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  static defaultProps = {
    size: 16,
    color: 'currentColor'
  }

  render() {
    const {
      theme,
      color,
      size,
      title,
      svgPaths16,
      svgPaths20,
      ...svgProps
    } = this.props
    let { style = {} } = this.props

    // Choose which pixel grid is most appropriate for given icon size
    const pixelGridSize =
      size >= Icon.SIZE_LARGE ? Icon.SIZE_LARGE : Icon.SIZE_STANDARD
    const pathStrings = Icon.SIZE_STANDARD ? svgPaths16 : svgPaths20
    const paths = pathStrings.map((d, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <path key={i} d={d} fillRule="evenodd" />
    ))

    const viewBox = `0 0 ${pixelGridSize} ${pixelGridSize}`

    if (color) {
      style = { ...style, fill: theme.getIconColor(color) }
    }

    return (
      <Box
        is="svg"
        {...svgProps}
        style={style}
        width={size}
        height={size}
        viewBox={viewBox}
      >
        {title ? <title>{title}</title> : null}
        {paths}
      </Box>
    )
  }
}

export default withTheme(Icon)
