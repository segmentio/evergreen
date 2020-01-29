'use strict'

function storyTemplate(componentName) {
  return `
  .add('${componentName}', () => (
    <ThemeProvider value={defaultTheme}>
      <Box padding={40}>
        {(() => {
          document.body.style.margin = '0'
          document.body.style.height = '100vh'
        })()}
        <${componentName}>${componentName}</${componentName}>
      </Box>
    </ThemeProvider>
  ))`
}

module.exports = ({ packageName, componentNames = [] }) => {
  return `
import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import { ${componentNames.join(', ')} } from '../../${packageName}'

storiesOf('${packageName}', module)${componentNames
    .map(componentName => storyTemplate(componentName))
    .join('')}
`.trim()
}
