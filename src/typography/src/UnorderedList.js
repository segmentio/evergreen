import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import removeUndefined from '../../lib/remove-undefined'

const UnorderedList = memo(
  forwardRef(function UnorderedList(props, ref) {
    const { children, size = 400, icon, iconColor, ...rest } = props

    const enrichedChildren = React.Children.map(children, child => {
      if (!React.isValidElement(child)) {
        return child
      }

      return React.cloneElement(
        child,
        removeUndefined({
          icon,
          size,
          iconColor,
          // Prefer more granularly defined props if present
          ...child.props
        })
      )
    })

    let marginLeft
    if (size === 300) marginLeft = 16
    if (size === 400) marginLeft = 18
    if (size === 500) marginLeft = 18
    if (size === 600) marginLeft = 20

    return (
      <Box
        is="ul"
        listStyle="disc"
        padding={0}
        margin={0}
        marginLeft={marginLeft}
        {...rest}
        ref={ref}
      >
        {enrichedChildren}
      </Box>
    )
  })
)

UnorderedList.propTypes = {
  ...Box.propTypes,

  /**
   * Size of the text used in a list item.
   * Can be: 300, 400, 500, 600.
   */
  size: PropTypes.oneOf([300, 400, 500, 600]),

  /**
   * When passed, adds a icon before each list item in the list
   * You can override this on a individual list item.
   */
  icon: PropTypes.oneOfType([PropTypes.elementType, PropTypes.element]),

  /**
   * The color of the icon in each list item in the list.
   */
  iconColor: PropTypes.string
}

export default UnorderedList
