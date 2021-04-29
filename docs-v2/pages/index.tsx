import React from 'react'
import CoreValues from '../components/homepage/CoreValues'
import GetStarted from '../components/homepage/GetStarted'
import Layout from '../components/Layout'

const IndexPage = () => {
  return (
    <Layout title="Evergreen">
      {/* <HomeHero /> */}
      <CoreValues />
      <GetStarted />
      {/* <DesignLanguage />
      <Resources />
      <Articles /> */}
    </Layout>
  )
}

export default IndexPage
