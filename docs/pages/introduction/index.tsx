import React from 'react'
import { Pane, majorScale } from 'evergreen-ui'
import Layout from '../../components/document/Layout'
import PageHeader from '../../components/PageHeader'
import SideNav from '../../components/SideNav'
import InformationArchitecture from '../../utils/information-architecture'

interface Props {}

const IntroductionPage: React.FC<Props> = () => {
  return (
    <Layout title="Introduction">
      <Pane width="100%" display="grid" gridTemplateColumns="236px 1fr">
        <SideNav title="Introduction" items={InformationArchitecture.introduction.items} routePrefix="introduction" />
        <Pane
          width="100%"
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          padding={majorScale(5)}
          maxWidth={majorScale(143)}
        >
          <PageHeader title="Introduction" description={InformationArchitecture.introduction.description} />
          <Pane width="100%" display="grid" gridColumnGap="24px" gridRowGap="32px" />
        </Pane>
      </Pane>
    </Layout>
  )
}

export default IntroductionPage
