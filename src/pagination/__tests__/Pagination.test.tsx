import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Pagination } from '../'
import BasePaginationFixture from '../fixtures/BasePaginationFixture'

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Pagination', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('Shows the number of items if its not overflowing', async () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
    const { findByRole } = render(<Pagination page={1} totalPages={5} />)
    const container = await findByRole('navigation')
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(container.querySelectorAll('li')).toHaveLength(7)
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(container.querySelectorAll('button[aria-label~="Page"]')).toHaveLength(5)
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(container.querySelector('button[aria-current="true"').textContent).toEqual('1')
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('Shows a maximum # of items if it is overflowing', async () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
    const { findByRole } = render(<Pagination page={1} totalPages={10} />)
    const container = await findByRole('navigation')
    // Two handles + a max of 7 list items
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(container.querySelectorAll('li')).toHaveLength(9)
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('Shows ellipses if the component is overflowing and page < 4', async () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
    const { findByRole } = render(<Pagination page={1} totalPages={10} />)
    const container = await findByRole('navigation')
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(container.getElementsByTagName('span')).toHaveLength(1)
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(container.getElementsByTagName('span')[0].textContent).toEqual('...')
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('Shows two ellipses if the component is overflowing and page > 4 and page < totalPages - 4', async () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
    const { findByRole } = render(<Pagination page={5} totalPages={10} />)
    const container = await findByRole('navigation')
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(container.getElementsByTagName('span')).toHaveLength(2)
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('Shows one ellipsis if the totalPages - page < 4', async () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
    const { findByRole } = render(<Pagination page={7} totalPages={10} />)
    const container = await findByRole('navigation')
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(container.getElementsByTagName('span')).toHaveLength(1)
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('Only renders handles if there are an unknown # of pages', async () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
    const { findByRole } = render(<Pagination page={5} />)
    const container = await findByRole('navigation')
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(container.querySelectorAll('li')).toHaveLength(2)
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('Clicking on the handles advances and rewinds the current page', async () => {
    const { findByRole } = render(<BasePaginationFixture />)
    const container = await findByRole('navigation')
    const paginationItems = container.querySelectorAll('li')
    const previousHandle = paginationItems[0].querySelector('button')
    const nextHandle = paginationItems[paginationItems.length - 1].querySelector('button')

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(previousHandle).toHaveAttribute('disabled')
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(container.querySelector('button[aria-current="true"').textContent).toEqual('1')

    // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'HTMLButtonElement | null' is not... Remove this comment to see the full error message
    fireEvent.click(nextHandle)

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(container.querySelector('button[aria-current="true"').textContent).toEqual('2')

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(previousHandle).not.toHaveAttribute('disabled')

    // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'HTMLButtonElement | null' is not... Remove this comment to see the full error message
    fireEvent.click(previousHandle)

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(container.querySelector('button[aria-current="true"').textContent).toEqual('1')
  })
})
