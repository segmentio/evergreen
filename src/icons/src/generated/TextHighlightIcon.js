import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M9 10H2V6h7V4H1c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h8v-2zm4 3h-1V3h1c.55 0 1-.45 1-1s-.45-1-1-1h-1c-.37 0-.7.11-1 .28-.3-.17-.63-.28-1-.28H9c-.55 0-1 .45-1 1s.45 1 1 1h1v10H9c-.55 0-1 .45-1 1s.45 1 1 1h1c.37 0 .7-.11 1-.28.3.17.63.28 1 .28h1c.55 0 1-.45 1-1s-.45-1-1-1zm2-9h-2v2h1v4h-1v2h2c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1z'
]
const svgPaths20 = [
  'M16 17c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1s1-.45 1-1-.45-1-1-1c-.77 0-1.47.3-2 .78-.53-.48-1.23-.78-2-.78-.55 0-1 .45-1 1s.45 1 1 1 1 .45 1 1v12c0 .55-.45 1-1 1s-1 .45-1 1 .45 1 1 1c.77 0 1.47-.3 2-.78.53.48 1.23.78 2 .78.55 0 1-.45 1-1s-.45-1-1-1zm-4-4H2V7h10V5H1c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h11v-2zm7-8h-3v2h2v6h-2v2h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z'
]

export default class TextHighlightIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
