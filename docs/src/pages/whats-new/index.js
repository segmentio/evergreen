import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import {
  Pane,
  Heading,
  Card,
  Text,
  Paragraph,
  CalendarIcon
} from '../../../../src'
import TopBar from '../../components/TopBar'
import Layout from '../../components/Layout'
import PageFooter from '../../components/PageFooter'
import WhatsNewHero from '../../components/WhatsNewHero'

const majorReleases = [
  {
    version: '5.0.0',
    releaseDate: 'August 2020',
    migrationDocs: '/get-started/v5-migration-guide',
    description: `Evergreen v5 is a general health check for the framework. We took a look at what makes Evergreen tick
    and compared it to new standards. We made several updates to try and push the DevX of using the framework to be
    a lot more natural and robust. We focused on improving bundle size, performance, tree-shaking support (especially for icons), and better TypeScript definitions.`
  }
]

const MediaIcon = props => {
  return (
    <svg width="64px" height="64px" viewBox="0 0 64 64" {...props}>
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <circle
          fillOpacity="0.1"
          fill="#735DD0"
          fillRule="nonzero"
          cx={32}
          cy={32}
          r={32}
        />
        <path
          d="M36.2 24.154l-14.4 5.4v4.892l14.4 5.4V24.154zm.52 17.595l-16-6A.8.8 0 0 1 20.2 35v-6a.8.8 0 0 1 .52-.75l16-6a.8.8 0 0 1 1.08.75v18a.8.8 0 0 1-1.08.75zm3.486-13.56a.8.8 0 0 1-.812-1.379l1.7-1a.8.8 0 0 1 .812 1.38l-1.7 1zm-.812 9a.8.8 0 0 1 .812-1.379l1.7 1a.8.8 0 0 1-.812 1.38l-1.7-1zM41 32.8a.8.8 0 1 1 0-1.6h2a.8.8 0 1 1 0 1.6h-2zM28.2 38a.8.8 0 1 1 1.6 0v3a.8.8 0 0 1-.932.79l-6-1A.8.8 0 0 1 22.2 40v-4.2a.8.8 0 1 1 1.6 0v3.522l4.4.734V38zm-4-10.5a.8.8 0 1 1 1.6 0v9a.8.8 0 1 1-1.6 0v-9z"
          fill="#735DD0"
          fillRule="nonzero"
        />
      </g>
    </svg>
  )
}

const WhatsNew = () => {
  return (
    <Layout>
      <Helmet>
        <title>What&apos;s New &middot; Evergreen</title>
      </Helmet>
      <Pane display="flex" flexDirection="column" minHeight="100vh">
        <TopBar />
        <Pane flexGrow={1}>
          <WhatsNewHero />
          <Pane
            borderTop
            display="flex"
            flexDirection="column"
            alignItems="center"
            padding={40}
          >
            <MediaIcon />
            <Heading size={600} marginY={20}>
              Major Releases
            </Heading>
            {majorReleases.map(release => (
              <Card
                is={Link}
                to={release.migrationDocs}
                key={`release-v${release.version}`}
                elevation={1}
                hoverElevation={2}
                width="100%"
                maxWidth={1024}
                paddingY={24}
                paddingX={48}
                margin={24}
              >
                <Heading size={600} fontWeight={600}>
                  Evergreen v{release.version}
                </Heading>
                <Pane display="flex" alignItems="center" marginTop={8}>
                  <CalendarIcon size={12} marginRight={8} color="muted" />
                  <Text color="muted">{release.releaseDate}</Text>
                </Pane>
                <Paragraph marginTop={16}>{release.description}</Paragraph>
              </Card>
            ))}
          </Pane>
        </Pane>
        <PageFooter />
      </Pane>
    </Layout>
  )
}

export default WhatsNew
