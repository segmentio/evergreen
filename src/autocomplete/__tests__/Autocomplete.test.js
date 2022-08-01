import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TextInput } from '../../text-input'
import Autocomplete from '../src/Autocomplete'

const makeAutocompleteFixture = (props = {}) =>
  render(
    <Autocomplete {...props} data-testid="Autocomplete">
      {renderProps => {
        const { getInputProps, getRef, inputValue } = renderProps
        return <TextInput value={inputValue} ref={getRef} {...getInputProps()} data-testid="TextInput" />
      }}
    </Autocomplete>
  )

describe('Autocomplete', () => {
  describe('when allowOtherValues is true', () => {
    it("should set input value when value doesn't exist in items collection", async () => {
      const items = ['Apple', 'Orange']

      const { findByTestId, findByText } = makeAutocompleteFixture({
        items
      })
      const component = await findByTestId('Autocomplete')
      const textInput = await findByTestId('TextInput')
      userEvent.type(component, 'Peach')

      expect(textInput.innerText).toBe('Peach')
    })
  })
})
