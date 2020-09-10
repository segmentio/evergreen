import React from 'react'
import render from 'react-test-renderer'
import { shallow } from 'enzyme'

import FilePicker, { CLASS_PREFIX } from '../src/FilePicker'

describe('<FilePicker />', () => {
  it('snapshot', () => {
    const component = <FilePicker />
    const tree = render.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('sets name', () => {
    const component = shallow(<FilePicker name="hi" />)
    expect(component.find(`.${CLASS_PREFIX}-file-input`).prop('name')).toEqual(
      'hi'
    )
  })

  it('sets accept', () => {
    const component = shallow(<FilePicker accept="application/json" />)
    expect(
      component.find(`.${CLASS_PREFIX}-file-input`).prop('accept')
    ).toEqual('application/json')
  })

  it('sets required', () => {
    const component = shallow(<FilePicker required />)
    expect(component.find(`.${CLASS_PREFIX}-file-input`).prop('required')).toBe(
      true
    )
  })

  it('sets multiple', () => {
    const component = shallow(<FilePicker multiple />)
    expect(component.find(`.${CLASS_PREFIX}-file-input`).prop('multiple')).toBe(
      true
    )
  })

  it('sets disabled', () => {
    const component = shallow(<FilePicker disabled />)
    expect(component.find(`.${CLASS_PREFIX}-file-input`).prop('disabled')).toBe(
      true
    )
    expect(component.find(`.${CLASS_PREFIX}-button`).prop('disabled')).toBe(
      true
    )
  })

  it('sets capture', () => {
    const component = shallow(<FilePicker capture />)
    expect(component.find(`.${CLASS_PREFIX}-file-input`).prop('capture')).toBe(
      true
    )
  })

  it('passes through height', () => {
    const component = shallow(<FilePicker height={20} />)
    expect(
      component.find(`.${CLASS_PREFIX}-text-input`).prop('height')
    ).toEqual(20)
    expect(component.find(`.${CLASS_PREFIX}-button`).prop('height')).toEqual(20)
  })

  it('passes through props', () => {
    const component = shallow(<FilePicker width={20} />)
    expect(component.find(`.${CLASS_PREFIX}-root`).prop('width')).toEqual(20)
  })

  it('calls onChange', () => {
    const onChange = jest.fn()
    const component = shallow(<FilePicker onChange={onChange} />)
    const e = {
      target: {
        files: [{ name: 'data.json' }]
      }
    }
    component.find(`.${CLASS_PREFIX}-file-input`).simulate('change', e)
    expect(onChange).toHaveBeenCalledTimes(1)
  })

  it('calls onBlur', () => {
    const onBlur = jest.fn()
    const component = shallow(<FilePicker onBlur={onBlur} />)
    const e = {
      target: {
        files: [{ name: 'data.json' }]
      }
    }

    component.find(`.${CLASS_PREFIX}-file-input`).simulate('change', e)
    component.find(`.${CLASS_PREFIX}-text-input`).simulate('blur')
    expect(onBlur).toHaveBeenCalledTimes(1)
  })

  it('sets placeholder', () => {
    const component = shallow(<FilePicker placeholder="placeholder here!" />)
    expect(
      component.find(`.${CLASS_PREFIX}-text-input`).prop('placeholder')
    ).toEqual('placeholder here!')
  })
})
