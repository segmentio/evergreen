import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Pane } from '../../layers'
import { Heading } from '../../typography'

const MenuGroup = memo(function MenuGroup(props) {
  const { title, children } = props

  return (
    <Pane paddingY={8}>
      {title && (
        <Heading size={100} marginX={16} marginY={8}>
          {title}
        </Heading>
      )}
      {children}
    </Pane>
  )
})

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
