/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import test from 'ava'
import render from 'react-test-renderer'
import { shallow } from 'enzyme'
import { CheckCircleIcon } from 'evergreen-icons'
import { Alert } from '../src'

test('alert: basic snapshot', t => {
  const component = <Alert title="A simple general message" />
  const tree = render.create(component).toJSON()
  t.snapshot(tree)
})

test('alert: outputs title', t => {
  const component = shallow(<Alert title="Test title" />)
  t.true(component.contains('Test title'))
})

test('alert: outputs children', t => {
  const component = shallow(<Alert title="Test title">Test content</Alert>)
  t.true(component.contains('Test content'))
})

test('alert: type snapshot', t => {
  const component = <Alert title="Test title" type="danger" />
  const tree = render.create(component).toJSON()
  t.snapshot(tree)
})

test('alert: hasTrim=true snapshot', t => {
  const component = <Alert title="Test title" hasTrim />
  const tree = render.create(component).toJSON()
  t.snapshot(tree)
})

test('alert: hasTrim=false snapshot', t => {
  const component = <Alert title="Test title" hasTrim={false} />
  const tree = render.create(component).toJSON()
  t.snapshot(tree)
})

test('alert: outputs icon (hasIcon=true)', t => {
  const component = shallow(<Alert title="Test title" type="success" hasIcon />)
  t.true(component.containsMatchingElement(<CheckCircleIcon />))
})

test('alert: does not output icon (hasIcon=false)', t => {
  const component = shallow(
    <Alert title="Test title" type="success" hasIcon={false} />
  )
  t.false(component.containsMatchingElement(<CheckCircleIcon />))
})

test('alert: appearance snapshot', t => {
  const component = <Alert title="Test title" appearance="card" />
  const tree = render.create(component).toJSON()
  t.snapshot(tree)
})
