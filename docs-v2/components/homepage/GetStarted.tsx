import { Pane, majorScale, Heading } from "evergreen-ui"
import React from "react"
import GetStartedCard from "./GetStartedCard"

const GetStarted = () => {
  return (
    <Pane
      paddingY={majorScale(5)}
      marginX="auto"
      maxWidth={majorScale(143)}
    >
      <Heading size={800} marginY={majorScale(5)} marginLeft={majorScale(2)}>Get started</Heading>
      <Pane
        display="flex"
        justifyContent="space-between"
      >
        <GetStartedCard 
          title="Installation"
          description="Learn how to install the evergreen-ui package"
          linkText="Visit installation page"
          link="/introductions"
          img="/homepage/installation.svg"
        />
        <GetStartedCard 
          title="What’s new"
          description="Check out the latest changes and updates"
          linkText="Read latest updates"
          link="/introductions/what-is-new"
          img="/homepage/whats-new.svg"
        />
      </Pane>
    </Pane>
  )
}

export default GetStarted