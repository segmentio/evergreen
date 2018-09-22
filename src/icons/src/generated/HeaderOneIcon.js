import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M14.06 8c-.04.23-.12.44-.25.61-.13.17-.29.3-.48.41-.18.11-.39.18-.62.23-.23.04-.46.07-.71.07v1.03h1.74V16H15V8h-.94zM7 0c-.56 0-1 .45-1 1v4H2V1c0-.55-.45-1-1-1-.56 0-1 .45-1 1v10c0 .55.45 1 1 1 .56 0 1-.45 1-1V7h4v4c0 .55.45 1 1 1 .56 0 1-.45 1-1V1c0-.54-.45-1-1-1z'
]
const svgPaths20 = [
  'M10 0c.55 0 1 .45 1 1v14c0 .55-.45 1-1 1s-1-.45-1-1V9H2v6c0 .55-.45 1-1 1s-1-.45-1-1V1c0-.55.45-1 1-1s1 .45 1 1v6h7V1c0-.55.45-1 1-1zm7.4 10.77c.17-.2.29-.46.34-.77H19v10h-1.5v-7.11H15v-1.24c.32 0 .63-.03.93-.08.31-.06.58-.16.83-.29.26-.12.47-.3.64-.51z'
]

export default class HeaderOneIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
