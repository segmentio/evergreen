'use strict'

function getRawImports(componentNames) {
  return componentNames
    .map(name => {
      return `import source${name} from '!raw-loader!../src/${name}'`
    })
    .join('\n')
}

function getImports(componentNames) {
  return componentNames
    .map(name => {
      return `import ${name} from '../src/${name}'`
    })
    .join('\n')
}

function getCodeExamples(componentNames) {
  return componentNames
    .map(name => {
      return `import example${name}Basic from './examples/${name}-basic.example'`
    })
    .join('\n')
}

function getComponents(componentNames) {
  return componentNames.map(
    name => `
  {
    name: '${name}',
    source: source${name},
    description: (
      <p>
        The <code>${name}</code> component.
      </p>
    ),
    examples: [
      {
        title: 'Basic ${name} Example',
        codeText: example${name}Basic,
        scope,
      },
    ],
  }
  `
  )
}

module.exports = ({ packageName, componentNames }) => {
  return `
import React from 'react'
import Box from 'ui-box'
import Component from '@reactions/component'
${getImports(componentNames)}

/* eslint-disable import/no-unresolved, import/no-webpack-loader-syntax */
${getRawImports(componentNames)}
/* eslint-enable import/no-unresolved, import/no-webpack-loader-syntax */

/**
 * Code examples
 */
${getCodeExamples(componentNames)}

const title = '${packageName}'
const subTitle = 'A component.'

const introduction = (
  <div>
    <p>
      The <code>${packageName}</code> component.
    </p>
  </div>
)

const implementationDetails = (
  <div>
    <p>
      The <code>${packageName}</code> component.
    </p>
  </div>
)


const scope = {
  Box,
  Component,
  ${componentNames.join(',\n  ')}
}

const components = [
  ${getComponents(componentNames)}
]

export default {
  title,
  subTitle,
  introduction,
  implementationDetails,
  components,
}

`.trim()
}
