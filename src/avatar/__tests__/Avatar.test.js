import React from 'react'
import { render } from '@testing-library/react'
import Avatar from '../src/Avatar'

describe('Avatar', () => {
  it('should not crash when rendering', () => {
    expect(() => {
      render(<Avatar />)
    }).not.toThrowError()
  })

  it('should render question mark when name is empty and no image src', () => {
    const { getByText } = render(<Avatar name="" />)
    expect(getByText('?')).toBeVisible()
  })

  it('should render one char when name is one word and no image src', () => {
    const { getByText } = render(<Avatar name="Alan" />)
    expect(getByText('A')).toBeVisible()
  })

  it('should render first and last initial when name is more than one word and no image src', () => {
    const { getByText } = render(<Avatar name="Alan Turing Three" />)
    expect(getByText('AT')).toBeVisible()
  })

  it('should render an image when pass in src', () => {
    const { getByRole } = render(
      <Avatar src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg" />
    )
    expect(
      getByRole('img', { src: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg' })
    ).toBeVisible()
  })

  it('should render the according size', () => {
    expect()
  })

  it('should render a square if the shape is square', () => {
    expect()
  })
})
