import React from 'react'
import { render, screen } from '@testing-library/react'
import Avatar from '../src/Avatar'

describe('Avatar', () => {
  it('should not crash when rendering', () => {
    expect(() => {
      render(<Avatar />)
    }).not.toThrowError()
  })

  it('should render question mark when name is empty and no image src', () => {
    render(<Avatar name="" />)
    expect(screen.getByText('?')).toBeVisible()
  })

  it('should render one char when name is one word and no image src', () => {
    render(<Avatar name="Alan" />)
    expect(screen.getByText('A')).toBeVisible()
  })

  it('should render first and last initial when name is more than one word and no image src', () => {
    render(<Avatar name="Alan Turing Batman" />)
    expect(screen.getByText('AT')).toBeVisible()
  })

  it('should render an image when pass in src', () => {
    render(<Avatar src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg" />)
    expect(screen.getByRole('img').getAttribute('src')).toEqual(
      'https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg'
    )
  })

  it('should render the according size', () => {
    render(<Avatar name="Alan Turing" size={80} />)
    expect(screen.getByTitle('Alan Turing')).toHaveStyle('height: 80px')
  })

  it('should render a square if the shape is square', () => {
    render(<Avatar name="Alan Turing" shape="square" />)
    expect(screen.getByTitle('Alan Turing')).toHaveStyle('border-top-right-radius: 4px')
  })

  it('should render the color when specified', () => {
    render(<Avatar name="Alan Turing" color="green" />)
    expect(screen.getByTitle('Alan Turing')).toHaveStyle('background-color: #DCF2EA')
  })
})
