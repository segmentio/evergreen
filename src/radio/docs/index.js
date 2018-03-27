import React from 'react'
import Box from 'ui-box'
import Component from '@reactions/component'
import Radio from '../src/Radio'
import RadioGroup from '../src/RadioGroup'

/* eslint-disable import/no-unresolved, import/no-webpack-loader-syntax */
import sourceRadio from '!raw-loader!../src/Radio'
import sourceRadioGroup from '!raw-loader!../src/RadioGroup'
/* eslint-enable import/no-unresolved, import/no-webpack-loader-syntax */

/**
 * Code examples
 */
import exampleRadioBasic from './examples/Radio-basic.example'
import exampleRadioGroupBasic from './examples/RadioGroup-basic.example'

const title = 'Radio'
const subTitle = 'A radio control.'

const introduction = (
  <div>
    <p>
      The radio and radio group are used for selecting a single option from a
      list. If you need to have an unselected state, just add a radio button
      with a None option. Begin labels with a capital letter.
    </p>
  </div>
)

const scope = {
  Box,
  Component,
  Radio,
  RadioGroup
}

const components = [
  {
    name: 'RadioGroup',
    source: sourceRadioGroup,
    examples: [
      {
        title: 'Basic Radio Group Example',
        codeText: exampleRadioGroupBasic,
        scope
      }
    ]
  },
  {
    name: 'Radio',
    source: sourceRadio,
    examples: [
      {
        title: 'Basic Radio Example',
        codeText: exampleRadioBasic,
        scope
      }
    ]
  }
]

export default {
  title,
  subTitle,
  introduction,
  components
}
