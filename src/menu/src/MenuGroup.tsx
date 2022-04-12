import React, { memo } from 'react'
import { Pane } from '../../layers'
import { PaneOwnProps } from "../../layers/src/Pane";
import { Heading } from '../../typography'

export interface MenuGroupProps extends Omit<PaneOwnProps, 'title'> {
    title?: React.ReactNode;
    children: React.ReactNode[] | React.ReactNode;
}

const MenuGroup: React.FC<MenuGroupProps> = memo(function MenuGroup(props) {
  const { children, title } = props

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

export default MenuGroup
