import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import DocsMDXProvider from './DocsMDXProvider'
import TopBar from './TopBar'
import Layout from './Layout'
import PageFooter from './PageFooter'
import GetStartedSidebar from './GetStartedSidebar'

const PageLayout = ({ children }) => (
  <Layout>
    <Helmet>
      <title>Migration Guide · Evergreen</title>
    </Helmet>
    <div className="MainLayout">
      <TopBar />
      <main className="MainLayout-main">
        <div className="MainLayout-content">
          <section className="MainLayout-contentRight">
            <div
              className="Container-nextToSidebar"
              style={{ marginBottom: 160 }}
            >
              <div className="Content">
                <DocsMDXProvider>{children}</DocsMDXProvider>
              </div>
            </div>
          </section>
        </div>
        <GetStartedSidebar />
      </main>
    </div>
    <PageFooter />
  </Layout>
)

PageLayout.propTypes = {
  children: PropTypes.node
}

export default PageLayout
