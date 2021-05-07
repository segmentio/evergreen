import React from 'react'
import fs from 'fs'
import EntityOverviewTemplate, {
  Props as EntityOverviewTemplateProps,
} from '../../../components/templates/EntityOverviewTemplate'
import components from '../../../components/MDX/componentMapping'
import { useRouter } from 'next/router'
import { GetStaticPropsContext } from 'next'
import { MdxRemote } from 'next-mdx-remote/types'
import renderToString from 'next-mdx-remote/render-to-string'
import path from 'path'
import IA from '../../../utils/IA'
import PageHeader from '../../../components/PageHeader'
import ComingSoon from '../../../components/ComingSoon'

interface Props {
  patterns: EntityOverviewTemplateProps['navItems']
  pattern: EntityOverviewTemplateProps['selectedNavItem']
  mdxSource: MdxRemote.Source
}

const PatternPage: React.FC<Props> = ({ mdxSource, patterns, pattern }) => {
  const router = useRouter()
  const { query } = router
  const { id } = query

  console.log("here in PatternPage")

  if (!pattern) {
    return null
  }

  const { name, description, github } = pattern

  if (pattern.description=="Coming soon!") {
    return (
      <ComingSoon 
        pageTitle={`${name} Documentation`}
        navTitle="Patterns"
        navItems={patterns}
        selectedNavItem={pattern}
        navPrefix="patterns"
      />
    )
  }

  return (
    <EntityOverviewTemplate
      navItems={patterns}
      pageTitle={`${name} Documentation`}
      selectedNavItem={pattern}
      navPrefix="patterns"
      navTitle="Patterns"
      pageHeader={
        <PageHeader
          title={name!}
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
      }
      source={mdxSource}
    />
  )
}

export async function getStaticPaths() {
  const files = await fs.readdirSync(path.join(process.cwd(), 'documentation', 'patterns'))

  console.log("files")
  console.log(files)

  const paths = files.map(file => `/patterns/${file.split('.')[0]}`)

  console.log("paths")
  console.log(paths)

  return {
    paths,
    fallback: false,
  }
}

interface Query {
  [k: string]: string
}

export async function getStaticProps(context: GetStaticPropsContext<Query>) {
  const { params } = context
  const { id } = params || {}

  

  const fileContents = fs.readFileSync(path.join(process.cwd(), 'documentation', 'patterns', `${id}.mdx`)).toString()

  const mdxSource = await renderToString(fileContents, { components })
  const patterns = IA.patterns.items.sort((a, b) => (a.name! > b.name! ? 1 : -1))
  const pattern = patterns.find(pattern => pattern.id === id)
  
  

  return {
    props: {
      mdxSource,
      patterns,
      pattern,
    },
  }
}

export default PatternPage
