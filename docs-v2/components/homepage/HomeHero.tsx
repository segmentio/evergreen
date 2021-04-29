import { Pane, useTheme, majorScale, Heading, Paragraph, Button, minorScale } from "evergreen-ui"
import React from "react"

const HomeHero = () => {
  const { colors } = useTheme()

  return (
    <Pane background={colors.gray50}>
      <Pane
        paddingTop={majorScale(20)}
        paddingBottom={majorScale(15)}
        marginX="auto"
        maxWidth={majorScale(143)}
        display="flex"
      >
        <Pane>
          <Heading size={900}>Meet Evergreen,</Heading>
          <Heading size={900} marginTop={minorScale(1)}>Segment’s design system</Heading>
          <Paragraph size={500} marginTop={majorScale(2)} marginBottom={majorScale(3)}>
            Evergreen is a React UI Framework for building ambitious products on the web. Brought to you by Segment.</Paragraph>
          <Button appearance="primary">Get Started</Button>
        </Pane>
        <Pane>
          {/* TODO: Add animation mov or json file */}
        </Pane>
      </Pane>
    </Pane>
  )
}

export default HomeHero