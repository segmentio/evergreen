import React, { forwardRef, memo } from 'react'
import ReactIs from 'react-is'
import Box, { BoxProps } from 'ui-box'
import warning from '../../lib/warning'

export interface IconWrapperProps extends BoxProps<'svg'> {
  /**
   * Color of icon. Equivalent to setting CSS `fill` property.
   */
  color?: string
  /**
   * The icon component - whether an Evergreen icon or a custom icon node:
   *
   * - If `null` or `undefined` or `false`, this component will render nothing.
   * - If given a `JSX.Element`, that element will be rendered, with size/color/title props cloned into it
   * - If given a React element type, it will be rendered with the other icon props
   *   As a consumer, you should never use `<IconWrapper icon={<element />}` directly; simply render `<element />` instead.
   */
  icon?: React.ElementType | JSX.Element | null | false
  /**
   * Size of the icon, in pixels.
   * Blueprint contains 16px and 20px SVG icon images,
   * and chooses the appropriate resolution based on this prop.
   */
  size?: number
  /**
   * Description string.
   * Browsers usually render this as a tooltip on hover, whereas screen
   * readers will use it for aural feedback.
   * By default, this is set to the icon's name for accessibility.
   */
  title?: string
}

/**
 * This is an internal helper component for rendering custom or Evergreen icons
 * Box props are applied to the outer Box container, and Evergreen icon-specific props are added to the icon element.
 */
export const IconWrapper: React.FC<IconWrapperProps> = memo(
  forwardRef(function Icon({ color, icon, size, title, ...props }, ref) {
    warning(typeof icon === 'string', 'Icon prop should be passed a component reference instead of a string')

    if (!icon || typeof icon === 'string') {
      return null
    }

    const iconProps = {
      color,
      size,
      title,
    }

    let iconWithProps = null
    if (ReactIs.isValidElementType(icon)) {
      const Component: React.ElementType<any> = icon
      iconWithProps = <Component ref={ref} {...iconProps} />
    } else if (React.isValidElement(icon)) {
      iconWithProps = React.cloneElement(icon, { ...iconProps, ...(icon as React.ReactElement).props, ref })
    }

    return (
      <Box display="inline-flex" {...props}>
        {iconWithProps}
      </Box>
    )
  })
)
