/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import test from 'ava'
import render from 'react-test-renderer'
import { shallow } from 'enzyme'
import { FilePicker, CLASS_PREFIX } from '../src'

test('snapshot', t => {
  const component = <FilePicker />
  const tree = render.create(component).toJSON()
  t.snapshot(tree)
})

test('sets name', t => {
  const component = shallow(<FilePicker name="hi" />)
  t.is(component.find(`.${CLASS_PREFIX}-file-input`).prop('name'), 'hi')
})

test('sets accept', t => {
  const component = shallow(<FilePicker accept="application/json" />)
  t.is(
    component.find(`.${CLASS_PREFIX}-file-input`).prop('accept'),
    'application/json'
  )
})

test('sets required', t => {
  const component = shallow(<FilePicker required />)
  t.true(component.find(`.${CLASS_PREFIX}-file-input`).prop('required'))
})

test('sets multiple', t => {
  const component = shallow(<FilePicker multiple />)
  t.true(component.find(`.${CLASS_PREFIX}-file-input`).prop('multiple'))
})

test('sets disabled', t => {
  const component = shallow(<FilePicker disabled />)
  t.true(component.find(`.${CLASS_PREFIX}-file-input`).prop('disabled'))
  t.true(component.find(`.${CLASS_PREFIX}-button`).prop('disabled'))
})

test('sets capture', t => {
  const component = shallow(<FilePicker capture />)
  t.true(component.find(`.${CLASS_PREFIX}-file-input`).prop('capture'))
})

test('passes through height', t => {
  const component = shallow(<FilePicker height={20} />)
  t.is(component.find(`.${CLASS_PREFIX}-text-input`).prop('height'), 20)
  t.is(component.find(`.${CLASS_PREFIX}-button`).prop('height'), 20)
})

test('passes through props', t => {
  const component = shallow(<FilePicker width={20} />)
  t.is(component.find(`.${CLASS_PREFIX}-root`).prop('width'), 20)
})

test('handles 1 file selected', t => {
  const component = shallow(<FilePicker />)
  const e = {
    target: {
      files: [{ name: 'data.json' }]
    }
  }
  component.find(`.${CLASS_PREFIX}-file-input`).simulate('change', e)
  t.deepEqual(component.state('files'), e.target.files)
  t.is(component.find(`.${CLASS_PREFIX}-text-input`).prop('value'), 'data.json')
  t.true(component.find(`.${CLASS_PREFIX}-button`).contains('Replace file'))
})

test('handles 2 files selected', t => {
  const component = shallow(<FilePicker />)
  const e = {
    target: {
      files: [{ name: 'data1.json' }, { name: 'data2.json' }]
    }
  }
  component.find(`.${CLASS_PREFIX}-file-input`).simulate('change', e)
  t.deepEqual(component.state('files'), e.target.files)
  t.is(component.find(`.${CLASS_PREFIX}-text-input`).prop('value'), '2 files')
  t.true(component.find(`.${CLASS_PREFIX}-button`).contains('Replace files'))
})

// Firefox returns the same array instance in each change event for some reason
test('clones files array', t => {
  const component = shallow(<FilePicker />)
  const e = {
    target: {
      files: [{ name: 'data.json' }]
    }
  }
  component.find(`.${CLASS_PREFIX}-file-input`).simulate('change', e)
  t.deepEqual(component.state('files'), e.target.files)
  t.not(component.state('files'), e.target.files)
})
