import React from 'react'
import Component from '@reactions/component'
import { Checkbox } from '../../../../src/checkbox'
import { Pane } from '../../../../src/layers'
import { Radio } from '../../../../src/radio'
import { Heading } from '../../../../src/typography'
import { SegmentedControl } from '../../../../src/segmented-control'
import Section from './Section'

const noop = e => {
  e.preventDefault()
}

export default class FormSection extends React.Component {
  render() {
    return (
      <Section title="Form Controls" fileName="FormSection.js">
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

          <Heading size={200} marginTop="default">
            Segmented Controls
          </Heading>

          <Pane>
            <Component
              initialState={{
                options: [
                  { label: 'On', value: 'on' },
                  { label: 'Off', value: 'off' }
                ],
                value: 'on'
              }}
            >
              {({ state, setState }) => (
                <SegmentedControl
                  name="switch"
                  marginTop={24}
                  width={80}
                  height={24}
                  options={state.options}
                  value={state.value}
                  onChange={value => setState({ value })}
                />
              )}
            </Component>
          </Pane>
        </Pane>
      </Section>
    )
  }
}
