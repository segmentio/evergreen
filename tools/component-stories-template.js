export default function storiesTemplate({ packageName, componentNames = [] }) {
  const template = []
  template.push(`import { storiesOf } from '@storybook/react'`)
  template.push(`import React from 'react'`)
  template.push(`import Box from 'ui-box'`)
  template.push(`import { ${componentNames.join(', ')} } from '../src/'`)
  template.push('')
  template.push(`storiesOf('${packageName}', module)`)
  componentNames.forEach(componentName => {
    template.push(`  .add('${componentName}', () =>`)
    template.push(`    <Box padding={40}>`)
    template.push(`      {(() => {`)
    template.push(`        document.body.style.margin = '0'`)
    template.push(`        document.body.style.height = '100vh'`)
    template.push(`      })()}`)
    template.push(`      <${componentName}>${componentName}</${componentName}>`)
    template.push(`    </Box>,`)
    template.push(`  )`)
  })
  return template.join('\n')
}
