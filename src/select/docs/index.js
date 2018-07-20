import React from 'react'
import Box from 'ui-box'
import Component from '@reactions/component'
import Select from '../src/Select'

/* eslint-disable import/no-unresolved, import/no-webpack-loader-syntax */
import sourceSelect from '!raw-loader!../src/Select'
/* eslint-enable import/no-unresolved, import/no-webpack-loader-syntax */

/**
 * Code examples
 */
import exampleSelectBasic from './examples/Select-basic.example'

const title = 'Select'
const subTitle = 'A styled native <select> for choosing items from a list.'

const introduction = (
  <div>
    <p>
      The <code>Select</code> component is a styled wrapper around a native{' '}
      <code>select</code> element, which allows selection of one item from a
      dropdown list. Anytime you would reach for a native select, use this.
    </p>
  </div>
)

const appearanceOptions = null

const scope = {
  Box,
  Select,
  Component
}

const components = [
  {
    name: 'Select',
    source: sourceSelect,
    description: (
      <p>
        The <code>Select</code> component.
      </p>
    ),
    examples: [
      {
        title: 'Basic Select Example',
        description: (
          <div>
            <p>This example shows basic usage with a selected item.</p>
          </div>
        ),
        codeText: exampleSelectBasic,
        scope
      }
    ]
  }
]

export default {
  title,
  subTitle,
  introduction,
  appearanceOptions,
  components
}
