import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M14 10H7.72l-.33-1H13c.39 0 .72-.23.89-.56h.01l2-4h-.01c.06-.13.11-.28.11-.44 0-.55-.45-1-1-1H5.39l-.44-1.32h-.01C4.8 1.29 4.44 1 4 1H1c-.55 0-1 .45-1 1s.45 1 1 1h2.28l2.33 7H4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2h6c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2zM6.05 5h7.33l-1 2H6.72l-.67-2z'
]
const svgPaths20 = [
  'M18 14H8.72l-.67-2H17c.44 0 .8-.29.94-.69h.01l2-6h-.01c.03-.1.06-.2.06-.31 0-.55-.45-1-1-1H5.39l-.44-1.32h-.01C4.8 2.29 4.44 2 4 2H1c-.55 0-1 .45-1 1s.45 1 1 1h2.28l3.33 10H5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2h9c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2zM6.05 6h11.56l-1.33 4H7.39L6.05 6z'
]

export default class ShoppingCartIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
