import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Pane } from '../../layers'
import { Heading } from '../../typography'

const MenuGroup = memo(function MenuGroup(props) {
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'title' does not exist on type '{ childre... Remove this comment to see the full error message
  const { children, title } = props

  return (
    // @ts-expect-error ts-migrate(2746) FIXME: This JSX tag's 'children' prop expects a single ch... Remove this comment to see the full error message
    <Pane paddingY={8}>
      {title && (
        // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
        <Heading size={100} marginX={16} marginY={8}>
          {title}
        </Heading>
      )}
      {children}
    </Pane>
  )
})

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'Named... Remove this comment to see the full error message
MenuGroup.propTypes = {
  /**
   * Title of the menu group.
   */
  title: PropTypes.node,

  /**
   * The children of the menu group.
   */
  children: PropTypes.node
}

export default MenuGroup
