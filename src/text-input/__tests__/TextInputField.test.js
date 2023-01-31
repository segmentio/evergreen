import React from 'react'
import { render, screen } from '@testing-library/react'
import { TextInputField } from '../'

function makeTextInputFieldFixture(props = {}) {
  return <TextInputField data-testid="input" label="Name" {...props} />
}

describe('TextInputField', () => {
  it('should render without crashing', () => {
    expect(() => render(makeTextInputFieldFixture())).not.toThrow()
  })

  it('should have expected accessible name when `label` prop', () => {
    render(makeTextInputFieldFixture())

    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByTestId('input')).toHaveAccessibleName('Name')
  })

  it('should add hint text to accessible description when `hint` prop provided', () => {
    render(makeTextInputFieldFixture({ hint: 'Enter a value in the input' }))
    expect(screen.getByText('Enter a value in the input')).toBeInTheDocument()
    expect(screen.getByTestId('input')).toHaveAccessibleDescription('Enter a value in the input')
  })

  it('should render an astrix when `required` is passed in', () => {
    render(makeTextInputFieldFixture({ required: true }))

    expect(screen.getByTitle('This field is required.')).toBeInTheDocument()
  })

  it('should render a `validationMessage` when passed in', () => {
    render(makeTextInputFieldFixture({ validationMessage: 'Please enter a value.' }))

    expect(screen.getByText('Please enter a value.')).toBeInTheDocument()
    expect(screen.getByTestId('input')).toHaveAccessibleDescription('Please enter a value.')
  })

  it('should correctly compose an accessible description from multiple hints', () => {
    render(
      makeTextInputFieldFixture({ description: 'A description.', hint: 'Am hint.', validationMessage: 'Try again.' })
    )

    expect(screen.getByText('A description.')).toBeInTheDocument()
    expect(screen.getByText('Am hint.')).toBeInTheDocument()
    expect(screen.getByText('Try again.')).toBeInTheDocument()
    expect(screen.getByTestId('input')).toHaveAccessibleDescription('A description. Try again. Am hint.')
  })
})
