import React from 'react'
import fs from 'fs'
import { GetStaticPropsContext } from 'next'
import { MdxRemote } from 'next-mdx-remote/types'
import renderToString from 'next-mdx-remote/render-to-string'
import path from 'path'
import IA, { Item } from '../../../constants/IA'
import PageHeader from '../../../components/PageHeader'
import EntityOverviewTemplate, {
  EntityOverviewTemplateProps,
} from '../../../components/templates/EntityOverviewTemplate'
import componentMapping from '../../../components/MDX/componentMapping'
import { MIGRATION_TABS } from '../migrations/[id]'
import { Query } from '../../../types/query'
import { findById } from '../../../utils/item-utils'

interface Props {
  mdxSource: MdxRemote.Source
  introduction: EntityOverviewTemplateProps['selectedNavItem']
  introductions: EntityOverviewTemplateProps['navItems']
}

const IntroductionPage: React.FC<Props> = ({ mdxSource, introduction, introductions }) => {
  if (!introduction) {
    return null
  }

  const { name, description } = introduction

  return (
    <EntityOverviewTemplate
      navItems={introductions}
      navPrefix="introduction"
      navTitle="Introduction"
      pageHeader={
        <PageHeader
          title={name}
          description={description}
          tabs={isMigrationsPage(introduction) ? MIGRATION_TABS : undefined}
        />
      }
      pageTitle={name}
      selectedNavItem={introduction}
      source={mdxSource}
    />
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join(process.cwd(), 'documentation', 'introduction'))

  const paths = files.map((file) => `/introduction/${file.split('.')[0]}`)

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context: GetStaticPropsContext<Query>) {
  const { params } = context
  const { id } = params || {}

  const introductions = IA.introduction.items
  const introduction = findById(introductions, id)

  const mdxPath = isMigrationsPage(introduction)
    ? path.join(process.cwd(), 'documentation', 'introduction', 'migrations', 'v7.mdx')
    : path.join(process.cwd(), 'documentation', 'introduction', `${id}.mdx`)

  const fileContents = fs.readFileSync(mdxPath).toString()
  const mdxSource = await renderToString(fileContents, { components: componentMapping })

  return {
    props: {
      mdxSource,
      introductions,
      introduction,
    },
  }
}

const isMigrationsPage = (item: Item | undefined) => item?.id === 'migrations'

export default IntroductionPage
