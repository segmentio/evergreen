import React from 'react'
import CoreValues from '../components/homepage/CoreValues'
import DesignLanguage from '../components/homepage/DesignLanguage'
import GetStarted from '../components/homepage/GetStarted'
import HomeHero from '../components/homepage/HomeHero'
import Resources from '../components/homepage/Resources'
import Layout from '../components/Layout'

const IndexPage = () => {
  return (
    <Layout title="Evergreen">
      <HomeHero />
      <CoreValues />
      <GetStarted />
      <DesignLanguage />
      <Resources />
      {/* <Articles /> */}
    </Layout>
  )
}

export default IndexPage
