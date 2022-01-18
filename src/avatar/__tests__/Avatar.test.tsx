import React from 'react'
import { render, screen } from '@testing-library/react'
import Avatar from '../src/Avatar'

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Avatar', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should not crash when rendering', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(() => {
      render(<Avatar />)
    }).not.toThrowError()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should render question mark when name is empty and no image src', () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
    render(<Avatar name="" />)
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(screen.getByText('?')).toBeVisible()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should render one char when name is one word and no image src', () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
    render(<Avatar name="Alan" />)
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(screen.getByText('A')).toBeVisible()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should render first and last initial when name is more than one word and no image src', () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
    render(<Avatar name="Alan Turing Batman" />)
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(screen.getByText('AT')).toBeVisible()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should render an image when pass in src', () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
    render(<Avatar src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg" />)
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(screen.getByRole('img').getAttribute('src')).toEqual(
      'https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg'
    )
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should render the according size', () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
    render(<Avatar name="Alan Turing" size={80} />)
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(screen.getByTitle('Alan Turing')).toHaveStyle('height: 80px')
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should render a square if the shape is square', () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
    render(<Avatar name="Alan Turing" shape="square" />)
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(screen.getByTitle('Alan Turing')).toHaveStyle('border-top-right-radius: 4px')
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should render the color when specified', () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
    render(<Avatar name="Alan Turing" color="green" />)
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(screen.getByTitle('Alan Turing')).toHaveStyle('background-color: #DCF2EA')
  })
})
