import React from 'react'
import Helmet from 'react-helmet'
import TopBar from '../components/TopBar'
import Layout from '../components/Layout'
import PageFooter from '../components/PageFooter'
import DesignersHero from '../components/DesignersHero'
import Media from '../components/Media'
import hireImage from '../images/design-post-images/hiring.png'
import tipsImage from '../images/design-post-images/sketch-tips.png'
import useSystemImage from '../images/design-post-images/use-system.png'

const mediaItems = [
  {
    title: 'How we hire designers at Segment',
    image: hireImage,
    published: 'Oct, 2018',
    link:
      'https://medium.com/segment-design/how-we-hire-designers-at-segment-ec1f5a94b3fb'
  },
  {
    title: '10 Tips to Design Sketch Files at Scale',
    image: tipsImage,
    published: 'August, 2018',
    link:
      'https://medium.com/segment-design/10-tips-to-design-sketch-files-at-scale-537614876c45'
  },
  {
    title: '3 Ways to Onboard onto a Design System Quickly',
    image: useSystemImage,
    published: 'July, 2018',
    link:
      'https://medium.com/segment-design/3-ways-to-onboard-onto-a-design-system-quickly-b829a9c47c3e'
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
          <title>Designers &middot; Evergreen</title>
        </Helmet>
        <div>
          <TopBar />
          <main>
            <DesignersHero />
            <Media title="From Our Design Blog" items={mediaItems} />
          </main>
        </div>
        <PageFooter />
      </Layout>
    )
  }
}
