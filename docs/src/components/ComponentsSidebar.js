import React, { PureComponent } from 'react'
import componentRoutes from '../componentRoutes'
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
        links: [
          {
            label: 'Component Status',
            exact: true,
            to: '/components/'
          }
        ]
      },
      {
        title: 'Components',
        links: componentRoutes.map(route => {
          return {
            label: route.sidebarOverride || route.name,
            to: route.path
          }
        })
      }
    ]
  }

  render() {
    return <Sidebar {...this.props} />
  }
}
