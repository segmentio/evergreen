import React from 'react'
import { Pane } from '../../../src/layers'
import { Button } from '../../../src/buttons'
import { Heading } from '../../../src/typography'
import { SegmentedControl } from '../../../src/segmented-control'
import Section from './Section'

export default class ButtonSection extends React.Component {
  state = {
    options: [
      { label: 'Height 24', value: 24 },
      { label: 'Height 32', value: 32 },
      { label: 'Height 40', value: 40 }
    ],
    value: 32
  }
  render() {
    const { state } = this
    return (
      <Section
        title="Buttons"
        controls={
          <SegmentedControl
            width={280}
            options={state.options}
            value={state.value}
            onChange={value => this.setState({ value: Number(value) })}
          />
        }
      >
        <Heading size={200} marginTop="default">
          Default Appearance
        </Heading>
        <Pane marginTop={12}>
          <Button height={state.value} marginRight={16}>
            Default
          </Button>
          <Button height={state.value} marginRight={16} intent="success">
            Success
          </Button>
          <Button height={state.value} marginRight={16} intent="warning">
            Warning
          </Button>
          <Button height={state.value} intent="danger">
            Danger
          </Button>
        </Pane>
        <Heading size={200} marginTop="default">
          Primary Appearance
        </Heading>
        <Pane marginTop={12}>
          <Button height={state.value} appearance="primary" marginRight={16}>
            Default
          </Button>
          <Button
            height={state.value}
            appearance="primary"
            marginRight={16}
            intent="success"
          >
            Success
          </Button>
          <Button
            height={state.value}
            appearance="primary"
            marginRight={16}
            intent="warning"
          >
            Warning
          </Button>
          <Button height={state.value} appearance="primary" intent="danger">
            Danger
          </Button>
        </Pane>
        <Heading size={200} marginTop="default">
          Minimal Appearance
        </Heading>
        <Pane marginTop={12}>
          <Button height={state.value} appearance="minimal" marginRight={16}>
            Default
          </Button>
          <Button
            height={state.value}
            appearance="minimal"
            marginRight={16}
            intent="success"
          >
            Success
          </Button>
          <Button
            height={state.value}
            appearance="minimal"
            marginRight={16}
            intent="warning"
          >
            Warning
          </Button>
          <Button height={state.value} appearance="minimal" intent="danger">
            Danger
          </Button>
        </Pane>
      </Section>
    )
  }
}
