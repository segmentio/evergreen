import React, { forwardRef, memo } from 'react'
import PropTypes from 'prop-types'
import ReactIs from 'react-is'

/**
 * This is an internal helper component for rendering custom or Evergreen icons
 * Box props are applied to the outer Box container, and Evergreen icon-specific props are added to the icon element.
 */
export const IconWrapper = memo(
  forwardRef(function IconWrapper({ icon, ...props }, ref) {
    if (!icon || typeof icon === 'string') {
      return null
    }

    let iconWithProps = null
    if (ReactIs.isValidElementType(icon)) {
      const Component = icon
      iconWithProps = <Component ref={ref} {...props} />
    } else if (React.isValidElement(icon)) {
      iconWithProps = React.cloneElement(icon, { ...props, ...icon.props, ref })
    }

    return iconWithProps
  })
)

IconWrapper.propTypes = {
  /**
   * Color of icon. Equivalent to setting CSS `fill` property.
   */
  color: PropTypes.string,

  /**
   * The icon component - whether an Evergreen icon or a custom icon node:
   *
   * - If `null` or `undefined` or `false`, this component will render nothing.
   * - If given a `JSX.Element`, that element will be rendered, with size/color/title props cloned into it
   * - If given a React element type, it will be rendered with the other icon props
   *   As a consumer, you should never use `<IconWrapper icon={<element />}` directly; simply render `<element />` instead.
   */
  icon: PropTypes.oneOfType([PropTypes.elementType, PropTypes.element])
    .isRequired,

  /**
   * Size of the icon, in pixels.
   * Icons contains 16px and 20px SVG icon paths,
   * and chooses the appropriate resolution based on this prop.
   */
  size: PropTypes.number,

  /**
   * Description string.
   * Browsers usually render this as a tooltip on hover, whereas screen
   * readers will use it for aural feedback.
   * By default, this is set to the icon's name for accessibility.
   */
  title: PropTypes.string
}
