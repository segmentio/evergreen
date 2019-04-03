/* eslint react/no-array-index-key: 0, eqeqeq: 0, no-eq-null: 0 */
import * as React from 'react'
// import PropTypes from 'prop-types'
import Box, { BoxProps } from 'ui-box'
import {
  IconName,
  IconNames,
  IconSvgPaths16,
  IconSvgPaths20
} from '@blueprintjs/icons'
import { withTheme, PropsWithTheme } from '../../theme'
import { AnyObject } from '../../types/helper'

export { IconNames }

/**
 * This implementation is a remix of the Icon component in Blueprintjs:
 * https://github.com/palantir/blueprint/blob/813e93f2/packages/core/src/components/icon/icon.tsx#L15
 * Refer to the LICENSE for BlueprintJS here: https://github.com/palantir/blueprint/blob/develop/LICENSE
 */

interface IProps extends BoxProps {
  color?: string
  icon: IconName
  size: number
  title?: string
  style?: AnyObject
}

class Icon extends React.PureComponent<PropsWithTheme<IProps>> {
  static SIZE_STANDARD = 16

  static SIZE_LARGE = 20

  static defaultProps = {
    size: 16,
    color: 'currentColor'
  }

  renderSvgPaths = (pathsSize: number, iconName: IconName) => {
    const svgPathsRecord =
      pathsSize === Icon.SIZE_STANDARD ? IconSvgPaths16 : IconSvgPaths20
    const pathStrings = svgPathsRecord[iconName]

    if (pathStrings == null) {
      return null
    }

    return pathStrings.map((d: any, i: React.Key) => (
      <path key={i} d={d} fillRule="evenodd" />
    ))
  }

  render() {
    const { theme, color, icon, size, title, ...svgProps } = this.props
    let { style = {} } = this.props

    if (icon == null) {
      return null
    }

    if (typeof icon !== 'string') {
      return icon
    }

    // Choose which pixel grid is most appropriate for given icon size
    const pixelGridSize =
      size >= Icon.SIZE_LARGE ? Icon.SIZE_LARGE : Icon.SIZE_STANDARD
    const paths = this.renderSvgPaths(pixelGridSize, icon)
    if (paths == null) {
      return null
    }

    const viewBox = `0 0 ${pixelGridSize} ${pixelGridSize}`

    if (color != null) {
      style = { ...style, fill: theme.getIconColor(color) }
    }

    return (
      <Box
        is="svg"
        {...svgProps}
        style={style}
        data-icon={icon}
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
