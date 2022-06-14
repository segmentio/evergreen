import React from 'react'
import { render } from '@testing-library/react'
import FormField from '../src/FormField'

const TEST_ID = 'foo'

const makeFormFieldFixture = (props = {}) => (
  <FormField label="hi" labelFor={TEST_ID} data-testid={TEST_ID} {...props} />
)

describe('<FormField />', () => {
  it('Should render without crashing', () => {
    expect(() => render(makeFormFieldFixture())).not.toThrow()
  })

  it('renders a label associated with its provided ID', async () => {
    const { container } = render(makeFormFieldFixture())

    const label = container.querySelector('label')
    expect(label).toHaveAttribute('for', 'foo')
    expect(label.textContent).toBe('hi')
  })

  it('renders a description with correct ID', async () => {
    const { container } = render(makeFormFieldFixture({ description: 'some content' }))

    const description = container.querySelector(`#${TEST_ID}__description`)
    expect(description).toBeDefined()
    expect(description.textContent).toBe('some content')
  })

  it('renders a hint with correct ID', async () => {
    const { container } = render(makeFormFieldFixture({ hint: 'some content' }))

    const hint = container.querySelector(`#${TEST_ID}__hint`)
    expect(hint).toBeDefined()
    expect(hint.textContent).toBe('some content')
  })

  it('renders a validation message with correct ID', async () => {
    const { container } = render(makeFormFieldFixture({ validationMessage: 'some content' }))

    const validationMessage = container.querySelector(`#${TEST_ID}__validation-message`)
    expect(validationMessage).toBeDefined()
    expect(validationMessage.textContent).toBe('some content')
  })
})
