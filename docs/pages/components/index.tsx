import React, { useState } from 'react'
import { Pane, Paragraph, majorScale } from 'evergreen-ui'
import Layout from '../../components/document/Layout'
import SearchBar from '../../components/SearchBar'
import PageHeader from '../../components/PageHeader'
import Thumbnail from '../../components/Thumbnail'
import SideNav from '../../components/SideNav'
import IA from '../../constants/IA'
import { sortItems } from '../../utils/item-utils'

const ComponentsPage: React.FC = () => {
  const [query, setQuery] = useState<string>('')

  const components = sortItems(IA.components.items)

  const filteredItems = components.filter((item) => item.name?.toLowerCase().indexOf(query.toLowerCase()) !== -1)

  return (
    <Layout title="Components">
      <Pane width="100%" display="grid" gridTemplateColumns="236px 1fr">
        <SideNav title="Components" items={components} routePrefix="components" />
        <Pane
          width="100%"
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          padding={majorScale(5)}
          maxWidth={1024}
        >
          <PageHeader title="Components" description={IA.components.description} />
          <Pane marginBottom={majorScale(4)}>
            <SearchBar query={query} onQueryChange={setQuery} placeholder="Search components by name" />
          </Pane>
          {filteredItems.length > 0 ? (
            <Pane
              width="100%"
              display="grid"
              gridColumnGap="32px"
              gridRowGap="32px"
              gridTemplateColumns="1fr 1fr 1fr 1fr"
            >
              {filteredItems.map((item) => {
                return (
                  <Thumbnail
                    id={item.id}
                    key={item.id}
                    name={item.name}
                    type="components"
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

export default ComponentsPage
