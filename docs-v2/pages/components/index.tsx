import React from 'react'
import {
  Pane,
  Text,
  Heading,
  Link as EvergreenLink,
  majorScale,
  Tablist,
  Tab
} from 'evergreen-ui'
import { css } from 'otion'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from '../../components/Layout'
import PageHeader from '../../components/PageHeader'
import IA, { Item } from '../../utils/IA'

interface Props {}

const ComponentsPage: React.FC<Props> = () => {
  const router = useRouter()
  const { components } = IA


  const evergreenComponents = IA.components.items
  .reduce((acc, subtree) => {
    return [...(subtree.items || []), ...acc]
  }, [] as Item[])
  .sort((a, b) => (a.name.charCodeAt(0) > b.name.charCodeAt(0) ? 1 : -1))

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
        // width="100%"
        // display="flex"
        // flexDirection="column"
        // justifyContent="center"
        // marginX="auto"
        // padding={majorScale(5)}
        // maxWidth={1200}
        >
          <PageHeader title="Components" />
          {components.items.map(({ items, title }, i) => {
          return (
            <Pane
              key={i}
              display="flex"
              width="100%"
              flexDirection="column"
              marginBottom={
                i < components.items.length ? majorScale(4) : undefined
              }
              alignItems="flex-start"
            >
              <Heading size={700} marginBottom={majorScale(2)}>
                {title}
              </Heading>
              <Pane
                display="grid"
                width="100%"
                gridColumnGap="20px"
                gridRowGap="20px"
                gridTemplateColumns="1fr 1fr 1fr 1fr"
              >
                {items.map(item => {
                  return (
                    <Link href={`/components/${item.id}`} passHref>
                      <Pane
                        width="100%"
                        display="flex"
                        flexDirection="column"
                        borderRadius={4}
                        overflow="hidden"
                        cursor="pointer"
                        border="default"
                        is={EvergreenLink}
                        hoverElevation={2}
                        className={css({
                          filter: 'grayscale(60%)',
                          ':hover': {
                            filter: 'grayscale(0)'
                          }
                        })}
                        alignItems="center"
                      >
                        <Pane
                          is="img"
                          src={item.image}
                          width="100%"
                          height="auto"
                        />

                        <Pane
                          paddingY={majorScale(1)}
                          display="flex"
                          justifyContent="center"
                        >
                          <Text size={500}>{item.name}</Text>
                        </Pane>
                      </Pane>
                    </Link>
                  )
                })}
              </Pane>
            </Pane>
          )
          })}
        </Pane>
      </Pane>
    </Layout>
  )
}

export default ComponentsPage
