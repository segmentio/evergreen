import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { useStyleConfig } from '../../hooks'

const pseudoSelectors = {
  _child: '& > *',
  _firstChild: '& > :first-child:not(:last-child)',
  _middleChild: '& > :not(:first-child):not(:last-child)',
  _lastChild: '& > :last-child:not(:first-child)'
}

const internalStyles = {
  display: 'inline-flex'
}

/**
 * Accessible `Group` component to identify a set of inputs/elements. Implements the WAI-ARIA Group Role
 * @see {@link https://www.w3.org/TR/wai-aria-1.1/#group}
 */
const Group = memo(
  forwardRef(function Group(props, ref) {
    const { children, className, size, ...restProps } = props

    const themedProps = useStyleConfig('Group', { size }, pseudoSelectors, internalStyles)

    const enhancedChildren = React.Children.map(children, child => {
      if (!React.isValidElement(child)) {
        return child
      }

      return React.cloneElement(child, {
        // Prefer more granularly defined props if present
        size: child.props.size || size
      })
    })

    return (
      <Box className={className} role="group" ref={ref} {...themedProps} {...restProps}>
        {enhancedChildren}
      </Box>
    )
  })
)

Group.propTypes = {
  children: PropTypes.node.isRequired,

  /**
   * Class name passed to the component.
   * Only use if you know what you are doing.
   */
  className: PropTypes.string,

  /**
   * The size passed down to children (for consistency)
   */
  size: PropTypes.oneOf(['small', 'medium', 'large'])
}

export default Group
