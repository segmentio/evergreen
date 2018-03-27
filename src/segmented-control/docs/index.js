import React from 'react'
import Box from 'ui-box'
import Component from '@reactions/component'
import SegmentedControl from '../src/SegmentedControl'

/* eslint-disable import/no-unresolved, import/no-webpack-loader-syntax */
import sourceSegmentedControl from '!raw-loader!../src/SegmentedControl'
/* eslint-enable import/no-unresolved, import/no-webpack-loader-syntax */

/**
 * Code examples
 */
import exampleSegmentedControlBasic from './examples/SegmentedControl-basic.example'
import exampleSegmentedControlSmall from './examples/SegmentedControl-small.example'

const title = 'Segmented Control'
const subTitle = 'A set of two or more attached button segments.'

const introduction = (
  <div>
    <p>
      A segmented control is a set of two or more button segments. Within the
      control, all segments are equal in width. A segmented control is often
      used to switch between views of some data. Use a segmented control only
      when the options are predefined and are at most 4 options.
    </p>
  </div>
)

const designGuidelines = (
  <div>
    <p>
      By default the segmented control has a height of <code>32px</code> (the
      same as a button). It is possible to change this to any height and the
      text style and spacing will adjust. You should however keep things on the{' '}
      <code>8px</code> grid or in some cases the <code>4px</code> grid. You
      should only need the following recommended heights.
    </p>
    <h3>Recommended heights</h3>
    <ul>
      <li>
        <code>24px</code>
      </li>
      <li>
        <code>32px</code> &mdash; default height
      </li>
      <li>
        <code>36px</code>
      </li>
      <li>
        <code>40px</code>
      </li>
    </ul>
  </div>
)

const implementationDetails = (
  <div>
    <p>The segmented control implements most of the useful Box APIs</p>
    <ul>
      <li>spacing</li>
      <li>position</li>
      <li>layout</li>
      <li>dimensions</li>
    </ul>
    <p>
      That means you can pass properties such as <code>marginTop</code>,{' '}
      <code>width</code> and <code>height.</code>
    </p>
  </div>
)

const scope = {
  Component,
  Box,
  SegmentedControl
}

const components = [
  {
    name: 'SegmentedControl',
    source: sourceSegmentedControl,
    examples: [
      {
        title: 'Basic Segmented Control Example',
        codeText: exampleSegmentedControlBasic,
        scope
      },
      {
        title: 'Small Segmented Control Example',
        codeText: exampleSegmentedControlSmall,
        description: (
          <div>
            <p>
              The segmented will automatically chose the text style to match
              whatever height is passed.
            </p>
          </div>
        ),
        scope
      }
    ]
  }
]

export default {
  title,
  subTitle,
  introduction,
  designGuidelines,
  implementationDetails,
  components
}
