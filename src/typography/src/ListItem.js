import PropTypes from 'prop-types'
import React, { forwardRef, memo } from 'react'
import { IconWrapper } from '../../icons/src/IconWrapper'
import { minorScale } from '../../scales'
import Text from './Text'

const ListItem = memo(
  forwardRef(function ListItem(props, ref) {
    const { children, size, icon, iconColor, ...rest } = props

    let paddingLeft
    if (size === 300) paddingLeft = minorScale(1)
    if (size === 400) paddingLeft = minorScale(2)
    if (size === 500) paddingLeft = minorScale(2)
    if (size === 600) paddingLeft = minorScale(3)

    let iconTop
    if (size === 300) iconTop = 1
    if (size === 400) iconTop = 3
    if (size === 500) iconTop = 3
    if (size === 600) iconTop = 4

    let iconSize
    if (size === 300) iconSize = 12
    if (size === 400) iconSize = 14
    if (size === 500) iconSize = 14
    if (size === 600) iconSize = 16

    let iconLeft = -iconSize - 4
    if (size === 600) iconLeft = -iconSize

    return (
      <Text
        is="li"
        position="relative"
        marginY="0.5em"
        size={size}
        listStyleType={icon ? 'none' : undefined}
        paddingLeft={icon ? paddingLeft : undefined}
        ref={ref}
        {...rest}
      >
        {icon && (
          <IconWrapper
            icon={icon}
            color={iconColor}
            position="absolute"
            size={iconSize}
            left={iconLeft}
            top={iconTop}
          />
        )}
        {children}
      </Text>
    )
  })
)

ListItem.propTypes = {
  ...Text.propTypes,

  /**
   * When provided, adds a icon before the list item.
   */
  icon: PropTypes.oneOfType([PropTypes.elementType, PropTypes.element]),

  /**
   * The color of the icon.
   */
  iconColor: PropTypes.string
}

export default ListItem
