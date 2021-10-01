import React from 'react'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import { TextareaField } from '..'

const makeTextareaFieldFixture = (props = {}) => (
  <TextareaField data-testid="TextareaField" label="TextareaField" {...props} />
)

describe('TextareaField', () => {
  it('Should render', () => {
    expect(() => render(makeTextareaFieldFixture())).not.toThrow()
  })

  it('Should pass through `resize` prop to textarea', () => {
    const tree = renderer.create(makeTextareaFieldFixture({ resize: 'none' })).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
