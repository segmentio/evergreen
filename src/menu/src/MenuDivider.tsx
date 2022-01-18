import React from 'react'
import { Pane } from '../../layers'

const MenuDivider = () => {
  // @ts-expect-error ts-migrate(2322) FIXME: Type 'boolean' is not assignable to type 'never'.
  return <Pane borderBottom />
}

export default MenuDivider
