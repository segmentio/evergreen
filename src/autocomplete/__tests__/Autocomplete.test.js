import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TextInput } from '../../text-input'
import Autocomplete from '../src/Autocomplete'

const makeAutocompleteFixture = (props = {}) => (
  <Autocomplete {...props}>
    {renderProps => {
      const { getInputProps, getRef, inputValue } = renderProps
      return <TextInput value={inputValue} ref={getRef} {...getInputProps()} data-testid="TextInput" />
    }}
  </Autocomplete>
)

describe('Autocomplete', () => {
  describe('when allowOtherValues is false', () => {
    describe('when input field loses focus', () => {
      it('should clear input value', async () => {
        const items = ['Apple', 'Orange']

        render(
          makeAutocompleteFixture({
            allowOtherValues: false,
            items
          })
        )

        const textInput = await screen.findByTestId('TextInput')
        userEvent.click(textInput)
        userEvent.type(textInput, 'A')

        // Change focus by clicking off of the component
        userEvent.click(document.body)

        expect(textInput).not.toHaveValue()
      })
    })
  })

  describe('when allowOtherValues is true', () => {
    describe('when item from list is selected', () => {
      it('should set input value to selected item', async () => {
        const items = ['Apple', 'Orange']

        render(
          makeAutocompleteFixture({
            allowOtherValues: true,
            items
          })
        )

        // Type 'A' into the input to filter items down containing the string
        const textInput = await screen.findByTestId('TextInput')
        userEvent.click(textInput)
        userEvent.type(textInput, 'A')

        // Click the 'Apple' option, which should also update the input element
        const item = await screen.findByText('Apple')
        userEvent.click(item)

        expect(textInput).toHaveValue('Apple')
      })
    })

    describe('when input field loses focus', () => {
      it('should maintain input value', async () => {
        const items = ['Apple', 'Orange']

        render(
          makeAutocompleteFixture({
            allowOtherValues: true,
            items
          })
        )

        const textInput = await screen.findByTestId('TextInput')
        userEvent.click(textInput)
        userEvent.type(textInput, 'A')

        // Change focus by clicking off of the component
        userEvent.click(document.body)

        expect(textInput).toHaveValue('A')
      })
    })
  })
})
