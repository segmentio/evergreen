import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M6.6 3.3C6.1 3.1 5.6 3 5 3 2.2 3 0 5.2 0 8s2.2 5 5 5c.6 0 1.1-.1 1.6-.3C5.3 11.6 4.5 9.9 4.5 8s.8-3.6 2.1-4.7zM8 4c-1.2.9-2 2.4-2 4s.8 3.1 2 4c1.2-.9 2-2.3 2-4s-.8-3.1-2-4zm3-1c-.6 0-1.1.1-1.6.3 1.3 1.2 2.1 2.9 2.1 4.7s-.8 3.6-2.1 4.7c.5.2 1 .3 1.6.3 2.8 0 5-2.2 5-5s-2.2-5-5-5z'
]
const svgPaths20 = [
  'M8.7 4.7C7.9 4.2 7 4 6 4c-3.3 0-6 2.7-6 6s2.7 6 6 6c1 0 1.9-.2 2.7-.7C7.3 14 6.5 12.1 6.5 10s.9-4 2.2-5.3zM14 4c-1 0-1.9.2-2.7.7 1.4 1.4 2.2 3.2 2.2 5.3s-.9 4-2.2 5.3c.8.5 1.7.7 2.7.7 3.3 0 6-2.7 6-6s-2.7-6-6-6zm-4 1.5C8.8 6.7 8 8.2 8 10s.8 3.3 2 4.4c1.2-1.1 2-2.7 2-4.5s-.8-3.3-2-4.4z'
]

export default class ResolveIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
