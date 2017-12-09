import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import React from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { Button } from 'evergreen-buttons'
import starWarsNames from 'starwars-names'
import { SelectMenu } from '../src/'

const options = starWarsNames.all.map(name => ({
  label: name,
  value: name
}))

class Manager extends React.Component {
  static propTypes = {
    children: PropTypes.func
  }

  state = {}
  render() {
    return this.props.children({
      setState: (...args) => {
        // eslint-disable-next-line no-console
        console.log('setState', ...args)
        this.setState(...args)
      },
      state: this.state
    })
  }
}

storiesOf('select-menu', module).add('SelectMenu', () => (
  <Box padding={40}>
    {(() => {
      document.body.style.margin = '0'
      document.body.style.height = '100vh'
    })()}
    <Manager>
      {({ setState, state }) => (
        <SelectMenu
          title="Select name"
          options={options}
          selected={state.selected}
          onSelect={item => setState({ selected: item.value })}
        >
          <Button>{state.selected || 'Select name...'}</Button>
        </SelectMenu>
      )}
    </Manager>
  </Box>
))
