import React from 'react'
import { Pane } from '../../../../src/layers'
import { Alert } from '../../../../src/alert'
import { Checkbox } from '../../../../src/checkbox'
import Section from './Section'

const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua.`

export default class AlertSection extends React.Component {
  state = {
    hasContent: false
  }

  handleChange = e => {
    this.setState({
      hasContent: e.target.checked
    })

    // Hack to prevent scrolling.
    requestAnimationFrame(() => {
      window.scrollTo(0, 0)
    })
  }

  render() {
    const { hasContent } = this.state
    return (
      <Section
        title="Alerts"
        controls={
          <Checkbox
            label="Has content"
            checked={hasContent}
            onChange={this.handleChange}
            margin={0}
          />
        }
      >
        {['default', 'card'].map(appearance => (
          <Pane key={appearance} float="left" marginRight={16}>
            <Alert
              appearance={appearance}
              marginBottom={16}
              title="A simple general message"
            >
              {hasContent ? content : null}
            </Alert>
            <Alert
              appearance={appearance}
              marginBottom={16}
              intent="success"
              title="Hooray! You did it. Your Source is now sending data."
            >
              {hasContent ? content : null}
            </Alert>
            <Alert
              appearance={appearance}
              marginBottom={16}
              intent="warning"
              title="Changes will affect all Warehouses."
            >
              {hasContent ? content : null}
            </Alert>
            <Alert
              appearance={appearance}
              intent="danger"
              title="We weren’t able to save your changes."
            >
              {hasContent ? content : null}
            </Alert>
          </Pane>
        ))}
      </Section>
    )
  }
}
