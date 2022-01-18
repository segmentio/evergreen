import React from 'react'
import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import Alert from '../src/Alert'

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('<Alert />', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('basic snapshot', () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
    const component = <Alert title="A simple general message" />
    const tree = renderer.create(component).toJSON()
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(tree).toMatchSnapshot()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('outputs title', () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
    render(<Alert title="Test title" />)
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(screen.getByText('Test title')).toBeTruthy()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('outputs children', () => {
    // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
    render(<Alert title="Test title">Test content</Alert>)
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(screen.getByText('Test content')).toBeTruthy()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('intent snapshot', () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
    const component = <Alert title="Test title" intent="danger" />
    const tree = renderer.create(component).toJSON()
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(tree).toMatchSnapshot()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('appearance snapshot', () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
    const component = <Alert title="Test title" appearance="card" />
    const tree = renderer.create(component).toJSON()
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(tree).toMatchSnapshot()
  })
})
