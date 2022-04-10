import React from 'react'
import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import Alert from '../src/Alert'

describe('<Alert />', () => {
  it('basic snapshot', () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
    const component = <Alert title="A simple general message" />
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('outputs title', () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
    render(<Alert title="Test title" />)
    expect(screen.getByText('Test title')).toBeTruthy()
  })

  it('outputs children', () => {
    // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
    render(<Alert title="Test title">Test content</Alert>)
    expect(screen.getByText('Test content')).toBeTruthy()
  })

  it('intent snapshot', () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
    const component = <Alert title="Test title" intent="danger" />
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('appearance snapshot', () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
    const component = <Alert title="Test title" appearance="card" />
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
