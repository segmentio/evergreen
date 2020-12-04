import prettyFormat from 'pretty-format'
import { extractStyles, clearStyles } from 'ui-box'

const { ReactTestComponent } = prettyFormat.plugins

export default {
  serialize: val => {
    const { styles } = extractStyles()
    const rules = styles
      .split('}')
      .map(style => style.split('{')[1])
      .filter(Boolean)
      .sort()
      .join('\n')

    const serializedElement = prettyFormat(val, {
      plugins: [ReactTestComponent]
    })

    clearStyles()

    return ['Extracted Styles:', rules, '', '', serializedElement].join('\n')
  },
  test: val => {
    return val != null
  }
}
