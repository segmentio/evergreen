import React from 'react'
import Component from '@reactions/component'
import { Checkbox } from '../../../../src/checkbox'
import { Pane } from '../../../../src/layers'
import { Radio } from '../../../../src/radio'
import { TextInputField } from '../../../../src/text-input'
import { Switch } from '../../../../src/switch'
import { Select } from '../../../../src/select'
import { Heading } from '../../../../src/typography'
import { SegmentedControl } from '../../../../src/segmented-control'
import Section from './Section'

const noop = e => {
  e.preventDefault()
  requestAnimationFrame(() => {
    window.scrollTo(0, 0)
  })
}

export default class FormSection extends React.Component {
  render() {
    return (
      <Section
        title="Form Controls"
        fileName="FormSection.js"
        contentPadding={24}
      >
        <Pane float="left" width={320} marginRight={40}>
          <Heading size={200}>Text Input Fields</Heading>

          <TextInputField
            marginTop={24}
            label="Default text input field"
            description="This is a description."
            placeholder="Placeholder text"
          />
          <TextInputField
            isInvalid
            required
            label="A required text input field"
            description="This is a description."
            validationMessage="This field is required"
          />
        </Pane>
        <Pane float="left" width={320} marginRight={40}>
          <Heading size={200}>Select</Heading>

          <Select name={32} id={32} marginTop={12}>
            <option>Apple</option>
            <option>Pear</option>
            <option>Banana</option>
            <option>Kiwi and some long title</option>
          </Select>

          <Heading size={200} marginTop={32}>
            Segmented Controls
          </Heading>

          <Component
            initialState={{
              options: [
                { label: 'Hourly', value: 'hourly' },
                { label: 'Daily', value: 'daily' },
                { label: 'Monthly', value: 'monthly' }
              ],
              value: 'hourly'
            }}
          >
            {({ state, setState }) => (
              <SegmentedControl
                name="time"
                marginTop={12}
                width={240}
                options={state.options}
                value={state.value}
                onChange={value => setState({ value })}
              />
            )}
          </Component>

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
                  marginTop={12}
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

        <Pane float="left" width={200} marginRight={16}>
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
            Switch
          </Heading>

          <Pane marginTop={16}>
            <Switch
              checked={false}
              height={20}
              marginBottom={12}
              onChange={noop}
            />

            <Switch checked height={20} marginBottom={12} onChange={noop} />

            <Switch
              checked
              hasCheckIcon={false}
              height={20}
              marginBottom={12}
              onChange={noop}
            />
          </Pane>
        </Pane>
      </Section>
    )
  }
}
