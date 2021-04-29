import React from 'react'
import { Pane, majorScale } from 'evergreen-ui'
import Layout from '../../components/Layout'
import PageHeader from '../../components/PageHeader'
import Thumbnail from '../../components/Thumbnail'
import SideNav from '../../components/SideNav'
import IA from '../../utils/IA'

interface Props {}

const FoundationsPage: React.FC<Props> = () => {
  const evergreenFoundations = IA.foundations.items.sort((a, b) =>
    a.name! > b.name! ? 1 : -1
  )

  return (
    <Layout title="Foundations / Evergreen">
      <Pane width="100%" display="grid" gridTemplateColumns="236px 1fr">
        <SideNav
          title="Foundations"
          items={evergreenFoundations}
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
            title="Foundations"
            description={IA.foundations.description}
          />
          <Pane
            width="100%"
            display="grid"
            gridColumnGap="24px"
            gridRowGap="32px"
            gridTemplateColumns="1fr 1fr 1fr 1fr"
          >
            {evergreenFoundations.map(item => {
              return (
                <Thumbnail
                  id={item.id}
                  name={item.name}
                  type="foundations"
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

export default FoundationsPage
