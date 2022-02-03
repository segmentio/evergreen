import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import renderer from 'react-test-renderer'
import TagInput from '../src/TagInput'

const TEST_VALUES = ['one', 'two', 'three']
const TEST_PLACEHOLDER = 'Enter something...'

describe('<TagInput />', () => {
  it('basic snapshot', () => {
    const component = <TagInput values={TEST_VALUES} inputProps={{ placeholder: TEST_PLACEHOLDER }} />
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('onAdd', () => {
    const mockOnAdd = jest.fn()
    const newTestVal = 'Testing'
    render(<TagInput values={TEST_VALUES} onAdd={mockOnAdd} inputProps={{ placeholder: TEST_PLACEHOLDER }} />)
    userEvent.type(screen.getByPlaceholderText(TEST_PLACEHOLDER), `${newTestVal}{enter}`)
    expect(screen.queryByTestId('TagInput-autocomplete-toggle')).not.toBeInTheDocument()
    expect(mockOnAdd).toHaveBeenCalledWith([newTestVal])
  })

  it('onRemove', () => {
    const mockOnRemove = jest.fn()
    render(<TagInput values={TEST_VALUES} onRemove={mockOnRemove} inputProps={{ placeholder: TEST_PLACEHOLDER }} />)
    userEvent.type(screen.getByPlaceholderText(TEST_PLACEHOLDER), '{backspace}')
    const lastValueIndex = TEST_VALUES.length - 1
    expect(mockOnRemove).toHaveBeenCalledWith(TEST_VALUES[lastValueIndex], lastValueIndex)
  })

  it('onChange', () => {
    const mockOnChange = jest.fn()
    const newTestVal = 'Testing'
    render(<TagInput values={TEST_VALUES} onChange={mockOnChange} inputProps={{ placeholder: TEST_PLACEHOLDER }} />)
    userEvent.type(screen.getByPlaceholderText(TEST_PLACEHOLDER), `${newTestVal}{enter}`)
    expect(mockOnChange).toHaveBeenLastCalledWith(TEST_VALUES.concat([newTestVal]))
    userEvent.type(screen.getByPlaceholderText(TEST_PLACEHOLDER), '{backspace}')
    const valuesLastRemoved = TEST_VALUES.slice(0, -1)
    expect(mockOnChange).toHaveBeenLastCalledWith(valuesLastRemoved)
  })

  it('tagSubmitKey', () => {
    const mockOnAdd = jest.fn()
    const newTestVal = 'Testing'
    render(
      <TagInput
        tagSubmitKey="space"
        values={TEST_VALUES}
        onAdd={mockOnAdd}
        inputProps={{ placeholder: TEST_PLACEHOLDER }}
      />
    )
    userEvent.type(screen.getByPlaceholderText(TEST_PLACEHOLDER), `${newTestVal}{space}`)
    expect(mockOnAdd).toHaveBeenCalledWith([newTestVal])
  })

  it('disabled', () => {
    render(<TagInput disabled values={TEST_VALUES} inputProps={{ placeholder: TEST_PLACEHOLDER }} />)
    TEST_VALUES.forEach(v => {
      // Checks to make sure the "X" icon is not within each tag
      expect(screen.getByText(v).children.length).toBe(0)
    })
    expect(screen.getByPlaceholderText(TEST_PLACEHOLDER)).toBeDisabled()
  })

  it('addOnBlur', () => {
    const mockOnAdd = jest.fn()
    jest.spyOn(window, 'requestAnimationFrame').mockImplementation(cb => cb())
    const newTestVal = 'Testing'
    render(
      <TagInput
        addOnBlur
        data-testid="wrapper"
        values={TEST_VALUES}
        onAdd={mockOnAdd}
        inputProps={{ placeholder: TEST_PLACEHOLDER }}
      />
    )
    userEvent.type(screen.getByPlaceholderText(TEST_PLACEHOLDER), `${newTestVal}`)
    screen.getByPlaceholderText(TEST_PLACEHOLDER).blur()
    fireEvent.blur(screen.getByPlaceholderText(TEST_PLACEHOLDER))
    expect(mockOnAdd).toHaveBeenCalledWith([newTestVal])
    window.requestAnimationFrame.mockRestore()
  })

  it('separator', () => {
    const mockOnAdd = jest.fn()
    const newTestVal = 'Testing|123'
    render(
      <TagInput separator="|" values={TEST_VALUES} onAdd={mockOnAdd} inputProps={{ placeholder: TEST_PLACEHOLDER }} />
    )
    userEvent.type(screen.getByPlaceholderText(TEST_PLACEHOLDER), `${newTestVal}{enter}`)
    expect(mockOnAdd).toHaveBeenCalledWith(['Testing', '123'])
  })

  it('autocompleteItems', () => {
    const mockOnAdd = jest.fn()
    const testAutocompleteItems = ['Testing1', 'Testing2', 'Testing3', 'Other']
    const testSearch = 'Test'
    render(
      <TagInput
        autocompleteItems={testAutocompleteItems}
        values={TEST_VALUES}
        onAdd={mockOnAdd}
        inputProps={{ placeholder: TEST_PLACEHOLDER }}
      />
    )
    expect(screen.getByTestId('TagInput-autocomplete-toggle')).toBeInTheDocument()
    testAutocompleteItems.forEach(i => {
      expect(screen.queryByText(i)).not.toBeInTheDocument()
    })
    userEvent.type(screen.getByPlaceholderText(TEST_PLACEHOLDER), testSearch)
    testAutocompleteItems.forEach(i => {
      if (i.startsWith(testSearch)) {
        expect(screen.queryByText(i)).toBeInTheDocument()
      } else {
        expect(screen.queryByText(i)).not.toBeInTheDocument()
      }
    })
    userEvent.click(screen.getByText(testAutocompleteItems[0]))
    expect(mockOnAdd).toHaveBeenCalledWith([testAutocompleteItems[0]])
  })
})
