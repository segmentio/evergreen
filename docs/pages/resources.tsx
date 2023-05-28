import { Heading, Link, majorScale, Pane, Paragraph } from 'evergreen-ui'
import React from 'react'
import Layout from '../components/document/Layout'
import PageHeader from '../components/PageHeader'

const ResourcesPage = () => (
  <Layout title="Resources">
    <Pane padding={majorScale(5)} paddingLeft="276px">
      <PageHeader
        title="Resources"
        description="Design products and side-projects with our official design resource for the Evergreen community."
      />
      <Pane>
        <Heading size={700}>Figma Library</Heading>
        <Paragraph marginTop={majorScale(2)} marginBottom={majorScale(4)} size={400}>
          Evergreen Figma library is available on Figma Community:{' '}
          <Link href="https://www.figma.com/@twilio" color="blue" target="_blank">
            https://www.figma.com/@twilio
          </Link>
        </Paragraph>
        <Pane is="img" src="/resource-img-figma.png" display="flex" width="100%" maxWidth={majorScale(116)} />
      </Pane>
      <Pane borderTop="muted" width={majorScale(116)} marginY={majorScale(8)} />
      <Pane>
        <Heading size={700}>Segment Brand</Heading>
        <Paragraph marginTop={majorScale(2)} size={400}>
          A collection of Segment Brand resources:{' '}
          <Link href="https://brand.segment.com/" color="blue" target="_blank">
            https://brand.segment.com/
          </Link>
        </Paragraph>
      </Pane>
    </Pane>
  </Layout>
)

export default ResourcesPage
