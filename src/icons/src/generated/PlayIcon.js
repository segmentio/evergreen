import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M12 8c0-.35-.19-.64-.46-.82l.01-.02-6-4-.01.02A.969.969 0 0 0 5 3c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1 .21 0 .39-.08.54-.18l.01.02 6-4-.01-.02c.27-.18.46-.47.46-.82z'
]
const svgPaths20 = [
  'M16 10c0-.36-.2-.67-.49-.84l.01-.01-10-6-.01.01A.991.991 0 0 0 5 3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1 .19 0 .36-.07.51-.16l.01.01 10-6-.01-.01c.29-.17.49-.48.49-.84z'
]

export default class PlayIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
