import React from 'react'
import ThemeBuilder from '../theme-builder/'
import TopBar from '../components/TopBar'
import Layout from '../components/Layout'

export default class Root extends React.Component {
  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo)
  }

  render() {
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
          <ThemeBuilder />
        </div>
      </Layout>
    )
  }
}
