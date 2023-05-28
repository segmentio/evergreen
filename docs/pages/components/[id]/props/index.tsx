import React from 'react'
import fs from 'fs'
import { useRouter } from 'next/router'
import { GetStaticPropsContext } from 'next'
import path from 'path'
import IA from '../../../../constants/IA'
import PageHeader from '../../../../components/PageHeader'
import PropsTable from '../../../../components/PropsTable'
import getComponentDocs from '../../../../lib/component-docs'
import EntityOverviewTemplate, {
  EntityOverviewTemplateProps,
} from '../../../../components/templates/EntityOverviewTemplate'
import { Pane, majorScale } from 'evergreen-ui'
import { findById, sortItems } from '../../../../utils/item-utils'
import { Query } from '../../../../types/query'

interface Props {
  componentProps: any[]
  components: EntityOverviewTemplateProps['navItems']
  component: EntityOverviewTemplateProps['selectedNavItem']
}

const ComponentPropsPage: React.FC<Props> = ({ componentProps, components, component }) => {
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
      selectedNavItem={component}
      navPrefix="components"
      navTitle="Components"
      pageTitle={`${name} Documentation`}
      pageHeader={
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
      }
    >
      {componentProps.map((data, i) => {
        return (
          <Pane key={i} marginBottom={i !== componentProps.length - 1 ? majorScale(5) : undefined}>
            <PropsTable data={data} />
          </Pane>
        )
      })}
    </EntityOverviewTemplate>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join(process.cwd(), 'documentation', 'components'))

  const paths = files.map((file) => `/components/${file.split('.')[0]}/props`)

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
        componentProps: [],
        components,
        component,
      },
    }
  }

  const stem = path.join(process.cwd(), '..', 'src', `${id}`, 'src')
  const props = await getComponentDocs(stem)

  return {
    props: {
      componentProps: props,
      components,
      component,
    },
  }
}

export default ComponentPropsPage
