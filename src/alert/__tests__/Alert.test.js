import React from 'react'
import render from 'react-test-renderer'
import { shallow } from 'enzyme'

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

  it('type snapshot', () => {
    const component = <Alert title="Test title" type="danger" />
    const tree = render.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('hasTrim=true snapshot', () => {
    const component = <Alert title="Test title" hasTrim />
    const tree = render.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('hasTrim=false snapshot', () => {
    const component = <Alert title="Test title" hasTrim={false} />
    const tree = render.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('appearance snapshot', () => {
    const component = <Alert title="Test title" appearance="card" />
    const tree = render.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
