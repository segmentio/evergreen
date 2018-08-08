import React from 'react'
import PropTypes from 'prop-types'
import ThemeBuilder from '../theme-builder/'
import TopBar from '../components/TopBar'
import Layout from '../components/Layout'

export default class Root extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo)
  }

  render() {
    const { location } = this.props
    return (
      <Layout>
        <div
          style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            flexGrow: 0
          }}
        >
          <TopBar />
          <ThemeBuilder location={location} />
        </div>
      </Layout>
    )
  }
}
