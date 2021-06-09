import React from 'react'
import { render } from '@testing-library/react'
import { LockIcon } from '../../icons'
import EmptyState from '../src/EmptyState'

describe('Empty States', () => {
  it('does not crash when rendering', () => {
    expect(() =>
      render(<EmptyState title="My Empty States" image={<LockIcon color="#EBAC91" />}></EmptyState>)
    ).not.toThrowError()
  })
  it('should render an image and a title', () => {
    const { getByText } = render(<EmptyState title="My Empty States" image={<LockIcon color="#EBAC91" />}></EmptyState>)
    expect(getByText('My Empty States')).toBeInTheDocument()
  })
  it('should render decription when passed in', () => {})
  it('should render primary button when passed in', () => {})
  it('should render secondary button when passed in', () => {})
  it('should render link button when passed in', () => {})
  it('should update background color when background is passed in', () => {})
  it('should not passed secondary CTA when orientaion is vertical', () => {})
  it('should not passed anchor CTA when orientaion is vertical', () => {})
})
