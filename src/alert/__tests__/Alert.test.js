import React from 'react'
import { render, screen } from '@testing-library/react'
import Alert from '../src/Alert'

describe('<Alert />', () => {
  it('basic snapshot', () => {
    const { asFragment } = render(<Alert title="A simple general message" />)

    expect(asFragment()).toMatchSnapshot()
  })

  it('outputs title', () => {
    render(<Alert title="Test title" />)
    expect(screen.getByText('Test title')).toBeTruthy()
  })

  it('outputs children', () => {
    render(<Alert title="Test title">Test content</Alert>)
    expect(screen.getByText('Test content')).toBeTruthy()
  })

  it('intent snapshot', () => {
    const { asFragment } = render(<Alert title="Test title" intent="danger" />)

    expect(asFragment()).toMatchSnapshot()
  })

  it('appearance snapshot', () => {
    const { asFragment } = render(<Alert title="Test title" appearance="card" />)

    expect(asFragment()).toMatchSnapshot()
  })
})
