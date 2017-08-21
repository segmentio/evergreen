export default function componentTemplate({ componentName }) {
  const template = []
  template.push(`import React, { PureComponent } from 'react'`)
  template.push(`import PropTypes from 'prop-types'`)
  template.push(`import Box from 'ui-box'`)
  template.push('')
  template.push(`export default class ${componentName} extends PureComponent {`)
  template.push(`  static propTypes = {}`)
  template.push('')
  template.push(`  render() {`)
  template.push(`    const { ...props } = this.props`)
  template.push(`    return <Box {...props} />`)
  template.push(`  }`)
  template.push(`}`)
  return template.join('\n')
}
