import React from 'react'
import test from 'ava'
import render from 'react-test-renderer'
import { shallow } from 'enzyme'

import Alert from '../src/Alert'

test('basic snapshot', t => {
  const component = <Alert title="A simple general message" />
  const tree = render.create(component).toJSON()
  t.snapshot(tree)
})

test('outputs title', t => {
  const component = shallow(<Alert title="Test title" />)
  t.true(component.html().includes('Test title'))
})

test('outputs children', t => {
  const component = shallow(<Alert title="Test title">Test content</Alert>)
  t.true(component.html().includes('Test content'))
})

test('type snapshot', t => {
  const component = <Alert title="Test title" type="danger" />
  const tree = render.create(component).toJSON()
  t.snapshot(tree)
})

test('hasTrim=true snapshot', t => {
  const component = <Alert title="Test title" hasTrim />
  const tree = render.create(component).toJSON()
  t.snapshot(tree)
})

test('hasTrim=false snapshot', t => {
  const component = <Alert title="Test title" hasTrim={false} />
  const tree = render.create(component).toJSON()
  t.snapshot(tree)
})

test('appearance snapshot', t => {
  const component = <Alert title="Test title" appearance="card" />
  const tree = render.create(component).toJSON()
  t.snapshot(tree)
})
