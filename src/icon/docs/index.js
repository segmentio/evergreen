import React from 'react'
import Box from 'ui-box'
import Component from '@reactions/component'
import { Text } from '../../typography/'
import Icon, { IconNames } from '../src/Icon'

/* eslint-disable import/no-unresolved, import/no-webpack-loader-syntax */
import sourceIcon from '!raw-loader!../src/Icon'
/* eslint-enable import/no-unresolved, import/no-webpack-loader-syntax */

/**
 * Code examples
 */
import exampleIconBasic from './examples/Icon-basic.example'

const title = 'Icon'
const subTitle = 'An icon component.'

const introduction = (
  <div>
    <p>
      Evergreen uses the amazing{' '}
      <a
        href="http://blueprintjs.com/docs/versions/2/#icons"
        target="_blank"
        rel="noopener noreferrer"
      >
        @blueprintjs/icons
      </a>{' '}
      package for all of its icons. We recommend using their website to search
      for icons.
    </p>
  </div>
)

const implementationDetails = (
  <div>
    <p>
      The <code>Icon</code> component is almost identical to the{' '}
      <code>Icon</code> component found in BlueprintsJS. The exception is that
      BlueprintJS is using TypeScript.
    </p>
    <h3>Automatic Sizes</h3>
    <p>
      Each icon has two different variations, a 16px and 20px variation.
      Evergreen will choose the most appropriate size based on the size passed
      to the icon.
    </p>
  </div>
)

const scope = {
  Text,
  Box,
  Component,
  Icon,
  IconNames
}

const components = [
  {
    name: 'Icon',
    source: sourceIcon,
    description: (
      <p>
        The <code>Icon</code> component.
      </p>
    ),
    examples: [
      {
        title: 'All Icons',
        codeText: exampleIconBasic,
        scope
      }
    ]
  }
]

export default {
  title,
  subTitle,
  introduction,
  implementationDetails,
  components
}
