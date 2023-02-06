import React from 'react'
import fs from 'fs'
import EntityOverviewTemplate, {
  EntityOverviewTemplateProps,
} from '../../../components/templates/EntityOverviewTemplate'
import components from '../../../components/MDX/componentMapping'
import { GetStaticPropsContext } from 'next'
import { MdxRemote } from 'next-mdx-remote/types'
import renderToString from 'next-mdx-remote/render-to-string'
import path from 'path'
import IA from '../../../constants/IA'
import PageHeader from '../../../components/PageHeader'
import { findById, sortItems } from '../../../utils/item-utils'
import { Query } from '../../../types/query'

interface Props {
  foundations: EntityOverviewTemplateProps['navItems']
  foundation: EntityOverviewTemplateProps['selectedNavItem']
  mdxSource: MdxRemote.Source
}

const FoundationPage: React.FC<Props> = ({ mdxSource, foundations, foundation }) => {
  if (!foundation) {
    return null
  }

  const { name, description, github } = foundation

  return (
    <EntityOverviewTemplate
      navItems={foundations}
      pageTitle={`${name} Documentation`}
      selectedNavItem={foundation}
      navPrefix="foundations"
      navTitle="Foundations"
      pageHeader={<PageHeader title={name} description={description} githubLink={github} />}
      source={mdxSource}
    />
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join(process.cwd(), 'documentation', 'foundations'))

  const paths = files.map((file) => `/foundations/${file.split('.')[0]}`)

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context: GetStaticPropsContext<Query>) {
  const { params } = context
  const { id } = params || {}

  const fileContents = fs.readFileSync(path.join(process.cwd(), 'documentation', 'foundations', `${id}.mdx`)).toString()

  const mdxSource = await renderToString(fileContents, { components })
  const foundations = sortItems(IA.foundations.items)
  const foundation = findById(foundations, id)

  return {
    props: {
      mdxSource,
      foundations,
      foundation,
    },
  }
}

export default FoundationPage
