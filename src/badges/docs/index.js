import React from 'react'
import Box from 'ui-box'
import Component from '@reactions/component'
import Badge from '../src/Badge'
import Pill from '../src/Pill'

/* eslint-disable import/no-unresolved, import/no-webpack-loader-syntax */
import sourceBadge from '!raw-loader!../src/Badge'
import sourcePill from '!raw-loader!../src/Pill'
/* eslint-enable import/no-unresolved, import/no-webpack-loader-syntax */

/**
 * Code examples
 */
import exampleBadge from './examples/Badge.example'
import examplePill from './examples/Pill.example'

const introduction = (
  <div>
    The <code>Badge</code> and <code>Pill</code> components are straight or
    round edged boxes surrounding a small bit of text.
  </div>
)

const appearanceOptions = null

const scope = {
  Box,
  Badge,
  Pill,
  Component
}

const components = [
  {
    name: 'Badge',
    source: sourceBadge,
    description: 'A small rectangle surrounding a bit of text',
    examples: [
      {
        title: 'Badge Example',
        description: (
          <div>
            <p>
              This example shows basic usage of a <code>Badge</code> component.
            </p>
          </div>
        ),
        codeText: exampleBadge,
        scope
      }
    ]
  },
  {
    name: 'Pill',
    source: sourcePill,
    description: 'A small rounded-edged box surrounding a bit of text',
    examples: [
      {
        title: 'Pill Example',
        description: (
          <div>
            <p>
              This example shows basic usage of a <code>Pill</code> component.
            </p>
          </div>
        ),
        codeText: examplePill,
        scope
      }
    ]
  }
]

export default {
  title: 'Badges',
  subTitle: 'A small bit of text wrapped in a square or round-edged box.',
  introduction,
  appearanceOptions,
  components
}
