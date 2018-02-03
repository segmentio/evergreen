/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import test from 'ava'
import render from 'react-test-renderer'
import { shallow } from 'enzyme'
import { CheckCircleIcon } from 'evergreen-icons'
import { Alert } from '../src'

test('basic snapshot', t => {
  const component = <Alert title="A simple general message" />
  const tree = render.create(component).toJSON()
  t.snapshot(tree)
})

test('outputs title', t => {
  const component = shallow(<Alert title="Test title" />)
  t.true(component.contains('Test title'))
})

test('outputs children', t => {
  const component = shallow(<Alert title="Test title">Test content</Alert>)
  t.true(component.contains('Test content'))
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

test('outputs icon (hasIcon=true)', t => {
  const component = shallow(<Alert title="Test title" type="success" hasIcon />)
  t.true(component.containsMatchingElement(<CheckCircleIcon />))
})

test('does not output icon (hasIcon=false)', t => {
  const component = shallow(
    <Alert title="Test title" type="success" hasIcon={false} />
  )
  t.false(component.containsMatchingElement(<CheckCircleIcon />))
})

test('appearance snapshot', t => {
  const component = <Alert title="Test title" appearance="card" />
  const tree = render.create(component).toJSON()
  t.snapshot(tree)
})
