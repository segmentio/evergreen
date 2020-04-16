import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import * as IconExports from '../../icons'

const { IconNameMapper, ...Icons } = IconExports

/**
 * This implementation is a remix of the Icon component in Blueprintjs:
 * https://github.com/palantir/blueprint/blob/813e93f2/packages/core/src/components/icon/icon.tsx#L15
 * Refer to the LICENSE for BlueprintJS here: https://github.com/palantir/blueprint/blob/develop/LICENSE
 */

export class Icon extends PureComponent {
  static SIZE_STANDARD = 16
  static SIZE_LARGE = 20

  static propTypes = {
    /**
     * Color of icon. Equivalent to setting CSS `fill` property.
     */
    color: PropTypes.string,

    /**
     * Name of a Blueprint UI icon, or an icon element, to render.
     * This prop is required because it determines the content of the component, but it can
     * be explicitly set to falsy values to render nothing.
     *
     * - If `null` or `undefined` or `false`, this component will render nothing.
     * - If given an `IconName` (a string literal union of all icon names),
     *   that icon will be rendered as an `<svg>` with `<path>` tags.
     * - If given a `JSX.Element`, that element will be rendered and _all other props on this component are ignored._
     *   This type is supported to simplify usage of this component in other Blueprint components.
     *   As a consumer, you should never use `<Icon icon={<element />}` directly; simply render `<element />` instead.
     */
    icon: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,

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
    style: PropTypes.object
  }

  render() {
    const { icon, ...iconProps } = this.props

    if (!icon) {
      return null
    }

    if (typeof icon !== 'string') {
      return icon
    }

    const iconName = IconNameMapper[icon]
    if (!iconName) {
      return null
    }

    const Component = Icons[iconName]
    if (!Component) {
      return null
    }

    return <Component {...iconProps} />
  }
}
