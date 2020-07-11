import PropTypes from 'prop-types'
import React, { forwardRef, memo } from 'react'
import { IconWrapper } from '../../icons/src/IconWrapper'
import { majorScale } from '../../scales'
import Text from './Text'

const ListItem = memo(
  forwardRef((props, ref) => {
    const { children, size, icon, ...rest } = props

    let paddingLeft
    if (size === 300) paddingLeft = 4
    if (size === 400) paddingLeft = 8
    if (size === 500) paddingLeft = 8
    if (size === 600) paddingLeft = 12

    let iconTop
    if (size === 300) iconTop = 1
    if (size === 400) iconTop = 3
    if (size === 500) iconTop = 3
    if (size === 600) iconTop = 4

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
            position="absolute"
            left={majorScale(-2)}
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
  icon: PropTypes.node
}

export default ListItem
