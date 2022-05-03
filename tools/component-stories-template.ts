interface ComponentStoriesTemplateOptions {
  packageName: string
  componentNames?: string[]
}

const componentStoriesTemplate = (options: ComponentStoriesTemplateOptions) => {
  const { packageName, componentNames = [] } = options
  return `
import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import { ${componentNames.join(', ')} } from '../../${packageName}'

storiesOf('${packageName}', module)${componentNames
    .map(componentName => componentStoryTemplate(componentName))
    .join('')}
`.trim()
}

const componentStoryTemplate = (componentName: string): string => {
  return `
    .add('${componentName}', () => (
      <Box padding={40}>
        {(() => {
          document.body.style.margin = '0'
          document.body.style.height = '100vh'
        })()}
        <${componentName}>${componentName}</${componentName}>
      </Box>
    ))`
}

export default componentStoriesTemplate
