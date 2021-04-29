import { Pane, majorScale, Heading } from "evergreen-ui"
import React from "react"
import DesignLanguageCard from "./DesignLanguageCard"
import IA from "../../utils/IA"

const DesignLanguage = () => {
  const foundations = IA.foundations.items.slice(0,3)
  const components = IA.components.items.slice(0,3)
  const patterns = IA.patterns.items.slice(0,3)

  return (
    <Pane
      paddingY={majorScale(5)}
      marginX="auto"
      maxWidth={majorScale(143)}
    >
      <Heading size={800} marginY={majorScale(5)} marginLeft={majorScale(2)}>Design language</Heading>
      <DesignLanguageCard 
        img="/homepage/foundations.svg"
        title="Foundations"
        description="Evergreen contains a set of polished React components that work out of the box."
        linkText="Go to Foundations"
        link="foundations"
        items={foundations}
      />
      <DesignLanguageCard 
        img="/homepage/components.svg"
        title="Components"
        description="Evergreen components are built on top of a React UI Primitive for endless composability."
        linkText="Go to Components"
        link="components"
        items={components}
      />
      <DesignLanguageCard 
        img="/homepage/patterns.svg"
        title="Patterns"
        description="Evergreen features a UI design language for enterprise-grade web applications."
        linkText="Go to Patterns"
        link="patterns"
        items={patterns}
      />
    </Pane>
  )
}

export default DesignLanguage