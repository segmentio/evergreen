import React from 'react'
import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import Alert from '../src/Alert'

describe('<Alert />', () => {
  it('basic snapshot', () => {
    const component = <Alert title="A simple general message" />
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
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
    const component = <Alert title="Test title" intent="danger" />
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('appearance snapshot', () => {
    const component = <Alert title="Test title" appearance="card" />
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
