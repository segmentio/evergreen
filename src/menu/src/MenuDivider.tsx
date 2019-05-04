import React from 'react'
import { Pane } from '../../layers'

export default class MenuDivider extends React.PureComponent<any> {
  render() {
    return <Pane borderBottom />
  }
}
