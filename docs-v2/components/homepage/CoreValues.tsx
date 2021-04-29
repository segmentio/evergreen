import React from "react"
import { Heading, majorScale, Pane, LightbulbIcon, WrenchIcon, OfficeIcon} from "evergreen-ui"
import CoreValueCard from "./CoreValueCard"

const CoreValues = () => {
  return (
    <Pane
      paddingY={majorScale(5)}
      marginX="auto"
      maxWidth={majorScale(143)}
    >
      <Heading size={800} marginY={majorScale(5)} marginLeft={majorScale(2)}>Core values</Heading>
      <Pane
        width="100%"
        display="flex"
        justifyContent="center"
      >
        <CoreValueCard 
          icon={LightbulbIcon}
          title="Works out of the box"
          description="Evergreen contains a set of polished React components that work out of the box."
        />
        <CoreValueCard 
          icon={WrenchIcon}
          title="Flexible and composable"
          description="Evergreen components are built on top of a React UI Primitive for endless composability. "
        />
        <CoreValueCard 
          icon={OfficeIcon}
          title="Enterprise-grade"
          description="Evergreen features a UI design language for enterprise-grade web applications."
        />
      </Pane>
    </Pane>
  )
}

export default CoreValues