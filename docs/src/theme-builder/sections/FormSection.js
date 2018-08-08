import React from 'react'
import { Pane } from '../../../../src/layers'
import { Radio } from '../../../../src/radio'
import { Heading } from '../../../../src/typography'
import Section from './Section'

const noop = e => {
  e.preventDefault()
}

export default class FormSection extends React.Component {
  render() {
    return (
      <Section title="Form Controls">
        <Pane float="left" marginRight={16}>
          <Heading size={200}>Radios</Heading>

          <Pane aria-label="Radio Group Label 12" role="group">
            <Radio
              onClick={noop}
              onChange={noop}
              name="group"
              checked
              label="Radio checked"
            />
            <Radio
              onChange={noop}
              name="group"
              disabled
              label="Radio disabled"
            />
          </Pane>

          <Heading size={200}>Radios</Heading>
        </Pane>
      </Section>
    )
  }
}
