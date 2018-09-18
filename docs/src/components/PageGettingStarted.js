import React from 'react'
// Import PropTypes from 'prop-types'

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved
// import { Button, IconButton, Tooltip } from 'evergreen-ui'

// import DocsMDXProvider from './DocsMDXProvider'
import TopBar from './TopBar'
import Layout from './Layout'

/**
 * Used for component pages.
 */
export default class Page extends React.Component {
  static propTypes = {
    // Children: PropTypes.node,
    // location: PropTypes.object.isRequired
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo)
  }

  render() {
    return (
      <Layout>
        <div className="MainLayout">
          <TopBar />
          <main className="MainLayout-main">Hello world</main>
        </div>
      </Layout>
    )
  }
}
