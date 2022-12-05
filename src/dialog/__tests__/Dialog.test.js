import React from 'react'
import { render, screen } from '@testing-library/react'
import Dialog from '../src/Dialog'

const makeDialogFixture = (props = {}) => (
  <Dialog containerProps={{ 'data-testid': 'Dialog' }} {...props}>
    Content
  </Dialog>
)

describe('Dialog', () => {
  it('should not crash', () => {
    expect(() => render(makeDialogFixture())).not.toThrow()
  })

  it('should render content when isShown is true', () => {
    render(makeDialogFixture({ isShown: true }))

    expect(screen.getByText('Content')).toBeInTheDocument()
  })

  it('should not render content when isShown is false', () => {
    render(makeDialogFixture({ isShown: false }))

    expect(() => screen.getByText('Content')).toThrow()
  })
})
