import React from 'react'
import { Pane } from '../../../src/layers'
import { Radio } from '../../../src/radio'
import { Heading } from '../../../src/typography'
import { Checkbox } from '../../../src/checkbox'

import Section from './Section'

const noop = e => {
  e.preventDefault()
}

export default class AlertSections extends React.Component {
  render() {
    return (
      <Section title="Form Inputs">
        <Pane float="left" marginRight={16}>
          <Heading size={200}>Radios</Heading>

          <Pane aria-label="Radio Group Label 12" role="group">
            <Radio
              onClick={noop} // Stops a weird page issue
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

          <Heading size={200} marginTop="default">
            Checkbox
          </Heading>

          <Pane>
            <Checkbox onClick={noop} label="Checkbox default" />
            <Checkbox onClick={noop} checked label="Checkbox checked" />
            <Checkbox onClick={noop} disabled label="Checkbox disabled" />
            <Checkbox
              onClick={noop}
              disabled
              checked
              label="Checkbox checked disabled"
            />
          </Pane>
        </Pane>
      </Section>
    )
  }
}
