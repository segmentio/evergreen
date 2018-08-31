import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import { Checkbox } from '../../checkbox'

class CheckboxWithState extends React.Component {
  state = {
    checked: false
  }

  handleChange = () => {
    this.setState({ checked: !this.state.checked })
  }

  render() {
    return (
      <Checkbox
        checked={this.state.checked}
        label="Checkbox"
        onChange={this.handleChange}
      />
    )
  }
}

storiesOf('checkbox', module).add('Checkbox', () => (
  <Box padding={40}>
    <Checkbox label="Checkbox default" />
    <Checkbox checked label="Checkbox checked" />
    <Checkbox disabled label="Checkbox disabled" />
    <Checkbox disabled checked label="Checkbox checked disabled" />
    <Checkbox indeterminate label="Checkbox indeterminate" />
    <Checkbox checked indeterminate label="Checkbox checked indeterminate" />
    <CheckboxWithState />
  </Box>
))
