import React, { memo, forwardRef } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { useStyleConfig } from '../../hooks'
import removeUndefined from '../../lib/remove-undefined'

const emptyObject = {}

const internalStyles = {
  margin: 0,
  marginLeft: '1.1em',
  padding: 0,
  listStyle: 'disc'
}

const UnorderedList = memo(
  forwardRef(function UnorderedList(props, ref) {
    // @ts-expect-error ts-migrate(2700) FIXME: Rest types may only be created from object types.
    const { children, className, icon, iconColor, size = 400, ...rest } = props

    const { className: themedClassName, ...styleProps } = useStyleConfig('List', { size }, emptyObject, internalStyles)

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
          // @ts-expect-error ts-migrate(2339) FIXME: Property 'props' does not exist on type 'never'.
          ...child.props
        })
      )
    })

    return (
      <Box is="ul" className={cx(className, themedClassName)} {...styleProps} {...rest} ref={ref}>
        {enrichedChildren}
      </Box>
    )
  })
)

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
UnorderedList.propTypes = {
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type '<E ex... Remove this comment to see the full error message
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
