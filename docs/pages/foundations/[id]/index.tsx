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

interface Props {
  foundations: EntityOverviewTemplateProps['navItems']
  foundation: EntityOverviewTemplateProps['selectedNavItem']
  mdxSource: MdxRemote.Source
}

const FoundationPage: React.FC<Props> = ({ mdxSource, foundations, foundation }) => {
  const router = useRouter()
  const { query } = router
  const { id } = query

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
      pageHeader={
        <PageHeader
          title={name!}
          description={description}
          githubLink={github}
          tabs={[
            {
              label: 'Details',
              to: `/foundations/${id}`,
            },
          ]}
        />
      }
      source={mdxSource}
    />
  )
}

export async function getStaticPaths() {
  const files = await fs.readdirSync(path.join(process.cwd(), 'documentation', 'foundations'))

  const paths = files.map((file) => `/foundations/${file.split('.')[0]}`)

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

  const fileContents = fs.readFileSync(path.join(process.cwd(), 'documentation', 'foundations', `${id}.mdx`)).toString()

  const mdxSource = await renderToString(fileContents, { components })
  const foundations = IA.foundations.items.sort((a, b) => (a.name! > b.name! ? 1 : -1))
  const foundation = foundations.find((foundation) => foundation.id === id)

  return {
    props: {
      mdxSource,
      foundations,
      foundation,
    },
  }
}

export default FoundationPage
