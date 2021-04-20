import React from 'react'
import {
  Pane,
  majorScale
} from 'evergreen-ui'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import PageHeader from '../../components/PageHeader'
import Thumbnail from '../../components/Thumbnail'
import SideNav from '../../components/SideNav'
import IA from '../../utils/IA'

interface Props {}

const ComponentsPage: React.FC<Props> = () => {
  const router = useRouter()
  
  const evergreenComponents = IA.components.items
    .sort((a, b) => (a.name > b.name ? 1 : -1))

  return (
    <Layout title="Components / Evergreen">
      <Pane width="100%" display="grid" gridTemplateColumns="236px 1fr">
        <SideNav 
          title="Components"
          items={evergreenComponents}
          routePrefix="components"
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
            title="Components" 
            description="Components are the reusable building blocks of our design system. Each component meets a specific interaction or UI need, and has been specifically created to work together to create patterns and intuitive user experiences."
          />
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
