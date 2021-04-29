import React from 'react'
import CoreValues from '../components/homepage/CoreValues'
import DesignLanguage from '../components/homepage/DesignLanguage'
import GetStarted from '../components/homepage/GetStarted'
import Layout from '../components/Layout'

const IndexPage = () => {
  return (
    <Layout title="Evergreen">
      {/* <HomeHero /> */}
      <CoreValues />
      <GetStarted />
      <DesignLanguage />
      {/* <Resources />
      <Articles /> */}
    </Layout>
  )
}

export default IndexPage
