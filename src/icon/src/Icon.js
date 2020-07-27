import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ReactIs from 'react-is'
import * as IconExports from '../../icons'

const { IconNameMapper, ...icons } = IconExports

export class Icon extends PureComponent {
  static SIZE_STANDARD = 16
  static SIZE_LARGE = 20

  static propTypes = {
    /**
     * Color of icon. Equivalent to setting CSS `fill` property.
     */
    color: PropTypes.string,

    /**
     * Name of the icon, or an icon element to render.
     * This prop is required because it determines the content of the component, but it can
     * be explicitly set to falsy values to render nothing.
     *
     * - If `null` or `undefined` or `false`, this component will render nothing.
     * - If given an IconName string literal, it will render the corresponding Evergreen icon
     * - If given a valid React element reference, it will be rendered with the other icon props
     * - Any other value will be returned as a pass-through (as if you didn't use `<Icon />`)
     */
    icon: PropTypes.oneOfType([
      PropTypes.elementType,
      PropTypes.element,
      PropTypes.string
    ]).isRequired,

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

    if (typeof icon === 'string') {
      const iconName = IconNameMapper[icon] || ''
      const Component = icons[iconName]
      if (Component) {
        return <Component {...iconProps} />
      }
    }

    if (ReactIs.isValidElementType(icon)) {
      const Component = icon
      return <Component {...iconProps} />
    }

    if (React.isValidElement(icon)) {
      return React.cloneElement(icon, iconProps)
    }

    return icon
  }
}
