import React from 'react'
import { shallow } from 'enzyme'
import render from 'react-test-renderer'

import Alert from '../src/Alert'

describe('<Alert />', () => {
  it('basic snapshot', () => {
    const component = <Alert title="A simple general message" />
    const tree = render.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('outputs title', () => {
    const component = shallow(<Alert title="Test title" />)
    expect(component.html()).toEqual(expect.stringContaining('Test title'))
  })

  it('outputs children', () => {
    const component = shallow(<Alert title="Test title">Test content</Alert>)
    expect(component.html()).toEqual(expect.stringContaining('Test content'))
  })

  it('intent snapshot', () => {
    const component = <Alert title="Test title" intent="danger" />
    const tree = render.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('appearance snapshot', () => {
    const component = <Alert title="Test title" appearance="card" />
    const tree = render.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
