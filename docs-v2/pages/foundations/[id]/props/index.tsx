import React from 'react'
import fs from 'fs'
import Layout from '../../../../components/Layout'
import { useRouter } from 'next/router'
import { GetStaticPropsContext } from 'next'
import path from 'path'
import IA from '../../../../utils/IA'
import PageHeader from '../../../../components/PageHeader'
import PropsTable from '../../../../components/PropsTable'
import { Pane, majorScale } from 'evergreen-ui'
import SideNav from '../../../../components/SideNav'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const docgen = require('react-docgen')

interface Props {
  componentProps: any[]
}

const ComponentPropsPage: React.FC<Props> = ({ componentProps }) => {
  const router = useRouter()
  const { query } = router
  const { id } = query

  const evergreenComponents = IA.foundations.items.sort((a, b) => (a.name! > b.name! ? 1 : -1))

  const item = evergreenComponents.find(component => component.id === id)

  if (!item) {
    return null
  }

  const { name, description, github } = item

  return (
    <Layout title={`Evergreen | ${name} Documentation`}>
      <Pane width="100%" display="grid" gridTemplateColumns="236px 1fr">
        <SideNav
          title="Foundations"
          items={evergreenComponents}
          selectedItem={item}
          routePrefix="foundations"
        />
        <Pane
          width="100%"
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          padding={majorScale(5)}
          maxWidth={1200}
        >
          <PageHeader
            title={name!}
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
          {componentProps.map((data, i) => {
            return (
              <Pane
                key={i}
                marginBottom={i !== componentProps.length - 1 ? majorScale(5) : undefined}
              >
                <PropsTable data={data} />
              </Pane>
            )
          })}
        </Pane>
      </Pane>
    </Layout>
  )
}

export async function getStaticPaths() {
  const files = await fs.readdirSync(path.join(process.cwd(), 'documentation', 'foundations'))

  const paths = files.map(file => `/foundations/${file.split('.')[0]}/props`)

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

  const componentFiles = fs.readdirSync(stem).filter(name => {
    const stats = fs.statSync(path.join(stem, name))
    return !stats.isDirectory()
  })

  const props = await Promise.all(
    componentFiles.map(async name => {
      const data = await fs.readFileSync(path.join(stem, name)).toString()
      try {
        const propsData = docgen.parse(data)
        return propsData
      } catch (e) {
        console.error('There was an error parsing component documentation', e)
        return {}
      }
    })
  )

  return {
    props: {
      componentProps: props,
    },
  }
}

export default ComponentPropsPage
