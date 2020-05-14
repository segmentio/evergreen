import React from 'react'
import { Helmet } from 'react-helmet'
import TopBar from '../../components/TopBar'
import IA from '../../IA'
import Overview from '../../components/Overview'
import Layout from '../../components/Layout'
import PageFooter from '../../components/PageFooter'

export default () => {
  return (
    <Layout>
      <Helmet>
        <title>Components · Evergreen</title>
      </Helmet>
      <div>
        <TopBar />
        <main tabIndex={-1}>
          <Overview ia={IA} />
        </main>
      </div>
      <PageFooter />
    </Layout>
  )
}
