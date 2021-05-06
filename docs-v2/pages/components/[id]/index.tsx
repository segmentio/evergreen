import React from 'react'
import fs from 'fs'
import { useRouter } from 'next/router'
import { GetStaticPropsContext } from 'next'
import { MdxRemote } from 'next-mdx-remote/types'
import renderToString from 'next-mdx-remote/render-to-string'
import path from 'path'
import IA from '../../../utils/IA'
import PageHeader from '../../../components/PageHeader'
import componentMapping from '../../../components/MDX/componentMapping'
import EntityOverviewTemplate, {
  Props as EntityOverviewTemplateProps,
} from '../../../components/templates/EntityOverviewTemplate'

interface Props {
  components: EntityOverviewTemplateProps['navItems']
  component: EntityOverviewTemplateProps['selectedNavItem']
  mdxSource: MdxRemote.Source
}

const ComponentPage: React.FC<Props> = ({ mdxSource, component, components }) => {
  const router = useRouter()
  const { query } = router
  const { id } = query

  if (!component) {
    return null
  }

  const { name, description, github } = component

  return (
    <EntityOverviewTemplate
      navItems={components}
      source={mdxSource}
      navPrefix="components"
      pageTitle={`${name} Documentation`}
      navTitle="Components"
      selectedNavItem={component}
      pageHeader={
        <PageHeader
          title={name!}
          description={description}
          githubLink={github}
          tabs={[
            {
              label: 'Details',
              to: `/components/${id}`,
            },
            {
              label: 'Properties',
              to: `/components/${id}/props`,
            },
          ]}
        />
      }
    />
  )
}

export async function getStaticPaths() {
  const files = await fs.readdirSync(path.join(process.cwd(), 'documentation', 'components'))

  const paths = files.map(file => `/components/${file.split('.')[0]}`)

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

  const fileContents = fs.readFileSync(path.join(process.cwd(), 'documentation', 'components', `${id}.mdx`)).toString()

  const mdxSource = await renderToString(fileContents, { components: componentMapping })
  const components = IA.components.items.sort((a, b) => (a.name! > b.name! ? 1 : -1))
  const component = components.find(component => component.id === id)

  return {
    props: {
      mdxSource,
      components,
      component,
    },
  }
}

export default ComponentPage
