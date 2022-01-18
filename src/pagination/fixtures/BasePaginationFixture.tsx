import React from 'react'
import { Pagination, usePaginationBehavior } from '../'

const BasePaginationFixture = () => {
  const { onNextPage, onPageChange, onPreviousPage, page } = usePaginationBehavior({ page: 1 })

  return (
    <Pagination
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
      page={page}
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
      totalPages={10}
      // @ts-expect-error ts-migrate(2322) FIXME: Type '() => void' is not assignable to type 'never... Remove this comment to see the full error message
      onNextPage={onNextPage}
      // @ts-expect-error ts-migrate(2322) FIXME: Type '() => void' is not assignable to type 'never... Remove this comment to see the full error message
      onPreviousPage={onPreviousPage}
      // @ts-expect-error ts-migrate(2322) FIXME: Type '(index: any) => void' is not assignable to t... Remove this comment to see the full error message
      onPageChange={onPageChange}
    />
  )
}

export default BasePaginationFixture
