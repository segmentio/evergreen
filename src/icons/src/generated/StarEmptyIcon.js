import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M16 6.11l-5.53-.84L8 0 5.53 5.27 0 6.11l4 4.1L3.06 16 8 13.27 12.94 16 12 10.21l4-4.1zM4.91 13.2l.59-3.62L3 7.02l3.45-.53L8 3.2l1.55 3.29 3.45.53-2.5 2.56.59 3.62L8 11.49 4.91 13.2z'
]
const svgPaths20 = [
  'M20 7.6l-6.9-1.1L10 0 6.9 6.6 0 7.6l5 5.1L3.8 20l6.2-3.4 6.2 3.4-1.2-7.2 5-5.2zM10 15l-4.5 2.4.9-5.2-3.6-3.6 5-.8L10 3.1l2.2 4.7 5 .8-3.6 3.7.9 5.2L10 15z'
]

export default class StarEmptyIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
