import React from 'react'
import { Heading, majorScale, Pane, Tab, Tablist } from 'evergreen-ui'
import useIsomorphicLayoutEffect from '../hooks/useIsomorphicLayoutEffect'
import scrollIntoView from 'scroll-into-view-if-needed'
import Link from 'next/link'
import { Item } from '../constants/IA'

interface Props {
  title?: string
  items: Item[]
  selectedItem?: Item
  routePrefix?: string
}

const SideNav: React.FC<Props> = ({ title, items, selectedItem, routePrefix }) => {
  useIsomorphicLayoutEffect(() => {
    const element = document.querySelector('[aria-selected="true"]')

    if (element) {
      scrollIntoView(element, {
        scrollMode: 'if-needed',
      })
    }
  }, [selectedItem])

  return (
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
      <Heading size={200} textTransform="uppercase" marginBottom={majorScale(2)} marginLeft={majorScale(2)}>
        {title}
      </Heading>
      <Tablist>
        {items.map((item) => {
          return (
            <Link key={item.id} href={`/${routePrefix}/${item.id}`} passHref>
              <Tab
                is="a"
                alignItems="flex-start"
                direction="vertical"
                isSelected={selectedItem ? item.id === selectedItem.id : false}
                // onSelect={() => router.push(`/${routePrefix}/${item.id}`)}
              >
                {item.name}
              </Tab>
            </Link>
          )
        })}
      </Tablist>
    </Pane>
  )
}

export default SideNav
