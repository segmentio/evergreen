import React from 'react'
import TopBar from '../../components/TopBar'
import IA from '../../IA'
import Overview from '../../components/Overview'
import Layout from '../../components/Layout'

export default () => {
  return (
    <Layout>
      <div className="MainLayout">
        <TopBar />
        <main className="MainLayout-main">
          <div className="MainLayout-content">
            <Overview ia={IA} />
          </div>
        </main>
      </div>
    </Layout>
  )
}
