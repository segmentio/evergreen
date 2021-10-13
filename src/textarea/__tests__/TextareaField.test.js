import React from 'react'
import { render } from '@testing-library/react'
import { TextareaField } from '..'

const makeTextareaFieldFixture = (props = {}) => (
  <TextareaField data-testid="TextareaField" label="TextareaField" {...props} />
)

describe('TextareaField', () => {
  it('Should render', () => {
    expect(() => render(makeTextareaFieldFixture())).not.toThrow()
  })

  it('Should pass through `resize` prop to textarea', () => {
    const { container } = render(makeTextareaFieldFixture({ resize: 'none' }))

    const textarea = container.querySelector('textarea')
    expect(textarea).not.toBeNull()
    expect(textarea).toHaveStyle({ resize: 'none' })
  })

  it('Should correctly compose an accessible description from multiple hints', () => {
    const { getByTestId, getByText } = render(
      makeTextareaFieldFixture({ description: 'A description.', hint: 'Am hint.', validationMessage: 'Try again.' })
    )
    expect(getByText('A description.')).toBeInTheDocument()
    expect(getByText('Am hint.')).toBeInTheDocument()
    expect(getByText('Try again.')).toBeInTheDocument()
    expect(getByTestId('TextareaField')).toHaveAccessibleDescription('A description. Try again. Am hint.')
  })
})
