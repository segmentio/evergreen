import React from 'react'
import Helmet from 'react-helmet'
import TopBar from '../components/TopBar'
import Layout from '../components/Layout'
import PageFooter from '../components/PageFooter'
import Features from '../components/Features'
import HomeHero from '../components/HomeHero'
import Media from '../components/Media'
import figmaDesignSystems from '../images/design-systems-com.png'
import growingADesignSystem from '../images/growing-a-design-system.png'
import drivingAdoption from '../images/driving-adoption-of-a-design-system.png'

const mediaItems = [
  {
    title: 'Driving Adoption of a Design System',
    image: drivingAdoption,
    published: 'October, 2018',
    link: 'https://segment.com/blog/driving-adoption-of-a-design-system'
  },
  {
    title: 'Growing a Design System',
    image: growingADesignSystem,
    published: 'June, 2018',
    link: 'https://www.youtube.com/watch?v=aoxEhlLpG9k'
  },
  {
    title:
      'Hijack a project to convince your company it’s ready for a design system',
    image: figmaDesignSystems,
    published: 'April, 2018',
    link:
      'https://www.designsystems.com/stories/convince-your-company-its-ready-for-a-design-system/'
  }
]

export default class Root extends React.Component {
  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo)
  }

  render() {
    return (
      <Layout>
        <Helmet>
          <title>Evergreen</title>
        </Helmet>
        <div>
          <TopBar />
          <main>
            <HomeHero />
            <Features />
            <Media title="Evergreen Related Media" items={mediaItems} />
          </main>
        </div>
        <PageFooter />
      </Layout>
    )
  }
}
