import React from 'react'
import fs from 'fs'
import { useRouter } from 'next/router'
import { GetStaticPropsContext } from 'next'
import path from 'path'
import IA from '../../../../constants/IA'
import PageHeader from '../../../../components/PageHeader'
import EntityOverviewTemplate, {
  EntityOverviewTemplateProps,
} from '../../../../components/templates/EntityOverviewTemplate'
import renderToString from 'next-mdx-remote/render-to-string'
import componentMapping from '../../../../components/MDX/componentMapping'
import { Query } from '../../../../types/query'
import { findById } from '../../../../utils/item-utils'

type Props = Pick<EntityOverviewTemplateProps, 'navItems' | 'selectedNavItem' | 'source'>

export const MIGRATION_TABS = [
  { label: 'v6 to v7', to: '/introduction/migrations' },
  { label: 'v5 to v6', to: '/introduction/migrations/v6' },
]

const MigrationsPage: React.FC<Props> = ({ source, navItems, selectedNavItem }) => {
  const router = useRouter()
  const { query } = router
  const { id } = query

  if (selectedNavItem == null) {
    return null
  }

  const { name, description } = selectedNavItem

  return (
    <EntityOverviewTemplate
      navItems={navItems}
      navPrefix="introduction"
      navTitle="Introduction"
      pageTitle={`${id} Migration Guide`}
      selectedNavItem={selectedNavItem}
      pageHeader={<PageHeader title={name} description={description} tabs={MIGRATION_TABS} />}
      source={source}
    />
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join(process.cwd(), 'documentation', 'introduction', 'migrations'))

  const paths = files.map((file) => `/introduction/migrations/${file.split('.')[0]}`)

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context: GetStaticPropsContext<Query>) {
  const { params } = context
  const { id } = params || {}

  const fileContents = fs
    .readFileSync(path.join(process.cwd(), 'documentation', 'introduction', 'migrations', `${id}.mdx`))
    .toString()

  const source = await renderToString(fileContents, { components: componentMapping })
  const navItems = IA.introduction.items
  const selectedNavItem = findById(navItems, 'migrations')

  return {
    props: {
      source,
      selectedNavItem,
      navItems,
    },
  }
}

export default MigrationsPage
