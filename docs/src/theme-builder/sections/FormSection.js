import React from 'react'
import Component from '@reactions/component'
import starWarsNames from 'starwars-names'
import { Checkbox } from '../../../../src/checkbox'
import { Pane } from '../../../../src/layers'
import { Radio } from '../../../../src/radio'
import { TextInputField } from '../../../../src/text-input'
import { Combobox } from '../../../../src/combobox'
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

// Generate a big list of items
const items = starWarsNames.all.sort((a, b) => {
  const nameA = a.toUpperCase()
  const nameB = b.toUpperCase()
  if (nameA < nameB) {
    return -1
  }
  if (nameA > nameB) {
    return 1
  }

  return 0
})

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
            Combobox
          </Heading>

          <Combobox items={items} onChange={() => {}} marginTop={12} />

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

          <Heading size={200} marginTop={24}>
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

          <Heading size={200} marginTop={24}>
            Switch
          </Heading>

          <Pane marginTop={12} display="flex">
            <Switch
              checked={false}
              height={20}
              marginBottom={12}
              onChange={noop}
            />

            <Switch
              marginLeft={12}
              checked
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
