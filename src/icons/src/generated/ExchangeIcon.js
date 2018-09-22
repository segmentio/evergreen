import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M1.99 5.99c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.89-2-2-2zm4.15 1.86a.495.495 0 1 0 .7-.7L5.7 5.99h5.79c.28 0 .5-.22.5-.5s-.22-.5-.5-.5H5.7l1.15-1.15a.495.495 0 1 0-.7-.7l-2 2c-.1.09-.16.21-.16.35s.06.26.15.35l2 2.01zm7.85-1.86c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.89-2-2-2zM9.85 8.14a.533.533 0 0 0-.36-.15.495.495 0 0 0-.35.85l1.15 1.15h-5.8c-.28 0-.5.22-.5.5s.22.5.5.5h5.79l-1.15 1.15a.495.495 0 1 0 .7.7l2-2c.09-.09.15-.22.15-.35s-.06-.26-.15-.35l-1.98-2z'
]
const svgPaths20 = [
  'M2.5 8a2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 0 0-5zm10.35 3.15a.495.495 0 1 0-.7.7L13.3 13H5.5c-.28 0-.5.22-.5.5s.22.5.5.5h7.79l-1.15 1.15c-.08.09-.14.21-.14.35a.495.495 0 0 0 .85.35l2-2c.09-.09.15-.21.15-.35s-.06-.26-.15-.35l-2-2zM17.5 8a2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 0 0-5zM7.15 9.85a.495.495 0 1 0 .7-.7L6.71 8h7.79c.28 0 .5-.22.5-.5s-.22-.5-.5-.5H6.71l1.15-1.15c.08-.09.14-.21.14-.35a.495.495 0 0 0-.85-.35l-2 2c-.09.09-.15.21-.15.35s.06.26.15.35l2 2z'
]

export default class ExchangeIcon extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
