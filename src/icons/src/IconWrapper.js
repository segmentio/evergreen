import PropTypes from 'prop-types'
import React, { forwardRef, memo } from 'react'
import Box from 'ui-box'

/**
 * This is an internal helper component for rendering custom or Evergreen icons
 * Box props are applied to the outer Box container, and Evergreen icon-specific props are added to the icon element.
 */
export const IconWrapper = memo(
  forwardRef((props, ref) => {
    const { icon, size, title, color, ...boxProps } = props

    if (!icon || typeof icon === 'string' || !React.isValidElement(icon)) {
      return null
    }

    // Used as a short-hand to add props to an icon component. This component should not be used externally.
    const iconWithProps = React.cloneElement(icon, {
      size,
      title,
      color,
      ...icon.props
    })

    return (
      <Box display="inline-flex" {...boxProps} ref={ref}>
        {iconWithProps}
      </Box>
    )
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
   *
   *   As a consumer, you should never use `<IconWrapper icon={<element />}` directly; simply render `<element />` instead.
   */
  icon: PropTypes.node,

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
