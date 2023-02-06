import React from 'react'
import { Pane, majorScale, Heading, Link as EvergreenLink } from 'evergreen-ui'
import DesignLanguageCard from './DesignLanguageCard'
import IA from '../../constants/IA'
import FoundationHomeImage from '../icons/FoundationHomeImage'
import ComponentHomeImage from '../icons/ComponentHomeImage'
import PatternHomeImage from '../icons/PatternHomeImage'

const DesignLanguage = () => {
  const foundations = IA.foundations.items.slice(0, 3)
  const components = IA.components.items.slice(0, 3)
  const patterns = IA.patterns.items.slice(0, 3)

  return (
    <Pane paddingY={majorScale(5)} marginX="auto" maxWidth={majorScale(150)} paddingX={majorScale(3)}>
      <Heading size={800} marginY={majorScale(5)} marginLeft={majorScale(2)}>
        Design language
      </Heading>
      <DesignLanguageCard
        img={<FoundationHomeImage />}
        title="Foundations"
        description="Evergreen contains a set of polished React components that work out of the box."
        type="foundations"
        link={<EvergreenLink href="foundations">Go to Foundations</EvergreenLink>}
        items={foundations}
      />
      <DesignLanguageCard
        img={<ComponentHomeImage />}
        title="Components"
        description="Evergreen components are built on top of a React UI Primitive for endless composability."
        type="components"
        link={<EvergreenLink href="components">Go to Components</EvergreenLink>}
        items={components}
      />
      <DesignLanguageCard
        img={<PatternHomeImage />}
        title="Patterns"
        description="Evergreen features a UI design language for enterprise-grade web applications."
        type="patterns"
        link={<EvergreenLink href="patterns">Go to Patterns</EvergreenLink>}
        items={patterns}
      />
    </Pane>
  )
}

export default DesignLanguage
