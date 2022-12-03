import React from 'react'
import fs from 'fs'
import { GetStaticPropsContext } from 'next'
import { MdxRemote } from 'next-mdx-remote/types'
import renderToString from 'next-mdx-remote/render-to-string'
import path from 'path'
import InformationArchitecture from '../../../utils/information-architecture'
import PageHeader from '../../../components/PageHeader'
import EntityOverviewTemplate, {
  Props as EntityOverviewTemplateProps,
} from '../../../components/templates/EntityOverviewTemplate'
import componentMapping from '../../../components/MDX/componentMapping'

interface Props {
  mdxSource: MdxRemote.Source
  introduction: EntityOverviewTemplateProps['selectedNavItem']
  introductions: EntityOverviewTemplateProps['navItems']
}

const IntroductionPage: React.FC<Props> = ({ mdxSource, introduction, introductions }) => {
  if (!introduction) {
    return null
  }

  const { name, description } = introduction

  return (
    <EntityOverviewTemplate
      navItems={introductions}
      selectedNavItem={introduction}
      pageHeader={<PageHeader title={name!} description={description} />}
      navPrefix="introduction"
      navTitle="Introduction"
      source={mdxSource}
      pageTitle={name!}
    />
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

  const mdxSource = await renderToString(fileContents, { components: componentMapping })
  const introductions = InformationArchitecture.introduction.items
  const introduction = introductions.find((introduction) => introduction.id === id)

  return {
    props: {
      mdxSource,
      introductions,
      introduction,
    },
  }
}

export default IntroductionPage
