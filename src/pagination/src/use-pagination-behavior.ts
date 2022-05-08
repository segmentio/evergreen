import { useCallback, useState } from 'react'

export interface UsePaginationBehaviorInput {
  page?: number
}

export interface UsePaginationBehaviorOutput extends Required<UsePaginationBehaviorInput> {
  onNextPage: () => void
  onPreviousPage: () => void
  onPageChange: (page: number) => void
}

const usePaginationBehavior = ({
  page: inputPage = 1,
}: UsePaginationBehaviorInput = {}): UsePaginationBehaviorOutput => {
  const [page, setPage] = useState(inputPage)

  const onNextPage = useCallback(() => {
    setPage((page) => page + 1)
  }, [])

  const onPreviousPage = useCallback(() => {
    setPage((page) => page - 1)
  }, [])

  return {
    page,
    onNextPage,
    onPageChange: setPage,
    onPreviousPage,
  }
}

export default usePaginationBehavior
