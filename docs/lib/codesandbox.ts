import LZString from 'lz-string'
import packageJson from '../package.json'
import profiles from '../fixtures/profiles.json'

/**
 * Fixtures are static data that may be shared between examples or are large enough to distract
 * from the example itself if placed in markdown.
 */
const fixtures = {
  profiles,
}

export const getCodeSandboxLink = (source: string): string => {
  const componentName = getComponentName(source)

  const demoComponent = getDemoComponent(source)

  const referencedComponents = getComponentList(source)

  const imports = [
    "import React from 'react'",
    "import ReactDOM from 'react-dom'",
    `import { ${referencedComponents} } from 'evergreen-ui'\n`,
  ]

  const fixtureContent = getFixtures(source)

  const render = `ReactDOM.render(
  <${componentName} />,
  document.getElementById("root")
)
`
  const codeContent = [...imports, demoComponent, fixtureContent, render]
    .filter((line: string) => line.trim() !== '')
    .join('\n')

  const html = `<div id="root" />`

  const parameters = {
    files: {
      'package.json': {
        content: {
          dependencies: {
            react: '16.8.0',
            'react-dom': '16.8.0',
            'evergreen-ui': packageJson.dependencies['evergreen-ui'],
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

const compress = (string: string): string =>
  LZString.compressToBase64(string).replace(/\+/g, `-`).replace(/\//g, `_`).replace(/=+$/, ``)

const getComponentName = (source: string): string =>
  source.startsWith('function') ? source.substring('function '.length, source.indexOf('(')) : 'Demo'

const getComponentList = (source: string): string =>
  Array.from(
    new Set(
      (
        source.match(/<((\w+))|toaster|minorScale|majorScale|mergeTheme|defaultTheme|(((\w+)Icon))|Position/g) || []
      ).map((component: string) => component.replace('<', ''))
    )
  ).join(', ')

const getDemoComponent = (source: string): string =>
  source.startsWith('function')
    ? source
    : `
const Demo = () => {
  return (
${indent(source, 4).trimEnd()}
  )
}
`

/**
 * Returns an expanded string version of referenced fixtures in the source code, based on its name
 * i.e. `profiles` will be expanded into a variable from the `profiles.json` fixture
 */
const getFixtures = (source: string): string => {
  const fixtureNames = Object.keys(fixtures) as Array<keyof typeof fixtures>

  return fixtureNames
    .map((fixtureName: keyof typeof fixtures) =>
      source.includes(fixtureName)
        ? `const ${fixtureName} = ${JSON.stringify(fixtures[fixtureName], undefined, 2)}`
        : ''
    )
    .join('\n')
    .trim()
}

const indent = (source: string, characterLength: number): string =>
  source
    .split('\n')
    .map((line: string) => `${' '.repeat(characterLength)}${line}`)
    .join('\n')
