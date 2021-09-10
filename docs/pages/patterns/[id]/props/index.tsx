import React from 'react'
import { useRouter } from 'next/router'
import { GetStaticPropsContext } from 'next'
import path from 'path'
import IA from '../../../../utils/IA'
import PageHeader from '../../../../components/PageHeader'
import PropsTable from '../../../../components/PropsTable'
import { Pane, majorScale } from 'evergreen-ui'
import EntityOverviewTemplate, {
  Props as EntityOverviewTemplateProps,
} from '../../../../components/templates/EntityOverviewTemplate'
import getComponentDocs from '../../../../lib/component-docs'

interface Props {
  componentProps: any[]
  patterns: EntityOverviewTemplateProps['navItems']
  pattern: EntityOverviewTemplateProps['selectedNavItem']
}

const PatternPropsPage: React.FC<Props> = ({ componentProps, pattern, patterns }) => {
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
      selectedNavItem={pattern}
      navPrefix="patterns"
      navTitle="Patterns"
      pageTitle={`${name} Documentation`}
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
  const paths = IA.patterns.items.filter((item) => !item.inProgress).map((item) => `/patterns/${item.id}/props`)

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

  const stem = path.join(process.cwd(), '..', 'src', `${id}`, 'src')

  let props: any[]

  try {
    props = await getComponentDocs(stem)
  } catch (e) {
    console.error('There was an issue gathering component docs...', e)
    props = []
  }

  const patterns = IA.patterns.items.sort((a, b) => (a.name! > b.name! ? 1 : -1))
  const pattern = patterns.find((item) => item.id === id)

  return {
    props: {
      componentProps: props,
      patterns,
      pattern,
    },
  }
}

export default PatternPropsPage
