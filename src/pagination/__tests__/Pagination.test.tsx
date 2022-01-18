import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Pagination } from '../'
import BasePaginationFixture from '../fixtures/BasePaginationFixture'

describe('Pagination', () => {
  it('Shows the number of items if its not overflowing', async () => {
    const { findByRole } = render(<Pagination page={1} totalPages={5} />)
    const container = await findByRole('navigation')
    expect(container.querySelectorAll('li')).toHaveLength(7)
    expect(container.querySelectorAll('button[aria-label~="Page"]')).toHaveLength(5)
    expect(container.querySelector('button[aria-current="true"').textContent).toEqual('1')
  })

  it('Shows a maximum # of items if it is overflowing', async () => {
    const { findByRole } = render(<Pagination page={1} totalPages={10} />)
    const container = await findByRole('navigation')
    // Two handles + a max of 7 list items
    expect(container.querySelectorAll('li')).toHaveLength(9)
  })

  it('Shows ellipses if the component is overflowing and page < 4', async () => {
    const { findByRole } = render(<Pagination page={1} totalPages={10} />)
    const container = await findByRole('navigation')
    expect(container.getElementsByTagName('span')).toHaveLength(1)
    expect(container.getElementsByTagName('span')[0].textContent).toEqual('...')
  })

  it('Shows two ellipses if the component is overflowing and page > 4 and page < totalPages - 4', async () => {
    const { findByRole } = render(<Pagination page={5} totalPages={10} />)
    const container = await findByRole('navigation')
    expect(container.getElementsByTagName('span')).toHaveLength(2)
  })

  it('Shows one ellipsis if the totalPages - page < 4', async () => {
    const { findByRole } = render(<Pagination page={7} totalPages={10} />)
    const container = await findByRole('navigation')
    expect(container.getElementsByTagName('span')).toHaveLength(1)
  })

  it('Only renders handles if there are an unknown # of pages', async () => {
    const { findByRole } = render(<Pagination page={5} />)
    const container = await findByRole('navigation')
    expect(container.querySelectorAll('li')).toHaveLength(2)
  })

  it('Clicking on the handles advances and rewinds the current page', async () => {
    const { findByRole } = render(<BasePaginationFixture />)
    const container = await findByRole('navigation')
    const paginationItems = container.querySelectorAll('li')
    const previousHandle = paginationItems[0].querySelector('button')
    const nextHandle = paginationItems[paginationItems.length - 1].querySelector('button')

    expect(previousHandle).toHaveAttribute('disabled')
    expect(container.querySelector('button[aria-current="true"').textContent).toEqual('1')

    fireEvent.click(nextHandle)

    expect(container.querySelector('button[aria-current="true"').textContent).toEqual('2')

    expect(previousHandle).not.toHaveAttribute('disabled')

    fireEvent.click(previousHandle)

    expect(container.querySelector('button[aria-current="true"').textContent).toEqual('1')
  })
})
