import { Heading, majorScale, Pane, LightbulbIcon, WrenchIcon, OfficeIcon} from "evergreen-ui"
import React from "react"
import ValueCard from "./ValueCard"

const CoreValues = () => {
  return (
    <Pane
      paddingY={majorScale(5)}
      marginX="auto"
      maxWidth={majorScale(143)}
    >
      <Heading size={800} marginBottom={majorScale(5)}  marginLeft={majorScale(2)}>Core values</Heading>
      <Pane
        width="100%"
        display="flex"
        justifyContent="center"
      >
        <ValueCard 
          icon={LightbulbIcon}
          title="Works out of the box"
          description="Evergreen contains a set of polished React components that work out of the box."
        />
        <ValueCard 
          icon={WrenchIcon}
          title="Flexible and composable"
          description="Evergreen components are built on top of a React UI Primitive for endless composability. "
        />
        <ValueCard 
          icon={OfficeIcon}
          title="Enterprise-grade"
          description="Evergreen features a UI design language for enterprise-grade web applications."
        />
      </Pane>
    </Pane>
  )
}

export default CoreValues