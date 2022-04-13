import React, { memo, forwardRef } from 'react'
import cx from 'classnames'
import Box, { PolymorphicBoxProps } from 'ui-box'
import { Size } from '../../types'
import { useStyleConfig } from '../../hooks'
import removeUndefined from '../../lib/remove-undefined'

export interface UnorderedListOwnProps {
  /**
   * Size of the text used in a list item.
   */
  size?: Size
  /**
   * When passed, adds a icon before each list item in the list
   * You can override this on a individual list item.
   */
  icon?: React.ElementType | JSX.Element
  /**
   * The color of the icon in each list item in the list.
   */
  iconColor?: string
}

export type UnorderedListProps = PolymorphicBoxProps<'ul', UnorderedListOwnProps>

const emptyObject = {}

const internalStyles = {
  margin: 0,
  marginLeft: '1.1em',
  padding: 0,
  listStyle: 'disc'
}

const UnorderedList: React.FC<UnorderedListProps> = memo(
  forwardRef(function UnorderedList(props, ref) {
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

export default UnorderedList
