import React, { useState } from 'react'
import { Pane, Paragraph, majorScale } from 'evergreen-ui'
import Layout from '../../components/document/Layout'
import SearchBar from '../../components/SearchBar'
import PageHeader from '../../components/PageHeader'
import Thumbnail from '../../components/Thumbnail'
import SideNav from '../../components/SideNav'
import IA from '../../constants/IA'
import { sortItems } from '../../utils/item-utils'

const PatternsPage: React.FC = () => {
  const [query, setQuery] = useState<string>('')

  const patterns = sortItems(IA.patterns.items)

  const filteredItems = patterns.filter((item) => item.name?.toLowerCase().indexOf(query.toLowerCase()) !== -1)

  return (
    <Layout title="Patterns">
      <Pane width="100%" display="grid" gridTemplateColumns="236px 1fr">
        <SideNav title="Patterns" items={patterns} routePrefix="patterns" />
        <Pane
          width="100%"
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          padding={majorScale(5)}
          maxWidth={1024}
        >
          <PageHeader title="Patterns" description={IA.patterns.description} />
          <Pane marginBottom={majorScale(4)}>
            <SearchBar query={query} onQueryChange={setQuery} placeholder="Search patterns by name" />
          </Pane>
          {filteredItems.length > 0 ? (
            <Pane
              width="100%"
              display="grid"
              gridColumnGap="32px"
              gridRowGap="32px"
              gridTemplateColumns="1fr 1fr 1fr 1fr"
            >
              {patterns.map((item) => {
                return (
                  <Thumbnail
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    type="patterns"
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

export default PatternsPage
