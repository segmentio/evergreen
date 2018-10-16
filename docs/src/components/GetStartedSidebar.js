import React, { PureComponent } from 'react'
import Sidebar from './Sidebar'

export default class GetStartedSidebar extends PureComponent {
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
            to: '/get-started/introduction',
            label: 'Introduction'
          },
          {
            to: '/get-started/theming',
            label: 'Theming'
          }
        ]
      }
    ]
  }

  render() {
    return <Sidebar {...this.props} />
  }
}
