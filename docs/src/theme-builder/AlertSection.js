import React from 'react'
import { Pane } from '../../../src/layers'
import { Alert } from '../../../src/alert'
import Section from './Section'

export default class AlertSections extends React.Component {
  render() {
    return (
      <Section title="Alerts">
        {['default', 'card'].map(appearance => (
          <Pane key={appearance} float="left" marginRight={16}>
            <Alert
              appearance={appearance}
              marginBottom={16}
              title="A simple general message"
            />
            <Alert
              appearance={appearance}
              marginBottom={16}
              intent="success"
              title="Hooray! You did it. Your Source is now sending data."
            />
            <Alert
              appearance={appearance}
              marginBottom={16}
              intent="warning"
              title="Changes will affect all Warehouses."
            />
            <Alert
              appearance={appearance}
              intent="danger"
              title="We weren’t able to save your changes."
            />
          </Pane>
        ))}
      </Section>
    )
  }
}
