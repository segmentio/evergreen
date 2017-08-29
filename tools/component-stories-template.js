export default function storiesTemplate({ packageName, componentNames = [] }) {
  const template = []
  template.push(`import { storiesOf } from '@kadira/storybook'`)
  template.push(`import React from 'react'`)
  template.push(`import { ${componentNames.join(', ')} } from '../src/'`)
  template.push('')
  template.push(`storiesOf('${packageName}', module)`)
  componentNames.forEach(componentName => {
    template.push(`  .add('${componentName}', () =>`)
    template.push(`    <div>`)
    template.push(`      <${componentName} />`)
    template.push(`    </div>,`)
    template.push(`  )`)
  })
  return template.join('\n')
}
