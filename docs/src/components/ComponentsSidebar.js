import React, { PureComponent } from 'react'
import Sidebar from './Sidebar'

export default class ComponentsSidebar extends PureComponent {
  static propTypes = {
    ...Sidebar.propTypes
  }

  static defaultProps = {
    /**
     * Manually manage components for now
     */
    groups: [
      {
        title: 'Components',
        links: [
          {
            label: 'Buttons',
            to: '/components/buttons'
          }
        ]
      }
    ]
  }

  render() {
    return <Sidebar {...this.props} />
  }
}
