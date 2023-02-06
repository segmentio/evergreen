import React from 'react'
import fs from 'fs'
import { useRouter } from 'next/router'
import { GetStaticPropsContext } from 'next'
import path from 'path'
import IA from '../../../../constants/IA'
import PageHeader from '../../../../components/PageHeader'
import PropsTable from '../../../../components/PropsTable'
import { Pane, majorScale } from 'evergreen-ui'
import EntityOverviewTemplate, {
  EntityOverviewTemplateProps,
} from '../../../../components/templates/EntityOverviewTemplate'
import getComponentDocs from '../../../../lib/component-docs'
import { findById, sortItems } from '../../../../utils/item-utils'
import { Query } from '../../../../types/query'

interface Props {
  componentProps: any[]
  foundations: EntityOverviewTemplateProps['navItems']
  foundation: EntityOverviewTemplateProps['selectedNavItem']
}

const FoundationPropsPage: React.FC<Props> = ({ componentProps, foundation, foundations }) => {
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
      selectedNavItem={foundation}
      navPrefix="foundations"
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
              to: `/foundations/${id}`,
            },
            {
              label: 'Properties',
              to: `/foundations/${id}/props`,
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
  const files = fs.readdirSync(path.join(process.cwd(), 'documentation', 'foundations'))

  const paths = files.map((file) => `/foundations/${file.split('.')[0]}/props`)

  return {
    paths,
    fallback: false,
  }
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

  const foundations = sortItems(IA.foundations.items)
  const foundation = findById(foundations, id)

  return {
    props: {
      componentProps: props,
      foundations,
      foundation,
    },
  }
}

export default FoundationPropsPage
