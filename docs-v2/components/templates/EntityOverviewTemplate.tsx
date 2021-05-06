import React from 'react'
import { Pane, majorScale } from 'evergreen-ui'
import Layout from '../document/Layout'
import { MdxRemote } from 'next-mdx-remote/types'
import MDX from '../MDX'
import SideNav from '../SideNav'
import { Item } from '../../utils/IA'

export interface Props {
  pageTitle: string
  navTitle: string
  navItems: Item[]
  navPrefix: string
  selectedNavItem: Item
  pageHeader: JSX.Element
  source: MdxRemote.Source
}

const EntityOverviewTemplate: React.FC<Props> = ({
  pageTitle,
  navTitle,
  navItems,
  navPrefix,
  selectedNavItem,
  pageHeader,
  source,
}) => {
  return (
    <Layout title={pageTitle}>
      <Pane width="100%" display="grid" gridTemplateColumns="236px 1fr">
        <SideNav title={navTitle} items={navItems} selectedItem={selectedNavItem} routePrefix={navPrefix} />
        <Pane
          width="100%"
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          padding={majorScale(5)}
          maxWidth={1200}
        >
          {pageHeader}
          <MDX source={source} />
        </Pane>
      </Pane>
    </Layout>
  )
}

export default EntityOverviewTemplate
