import React, { useState } from 'react'
import { Pane, Paragraph, majorScale } from 'evergreen-ui'
import Layout from '../../components/document/Layout'
import SearchBar from '../../components/SearchBar'
import PageHeader from '../../components/PageHeader'
import Thumbnail from '../../components/Thumbnail'
import SideNav from '../../components/SideNav'
import IA from '../../utils/IA'

interface Props {}

const FoundationsPage: React.FC<Props> = () => {
  const [query, setQuery] = useState<string>('')

  const evergreenFoundations = IA.foundations.items.sort((a, b) => (a.name! > b.name! ? 1 : -1))

  const filteredItems = evergreenFoundations.filter(
    (item) => item.name?.toLowerCase().indexOf(query.toLowerCase()) !== -1
  )

  return (
    <Layout title="Foundations">
      <Pane width="100%" display="grid" gridTemplateColumns="236px 1fr">
        <SideNav title="Foundations" items={evergreenFoundations} routePrefix="foundations" />
        <Pane
          width="100%"
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          padding={majorScale(5)}
          maxWidth={1024}
        >
          <PageHeader title="Foundations" description={IA.foundations.description} />
          <Pane marginBottom={majorScale(4)}>
            <SearchBar query={query} onQueryChange={setQuery} placeholder="Search components by name" />
          </Pane>
          {filteredItems.length > 0 ? (
            <Pane
              width="100%"
              display="grid"
              gridColumnGap="24px"
              gridRowGap="32px"
              gridTemplateColumns="1fr 1fr 1fr 1fr"
            >
              {filteredItems.map((item) => {
                return (
                  <Thumbnail
                    id={item.id}
                    key={item.id}
                    name={item.name}
                    type="foundations"
                    imageSrc={item.image}
                    imageHighlightSrc={item.imageHighlight}
                  />
                )
              })}
            </Pane>
          ) : (
            <Pane marginY={majorScale(3)} marginX="auto" width="100%">
              <Paragraph color="muted">{`There are no results for the query: "${query}"`}</Paragraph>
            </Pane>
          )}
        </Pane>
      </Pane>
    </Layout>
  )
}

export default FoundationsPage
