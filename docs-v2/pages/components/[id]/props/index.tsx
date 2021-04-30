import React from 'react'
import fs from 'fs'
import Layout from '../../../../components/Layout'
import { useRouter } from 'next/router'
import { GetStaticPropsContext } from 'next'
import path from 'path'
import IA from '../../../../utils/IA'
import PageHeader from '../../../../components/PageHeader'
import PropsTable from '../../../../components/PropsTable'
import { Pane, Heading, Tablist, Tab, majorScale } from 'evergreen-ui'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const docgen = require('react-docgen')

interface Props {
  componentProps: any[]
}

const ComponentPropsPage: React.FC<Props> = ({ componentProps }) => {
  const router = useRouter()
  const { query } = router
  const { id } = query

  const evergreenComponents = IA.components.items.sort((a, b) => (a.name! > b.name! ? 1 : -1))

  const component = evergreenComponents.find((component) => component.id === id)

  if (!component) {
    return null
  }

  const { name, github } = component

  return (
    <Layout title={`Evergreen | ${name} Documentation`}>
      <Pane width="100%" display="grid" gridTemplateColumns="236px 1fr">
        <Pane
          display="flex"
          position="sticky"
          top={64}
          flexDirection="column"
          overflowY="auto"
          maxHeight="calc(100vh - 64px)"
          paddingY={majorScale(5)}
          paddingX={majorScale(4)}
        >
          <Heading size={200} textTransform="uppercase" marginBottom={majorScale(2)}>
            Components
          </Heading>
          <Tablist>
            {evergreenComponents.map((item) => {
              return (
                <Tab
                  alignItems="flex-start"
                  direction="vertical"
                  key={item.id}
                  onSelect={() => router.push(`/components/${item.id}`)}
                  isSelected={item.id === component.id}
                >
                  {item.name}
                </Tab>
              )
            })}
          </Tablist>
        </Pane>
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
            description="PropIndex Buttons are used as call-to-actions for users, indicating that they can take an action on a particular part of the page"
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
          {componentProps.map((data, i) => {
            return (
              <Pane key={i} marginBottom={i !== componentProps.length - 1 ? majorScale(5) : undefined}>
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
  const files = await fs.readdirSync(path.join(process.cwd(), 'documentation', 'components'))

  const paths = files.map((file) => `/components/${file.split('.')[0]}/props`)

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

  const componentFiles = fs.readdirSync(stem).filter((name) => {
    const stats = fs.statSync(path.join(stem, name))
    return !stats.isDirectory()
  })

  const props = await Promise.all(
    componentFiles.map(async (name) => {
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
