import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M13.91 2.6c-.16-.36-.51-.61-.92-.61h-10c-.41 0-.77.25-.92.61L-.01 7.45v5.54c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V7.45L13.91 2.6zm-1.92 5.39c-.55 0-1 .45-1 1v1h-6v-1c0-.55-.45-1-1-1H1.94l1.71-4h8.68l1.71 4h-2.05z'
]
const svgPaths20 = [
  'M16.92 3.56l-.01-.02c-.16-.35-.5-.6-.91-.6H4c-.41 0-.76.25-.91.6l-.01.02L0 10.49v6.46c0 .55.45 1 1 1h18c.55 0 1-.45 1-1v-6.46l-3.08-6.93zM15 10.95c-.55 0-1 .45-1 1v1H6v-1c0-.55-.45-1-1-1H1.98l2.67-6h10.7l2.67 6H15z'
]

export default class InboxIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
