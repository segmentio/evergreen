import React from 'react'
import fs from 'fs'
import { useRouter } from 'next/router'
import { GetStaticPropsContext } from 'next'
import { MdxRemote } from 'next-mdx-remote/types'
import renderToString from 'next-mdx-remote/render-to-string'
import path from 'path'
import IA from '../../../constants/IA'
import { Link } from 'evergreen-ui'
import PageHeader from '../../../components/PageHeader'
import componentMapping from '../../../components/MDX/componentMapping'
import EntityOverviewTemplate, {
  EntityOverviewTemplateProps,
} from '../../../components/templates/EntityOverviewTemplate'
import ComingSoon from '../../../components/ComingSoon'
import { findById, sortItems } from '../../../utils/item-utils'
import { Query } from '../../../types/query'

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
        !component.inProgress ? (
          <PageHeader
            title={name}
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
        ) : null
      }
    >
      {component.inProgress && (
        <ComingSoon>
          We are currently working on this component.{' '}
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
  const files = fs.readdirSync(path.join(process.cwd(), 'documentation', 'components'))

  const paths = files.map((file) => `/components/${file.split('.')[0]}`)

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context: GetStaticPropsContext<Query>) {
  const { params } = context
  const { id } = params || {}
  const components = sortItems(IA.components.items)
  const component = findById(components, id)

  if (component?.inProgress) {
    return {
      props: {
        mdxSource: null,
        components,
        component,
      },
    }
  }

  const fileContents = fs.readFileSync(path.join(process.cwd(), 'documentation', 'components', `${id}.mdx`)).toString()

  const mdxSource = await renderToString(fileContents, { components: componentMapping })

  return {
    props: {
      mdxSource,
      components,
      component,
    },
  }
}

export default ComponentPage
