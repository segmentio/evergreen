import React from 'react'
import {
  Pane,
  majorScale
} from 'evergreen-ui'
import Layout from '../../components/Layout'
import PageHeader from '../../components/PageHeader'
import Thumbnail from '../../components/Thumbnail'
import SideNav from '../../components/SideNav'
import IA from '../../utils/IA'

interface Props {}

const PatternsPage: React.FC<Props> = () => {

  const evergreenPatterns = IA.patterns.items
    .sort((a, b) => (a.name > b.name ? 1 : -1))

  return (
    <Layout title="Patterns / Evergreen">
      <Pane width="100%" display="grid" gridTemplateColumns="236px 1fr">
        <SideNav 
          title="Patterns"
          items={evergreenPatterns}
          routePrefix="patterns"
        />
        <Pane
          width="100%"
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          padding={majorScale(5)}
          maxWidth={1024}
        >
          <PageHeader 
            title="Patterns" 
            description={IA.patterns.description}
          />
          <Pane
            width="100%"
            display="grid"
            gridColumnGap="32px"
            gridRowGap="32px"
            gridTemplateColumns="1fr 1fr 1fr 1fr"
          >
            {evergreenPatterns.map(item => {
              return (
                <Thumbnail
                  id={item.id}
                  name={item.name}
                  type="patterns"
                  imageSrc={item.image}
                  imageHighlightSrc={item.imageHighlight}
                ></Thumbnail>
              )
            })}
          </Pane>
        </Pane>
      </Pane>
    </Layout>
  )
}

export default PatternsPage
