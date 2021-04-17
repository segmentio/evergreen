import React from 'react'
import {
  Pane,
  Heading,
  majorScale,
  Tablist,
  Tab
} from 'evergreen-ui'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import PageHeader from '../../components/PageHeader'
import Thumbnail from '../../components/Thumbnail'
import IA from '../../utils/IA'

interface Props {}

const ComponentsPage: React.FC<Props> = () => {
  const router = useRouter()
  
  const evergreenComponents = IA.components.items
    .sort((a, b) => (a.name > b.name ? 1 : -1))

  return (
    <Layout title="Components / Evergreen">
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
                  key={item.id}
                  alignItems="flex-start"
                  direction="vertical"
                  onSelect={() => router.push(`../components/${item.id}`)}
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
          <PageHeader title="Components" />
          <Pane
            width="100%"
            display="grid"
            gridColumnGap="24px"
            gridRowGap="32px"
            gridTemplateColumns="1fr 1fr 1fr 1fr"
          >
            {evergreenComponents.map(item => {
              return (
                <Thumbnail
                  id={item.id}
                  name={item.name}
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

export default ComponentsPage
