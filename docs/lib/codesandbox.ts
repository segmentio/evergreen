import LZString from 'lz-string'
import packageJson from '../package.json'

function compress(string: string) {
  return LZString.compressToBase64(string).replace(/\+/g, `-`).replace(/\//g, `_`).replace(/=+$/, ``)
}

export const getCodeSandboxLink: (source: string) => string = (source) => {
  const wrappedSource = source.startsWith('function')
    ? source
    : `const Demo = () => {
  return (
    ${source}
  )
}
    `

  const componentName = source.startsWith('function')
    ? source.substring('function '.length, source.indexOf('('))
    : 'Demo'

  const usedComponents = Array.from(
    new Set(
      (
        source.match(/<((\w+))|minorScale|majorScale|mergeTheme|defaultTheme|(((\w+)Icon))|Position/g) || []
      ).map((component) => component.replace('<', ''))
    )
  ).join(', ')

  const codeContent = `
import React from 'react'
import ReactDOM from 'react-dom'
import { ${usedComponents} } from 'evergreen-ui'

${wrappedSource}

ReactDOM.render(
  <${componentName} />,
  document.getElementById("root")
)
`.trim()

  const html = `<div id="root" />`

  const parameters = {
    files: {
      'package.json': {
        content: {
          dependencies: {
            react: '16.8.0',
            'react-dom': '16.8.0',
            'evergreen-ui': `${packageJson.dependencies['evergreen-ui']}`,
          },
          devDependencies: {
            'react-scripts': 'latest',
          },
        },
      },
      'index.html': {
        content: html,
      },
      'index.js': {
        content: codeContent,
      },
    },
  }

  const urlParams = compress(JSON.stringify(parameters))

  return `https://codesandbox.io/api/v1/sandboxes/define?parameters=${urlParams}`
}
