import React from 'react'
import { render, screen } from '@testing-library/react'
import Portal from '../src/Portal'

describe('Portal', () => {
  it('should append container to document body', () => {
    render(<div>children</div>)
    render(<Portal>children</Portal>)

    const elements = screen.getAllByText('children')

    expect(elements[1]).toHaveAttribute('evergreen-portal-container')
  })

  it('should render children', () => {
    render(
      <Portal>
        <span data-testid="children">Hello world</span>
      </Portal>
    )

    const children = screen.getByTestId('children')

    expect(children).toHaveTextContent('Hello world')
    expect(children.parentNode).toHaveAttribute('evergreen-portal-container')
  })

  it('should remove DOM element when unmounted', () => {
    const { unmount } = render(<Portal>children</Portal>)

    unmount()

    expect(screen.queryByText('children')).toBeNull()
    expect(document.querySelector('[evergreen-portal-container]')).toBeNull()
  })
})
