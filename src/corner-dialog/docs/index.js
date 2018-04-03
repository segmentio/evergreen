import React from 'react'
import Box from 'ui-box'
import CornerDialog from '../src/CornerDialog'
import { Button } from '../../buttons'
import { Manager } from '../../manager'

/* eslint-disable import/no-unresolved, import/no-webpack-loader-syntax */
import sourceCornerDialog from '!raw-loader!../src/CornerDialog'
/* eslint-enable import/no-unresolved, import/no-webpack-loader-syntax */

/**
 * Code examples
 */
import exampleCornerDialogBasic from './examples/CornerDialog-basic.example'

const title = 'Corner Dialog'
const subTitle = 'Dialog in the bottom corner of the screen.'

const designGuidelines = (
  <div>
    <p>
      The Corner Dialog component is used for announcements such as new features
      and feedback requests. Preferably the content of the Corner Dialog should
      only contain one small paragraph.
    </p>
    <p>
      Good examples of call to actions for Corner Dialog are:{' '}
      <strong>Learn More</strong>, <strong>Got It</strong> and{' '}
      <strong>Get in Touch</strong>.
    </p>
  </div>
)

const implementationDetails = (
  <div>
    <p>
      Be aware that only one Corner Dialog can be shown at a single time
      — showing multiple Corner Dialogs will mean they will stack on top of each
      other.
    </p>
  </div>
)

const appearanceOptions = null

const scope = {
  Box,
  Button,
  Manager,
  CornerDialog
}

const components = [
  {
    name: 'CornerDialog',
    source: sourceCornerDialog,
    examples: [
      {
        title: 'Basic Corner Dialog Examples',
        codeText: exampleCornerDialogBasic,
        scope
      }
    ]
  }
]

export default {
  title,
  subTitle,
  designGuidelines,
  implementationDetails,
  appearanceOptions,
  components
}
