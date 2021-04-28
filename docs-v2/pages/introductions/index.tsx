import React from 'react'
import {
  Pane,
  majorScale
} from 'evergreen-ui'
import Layout from '../../components/Layout'
import PageHeader from '../../components/PageHeader'
import SideNav from '../../components/SideNav'
import IA from '../../utils/IA'

interface Props {}

const IntroductionsPage: React.FC<Props> = () => {

  return (
    <Layout title="Introductions / Evergreen">
      <Pane width="100%" display="grid" gridTemplateColumns="236px 1fr">
        <SideNav 
          title="Introductions"
          items={IA.introductions.items}
          routePrefix="introductions"
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
            title="Introductions"
            description={IA.introductions.description}
          />
          <Pane
            width="100%"
            display="grid"
            gridColumnGap="24px"
            gridRowGap="32px"
          >
          </Pane>
        </Pane>
      </Pane>
    </Layout>
  )
}

export default IntroductionsPage
