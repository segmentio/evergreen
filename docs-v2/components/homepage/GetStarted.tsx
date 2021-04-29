import React from "react"
import { Pane, majorScale, Heading } from "evergreen-ui"
import GetStartedCard from "./GetStartedCard"
import InstallationHomeImage from "../icons/InstallationHomeImage"
import WhatsnewHomeImage from "../icons/WhatsnewHomeImage"

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
          img={<InstallationHomeImage />}
        />
        <GetStartedCard 
          title="What’s new"
          description="Check out the latest changes and updates"
          linkText="Read latest updates"
          link="/introductions/what-is-new"
          img={<WhatsnewHomeImage />}
        />
      </Pane>
    </Pane>
  )
}

export default GetStarted