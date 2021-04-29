import { Pane, majorScale, Heading, Paragraph, Link, useTheme } from "evergreen-ui"
import React from "react"
import ResourceCard from "./ResourceCard"

const Resources = () => {
  const { colors } = useTheme()

  return (
    <Pane background={colors.gray50}>
      <Pane
        paddingY={majorScale(5)}
        marginX="auto"
        maxWidth={majorScale(143)}
      >
        <Pane marginY={majorScale(5)} marginLeft={majorScale(2)}>
          <Heading size={800} marginBottom={majorScale(2)}>Resources</Heading>
          <Paragraph size={400}>A collection of tools, kits, plugins and guides to help simplify the creation process for our users. <Link href="">See all resources</Link></Paragraph>
        </Pane>
        <Pane display="flex">
          <ResourceCard title="Evergreen Figma Library" logo="/homepage/logo-figma.svg" url="https://www.figma.com/@segment"/>
          <ResourceCard title="Segment Brand Hub" logo="/homepage/logo-segment.svg" url="https://brand.segment.com/"/>
        </Pane>
      </Pane>
    </Pane>
  )
}

export default Resources