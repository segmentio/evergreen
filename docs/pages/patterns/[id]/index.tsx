import React from 'react'
import fs from 'fs'
import path from 'path'

import EntityOverviewTemplate, {
  EntityOverviewTemplateProps,
} from '../../../components/templates/EntityOverviewTemplate'
import components from '../../../components/MDX/componentMapping'
import { useRouter } from 'next/router'
import { GetStaticPropsContext } from 'next'
import { MdxRemote } from 'next-mdx-remote/types'
import renderToString from 'next-mdx-remote/render-to-string'
import IA from '../../../constants/IA'
import { Link } from 'evergreen-ui'
import PageHeader from '../../../components/PageHeader'
import ComingSoon from '../../../components/ComingSoon'
import { findById, sortItems } from '../../../utils/item-utils'
import { Query } from '../../../types/query'

interface Props {
  patterns: EntityOverviewTemplateProps['navItems']
  pattern: EntityOverviewTemplateProps['selectedNavItem']
  mdxSource: MdxRemote.Source | null
  inProgress?: boolean
}

const PatternPage: React.FC<Props> = ({ mdxSource, patterns, pattern }) => {
  const router = useRouter()
  const { query } = router
  const { id } = query

  if (!pattern) {
    return null
  }

  const { name, description, github } = pattern

  return (
    <EntityOverviewTemplate
      navItems={patterns}
      pageTitle={`${name} Documentation`}
      selectedNavItem={pattern}
      navPrefix="patterns"
      navTitle="Patterns"
      pageHeader={
        !pattern.inProgress ? (
          <PageHeader
            title={name}
            description={description}
            githubLink={github}
            tabs={[
              {
                label: 'Details',
                to: `/patterns/${id}`,
              },
              {
                label: 'Properties',
                to: `/patterns/${id}/props`,
              },
            ]}
          />
        ) : null
      }
      source={mdxSource}
    >
      {pattern.inProgress && (
        <ComingSoon>
          We are currently working on this pattern.{' '}
          <Link href="https://github.com/segmentio/evergreen/discussions" target="_blank">
            Start a discussion
          </Link>{' '}
          if you are interested in learning more, or want to contribute
        </ComingSoon>
      )}
    </EntityOverviewTemplate>
  )
}

export async function getStaticPaths() {
  const paths = IA.patterns.items.map((item) => `/patterns/${item.id}`)

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context: GetStaticPropsContext<Query>) {
  const { params } = context
  const { id } = params || {}

  const patterns = sortItems(IA.patterns.items)
  const pattern = findById(patterns, id)

  if (pattern?.inProgress) {
    return {
      props: {
        mdxSource: null,
        patterns,
        pattern,
      },
    }
  }

  const fileContents = fs.readFileSync(path.join(process.cwd(), 'documentation', 'patterns', `${id}.mdx`)).toString()
  const mdxSource = await renderToString(fileContents, { components })

  return {
    props: {
      mdxSource,
      patterns,
      pattern,
    },
  }
}

export default PatternPage
