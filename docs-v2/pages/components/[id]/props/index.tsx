import React from 'react'
import fs from 'fs'
import Layout from '../../../../components/Layout'
import Playground from '../../../../components/Playground'
import { useRouter } from 'next/router'
import { GetStaticPropsContext } from 'next'
import { MdxRemote } from 'next-mdx-remote/types'
import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'
import path from 'path'
import IA, { Item } from '../../../../utils/IA'
import PageHeader from '../../../../components/PageHeader'
import {
  Pane,
  Heading,
  HeadingOwnProps,
  Code,
  Ul,
  Li,
  Ol,
  LinkIcon,
  Paragraph,
  Strong,
  Tablist,
  Tab,
  Link,
  majorScale
} from 'evergreen-ui'

interface Props {
  mdxSource: MdxRemote.Source
}

const SectionHeading: React.FC<{
  size: HeadingOwnProps['size']
  children: string
}> = ({ size, children }) => {
  const idIndex = children.indexOf('{#')
  const text = idIndex !== -1 ? children.substring(0, idIndex) : children

  const id =
    idIndex !== -1
      ? children.trim().substring(idIndex + 2, children.length - 1)
      : `${children
          .split(' ')
          .map(child => child.toLowerCase())
          .join('_')}`

  return (
    <Pane display="flex" alignItems="center" id={id} marginY={majorScale(2)}>
      <Heading size={size} id={id}>
        {text}
      </Heading>
      <Link href={`#${id}`} marginLeft={majorScale(2)}>
        <LinkIcon size={12} />
      </Link>
    </Pane>
  )
}

const components = {
  h1: (props: any) => <SectionHeading size={800} {...props} />,
  h2: (props: any) => <SectionHeading size={700} {...props} />,
  h3: (props: any) => <SectionHeading size={600} {...props} />,
  h4: (props: any) => <SectionHeading size={500} {...props} />,
  h5: (props: any) => <SectionHeading size={300} {...props} />,
  h6: (props: any) => <SectionHeading size={200} {...props} />,
  code: (props: any) => <Playground source={props.children} />,
  p: (props: any) => <Paragraph marginBottom={majorScale(3)} {...props} />,
  strong: (props: any) => <Strong {...props} />,
  ol: (props: any) => <Ol {...props} />,
  ul: (props: any) => <Ul {...props} />,
  li: (props: any) => <Li {...props} />
}

const ComponentPropsPage: React.FC<Props> = ({ mdxSource }) => {
  const router = useRouter()
  const { query } = router
  const { id } = query

  const evergreenComponents = IA.components.items
    .sort((a, b) => (a.name > b.name ? 1 : -1))

  const component = evergreenComponents.find(component => component.id === id)

  if (!component) {
    return null
  }

  const { name, github } = component

  const content = hydrate(mdxSource, { components })

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
          <Heading
            size={200}
            textTransform="uppercase"
            marginBottom={majorScale(2)}
          >
            Components
          </Heading>
          <Tablist>
            {evergreenComponents.map(item => {
              return (
                <Tab
                  alignItems="flex-start"
                  direction="vertical"
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
                to: '/details'
              },
              {
                label: 'Properties',
                to: '/props'
              }
            ]}
          />
          {content}
        </Pane>
      </Pane>
    </Layout>
  )
}

export async function getStaticPaths() {
  const files = await fs.readdirSync(path.join(process.cwd(), 'documentation'))

  const paths = files.map(file => `/components/${file.split('.')[0]}`)

  return {
    paths,
    fallback: true
  }
}

interface Query {
  [k: string]: string
}

export async function getStaticProps(context: GetStaticPropsContext<Query>) {
  const { params } = context
  const { id } = params || {}

  const fileContents = fs
    .readFileSync(path.join(process.cwd(), 'documentation', `${id}.mdx`))
    .toString()

  const mdxSource = await renderToString(fileContents, { components })

  return {
    props: {
      mdxSource
    }
  }
}

export default ComponentPropsPage
