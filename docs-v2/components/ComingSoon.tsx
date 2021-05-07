import React from 'react'
import { Heading, majorScale, Pane, Paragraph } from 'evergreen-ui'
import ComingSoonImage from './icons/ComingSoonImage'
import { Item } from '../utils/IA'
import Layout from './document/Layout'
import SideNav from './SideNav'

interface Props {
  pageTitle: string
  navTitle: string
  navItems: Item[]
  selectedNavItem: Item
  navPrefix: string
}

const ComingSoon:React.FC<Props> = ({
  pageTitle,
  navTitle,
  navItems,
  selectedNavItem,
  navPrefix,
}) => {
  return (
    <Layout title={pageTitle}>
      <Pane width="100%" display="grid" gridTemplateColumns="236px 1fr">
        <SideNav title={navTitle} items={navItems} selectedItem={selectedNavItem} routePrefix={navPrefix} />
        <Pane
          width="100%"
          display="flex"
          flexFlow="column"
          alignItems="center"
          padding={majorScale(5)}
          maxWidth={1200}
        >
          <ComingSoonImage />
          <Heading size={800} marginTop={majorScale(4)} marginBottom={majorScale(2)}>Coming Soon!</Heading>
          <Paragraph maxWidth={majorScale(56)} textAlign="center">
            We are currently working on this pattern. <a>Contact us</a> if you are interested to learn more or contribute to this pattern.
          </Paragraph>
        </Pane>
      </Pane>
    </Layout>
  )
}

export default ComingSoon