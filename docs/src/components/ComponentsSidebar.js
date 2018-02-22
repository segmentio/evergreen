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
            label: 'Alert',
            to: '/components/alert'
          },
          {
            label: 'Buttons',
            to: '/components/buttons'
          },
          {
            label: 'Dialog',
            to: '/components/dialog'
          },
          {
            label: 'Table',
            to: '/components/table'
          },
          {
            label: 'Toaster',
            to: '/components/toaster'
          }
        ]
      }
    ]
  }

  render() {
    return <Sidebar {...this.props} />
  }
}
