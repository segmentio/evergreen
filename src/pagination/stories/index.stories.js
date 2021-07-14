import React from 'react'
import { storiesOf } from '@storybook/react'
import { Pagination, usePaginationBehavior } from '../'

storiesOf('pagination', module)
  .add('Pagination with no overflow', () => {
    const { onNextPage, onPageChange, onPreviousPage, page } = usePaginationBehavior({ page: 3 })

    return (
      <Pagination
        page={page}
        totalPages={5}
        onNextPage={onNextPage}
        onPreviousPage={onPreviousPage}
        onPageChange={onPageChange}
      />
    )
  })
  .add('Pagination with overflow', () => {
    const { onNextPage, onPageChange, onPreviousPage, page } = usePaginationBehavior({ page: 5 })

    return (
      <Pagination
        page={page}
        totalPages={10}
        onNextPage={onNextPage}
        onPreviousPage={onPreviousPage}
        onPageChange={onPageChange}
      />
    )
  })
  .add('Pagination with unknown # of total pages', () => {
    const { onNextPage, onPageChange, onPreviousPage, page } = usePaginationBehavior()

    return (
      <Pagination page={page} onNextPage={onNextPage} onPreviousPage={onPreviousPage} onPageChange={onPageChange} />
    )
  })
