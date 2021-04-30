import React from 'react'
import fs from 'fs'
import Layout from '../../../components/Layout'
import Playground from '../../../components/Playground'
import { useRouter } from 'next/router'
import { GetStaticPropsContext } from 'next'
import { MdxRemote } from 'next-mdx-remote/types'
import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'
import path from 'path'
import IA from '../../../utils/IA'
import PageHeader from '../../../components/PageHeader'
import { Pane, Heading, HeadingOwnProps, Ul, Li, Ol, LinkIcon, Paragraph, Strong, Link, majorScale } from 'evergreen-ui'
import SideNav from '../../../components/SideNav'

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
          .map((child) => child.toLowerCase())
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
  li: (props: any) => <Li {...props} />,
}

const IntroductionPage: React.FC<Props> = ({ mdxSource }) => {
  const router = useRouter()
  const { query } = router
  const { id } = query

  const evergreenIntroductions = IA.introduction.items

  const introduction = evergreenIntroductions.find((introduction) => introduction.id === id)

  if (!introduction) {
    return null
  }

  const { name, description } = introduction

  const content = hydrate(mdxSource, { components })

  return (
    <Layout title={`Evergreen | ${name} Documentation`}>
      <Pane width="100%" display="grid" gridTemplateColumns="236px 1fr">
        <SideNav
          title="Introductions"
          items={evergreenIntroductions}
          selectedItem={introduction}
          routePrefix="introduction"
        />
        <Pane
          width="100%"
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          padding={majorScale(5)}
          maxWidth={1200}
        >
          <PageHeader title={name!} description={description} />
          {content}
        </Pane>
      </Pane>
    </Layout>
  )
}

export async function getStaticPaths() {
  const files = await fs.readdirSync(path.join(process.cwd(), 'documentation', 'introduction'))

  const paths = files.map((file) => `/introduction/${file.split('.')[0]}`)

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

  const fileContents = fs
    .readFileSync(path.join(process.cwd(), 'documentation', 'introduction', `${id}.mdx`))
    .toString()

  const mdxSource = await renderToString(fileContents, { components })

  return {
    props: {
      mdxSource,
    },
  }
}

export default IntroductionPage
