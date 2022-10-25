import React from 'react'
import { render, screen } from '@testing-library/react'
import Dialog from '../src/Dialog'

const makeDialogFixture = (props = {}) => <Dialog containerProps={{ 'data-testid': 'Dialog' }} {...props} />

describe('Dialog', () => {
  it('should not crash', () => {
    expect(() => render(makeDialogFixture())).not.toThrow()
  })

  it('should render content when isShown is true', () => {
    const children = 'Content'
    render(makeDialogFixture({ isShown: true, children }))

    expect(screen.getByText(children)).toBeInTheDocument()
  })

  it('should not render content when isShown is false', () => {
    const children = 'Content'

    render(makeDialogFixture({ isShown: false, children }))

    expect(() => screen.getByText(children)).toThrow()
  })
})
