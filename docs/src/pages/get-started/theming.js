import React from 'react'
import Helmet from 'react-helmet'
import TopBar from '../../components/TopBar'
import GetStartedSidebar from '../../components/GetStartedSidebar'
import Layout from '../../components/Layout'
import PageFooter from '../../components/PageFooter'

const NativeLink = ({ ...props }) => {
  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

export default () => {
  return (
    <Layout>
      <Helmet>
        <title>Theming · Evergreen</title>
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
                  <h1>Theming</h1>
                  <p>
                    Evergreen v4 supports theming partially. It is still complex
                    to theme Evergreen. We have done exploratory work to make
                    theming more powerful and accessible. The progress is
                    available in the{' '}
                    <NativeLink href="https://github.com/segmentio/evergreen/tree/v4-create-theme">
                      v4-create-theme branch
                    </NativeLink>
                    .
                  </p>
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
}
