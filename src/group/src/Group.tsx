import React, { memo, forwardRef } from 'react'
import cx from 'classnames'
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
    // @ts-expect-error ts-migrate(2700) FIXME: Rest types may only be created from object types.
    const { children, className, size, ...restProps } = props

    const { className: themedClassName, ...styleProps } = useStyleConfig(
      'Group',
      { size },
      pseudoSelectors,
      internalStyles
    )

    const enhancedChildren = React.Children.map(children, child => {
      if (!React.isValidElement(child)) {
        return child
      }

      return React.cloneElement(child, {
        // Prefer more granularly defined props if present
        // @ts-expect-error ts-migrate(2339) FIXME: Property 'props' does not exist on type 'never'.
        size: child.props.size || size
      })
    })

    return (
      <Box className={cx(className, themedClassName)} role="group" ref={ref} {...styleProps} {...restProps}>
        {enhancedChildren}
      </Box>
    )
  })
)

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
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
