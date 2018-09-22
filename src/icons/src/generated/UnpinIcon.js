import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M9.39 1c-.5.5-.4 1.48.15 2.53L4.38 7.54C2.85 6.5 1.52 6.07 1 6.59l3.5 3.5c-.02.02-1.4 2.8-1.4 2.8l2.8-1.4 3.5 3.5c.53-.53.1-1.86-.95-3.38l4.02-5.16c1.04.55 2.01.65 2.51.14L9.39 1z'
]
const svgPaths20 = [
  'M11.77 1.16c-.81.81-.74 2.28.02 3.76L6.1 8.71c-2.17-1.46-4.12-2-4.94-1.18l4.95 4.95-2.12 3.54 3.54-2.12 4.95 4.95c.82-.82.27-2.77-1.19-4.94l3.8-5.69c1.47.76 2.94.84 3.76.02l-7.08-7.08z'
]

export default class UnpinIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
