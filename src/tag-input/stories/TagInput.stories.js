import React from 'react'
import { storiesOf } from '@storybook/react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { TagInput } from '..'
import { Heading } from '../../typography'

const StoryHeader = props => <Box marginBottom={16} {...props} />
const StoryHeading = props => <Heading size={600} marginBottom={0} {...props} />
const StorySection = props => <Box marginBottom={40} {...props} />
const initialValues = ['First', 'Second', 'Third']

class StateManager extends React.PureComponent {
  static propTypes = {
    children: PropTypes.func,
    values: PropTypes.arrayOf(PropTypes.node)
  }

  state = {
    values: this.props.values || []
  }

  addValues = (values = []) => {
    this.setState(state => ({
      values: [...state.values, ...values]
    }))
  }

  handleChange = values => {
    if (values.length % 2 === 0) {
      return false
    }
  }

  removeValue = (_value, index) => {
    this.setState(state => ({
      values: state.values.filter((_, i) => i !== index)
    }))
  }

  tagProps = value => {
    const color = value === 'invalid' ? 'red' : undefined
    return { color }
  }

  render() {
    return this.props.children({
      values: this.state.values,
      addValues: this.addValues,
      removeValue: this.removeValue,
      tagProps: this.tagProps,
      handleChange: this.handleChange
    })
  }
}

storiesOf('tag-input', module).add('TagInput', () => (
  <Box padding={40}>
    {(() => {
      document.body.style.margin = '0'
      document.body.style.height = '100vh'
    })()}
    <StorySection>
      <StoryHeader>
        <StoryHeading>Default usage (height 32)</StoryHeading>
      </StoryHeader>
      <StateManager>
        {({ addValues, removeValue, values }) => (
          <TagInput
            inputProps={{ placeholder: 'Enter something...' }}
            values={values}
            onAdd={addValues}
            onRemove={removeValue}
          />
        )}
      </StateManager>
    </StorySection>
    <StorySection>
      <StoryHeader>
        <StoryHeading>Changing tag submit key</StoryHeading>
      </StoryHeader>
      <StateManager>
        {({ addValues, removeValue, values }) => (
          <TagInput
            inputProps={{ placeholder: 'Enter something...' }}
            values={values}
            onAdd={addValues}
            tagSubmitKey="space"
            onRemove={removeValue}
          />
        )}
      </StateManager>
    </StorySection>
    <StorySection>
      <StoryHeader>
        <StoryHeading>With tag values</StoryHeading>
      </StoryHeader>
      <StateManager values={initialValues}>
        {({ addValues, removeValue, values }) => (
          <TagInput
            inputProps={{ placeholder: 'Enter something...' }}
            values={values}
            onAdd={addValues}
            onRemove={removeValue}
          />
        )}
      </StateManager>
    </StorySection>
    <StorySection>
      <StoryHeader>
        <StoryHeading>Disabled</StoryHeading>
      </StoryHeader>
      <StateManager values={initialValues}>
        {({ addValues, removeValue, values }) => (
          <TagInput
            disabled
            inputProps={{ placeholder: 'Enter something...' }}
            values={values}
            onAdd={addValues}
            onRemove={removeValue}
          />
        )}
      </StateManager>
    </StorySection>
    <StorySection>
      <StoryHeader>
        <StoryHeading>With `tagProps`</StoryHeading>
      </StoryHeader>
      <StateManager values={['valid', 'invalid']}>
        {({ addValues, removeValue, tagProps, values }) => (
          <TagInput
            inputProps={{ placeholder: 'Enter something...' }}
            values={values}
            onAdd={addValues}
            onRemove={removeValue}
            tagProps={tagProps}
          />
        )}
      </StateManager>
    </StorySection>
    <StorySection>
      <StoryHeader>
        <StoryHeading>Prevent input clearing on even values</StoryHeading>
      </StoryHeader>
      <StateManager values={initialValues}>
        {({ addValues, handleChange, removeValue, values }) => (
          <TagInput
            addOnBlur
            inputProps={{ placeholder: 'Enter something...' }}
            values={values}
            separator={false}
            onAdd={addValues}
            onChange={handleChange}
            onRemove={removeValue}
          />
        )}
      </StateManager>
    </StorySection>
  </Box>
))
