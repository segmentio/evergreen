
import React from 'react'
import { 
  Heading,
  majorScale,
  Pane,
  Tab,
  Tablist 
} from 'evergreen-ui'
import { Item } from '../utils/IA'
import router from 'next/router'


interface Props {
  title?: string
  items: Item[]
  selectedItem?: Item
  routePrefix?: string
}

const SideNav: React.FC<Props> = ({title, items, selectedItem, routePrefix}) => {
  return(
    <Pane
      display="flex"
      position="sticky"
      top={64}
      flexDirection="column"
      overflowY="auto"
      maxHeight="calc(100vh - 64px)"
      paddingY={majorScale(5)}
      paddingX={majorScale(3)}
      >
      <Heading
        size={200}
        textTransform="uppercase"
        marginBottom={majorScale(2)}
        marginLeft={majorScale(2)}
      >
      {title}
      </Heading>
      <Tablist>
        {items.map(item => {
          return (
            <Tab
              key={item.id}
              alignItems="flex-start"
              direction="vertical"
              isSelected={selectedItem? item.id===selectedItem.id : false }
              onSelect={() => router.push(`../${routePrefix}/${item.id}`)}
            >
              {item.name}
            </Tab>
          )
        })}
      </Tablist>
        </Pane>
  )
}

export default SideNav