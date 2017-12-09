import { storiesOf } from '@storybook/react'
import React from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { SegmentedControl } from '../src/'

const options = [
  { label: 'Hourly', value: 'hourly' },
  { label: 'Daily', value: 'daily' },
  { label: 'Monthly', value: 'monthly' }
]

const optionsOnOff = [
  { label: 'On', value: 'on' },
  { label: 'Off', value: 'off' }
]

class SegmentedControlManager extends React.PureComponent {
  static propTypes = {
    children: PropTypes.func,
    options: PropTypes.array
  }

  constructor(props) {
    super()
    this.state = {
      value: props.options[0].value
    }
  }

  render() {
    return this.props.children({
      value: this.state.value,
      options: this.props.options,
      onChange: value => this.setState({ value })
    })
  }
}

storiesOf('segmented-control', module).add('SegmentedControl', () => (
  <Box padding={40}>
    {(() => {
      document.body.style.margin = '0'
      document.body.style.height = '100vh'
    })()}
    <SegmentedControlManager options={options}>
      {({ options: _options, value, onChange }) => (
        <SegmentedControl
          width={240}
          options={_options}
          value={value}
          onChange={onChange}
        />
      )}
    </SegmentedControlManager>
    <SegmentedControlManager options={optionsOnOff}>
      {({ options: _options, value, onChange }) => (
        <SegmentedControl
          marginTop={24}
          width={80}
          height={24}
          options={_options}
          value={value}
          onChange={onChange}
        />
      )}
    </SegmentedControlManager>
  </Box>
))
