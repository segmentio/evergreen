import React, { useState, useCallback, useMemo, memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import { Button, IconButton } from '../../buttons'
import { ChevronLeftIcon, ChevronRightIcon } from '../../icons'
import { Pane } from '../../layers'
import { majorScale, minorScale } from '../../scales'
import { useTheme } from '../../theme'
import { Text } from '../../typography'

export const usePaginationBehavior = ({ page: inputPage = 1 } = {}) => {
  const [page, setPage] = useState(inputPage)

  const onNextPage = useCallback(() => {
    setPage(page => page + 1)
  }, [])

  const onPreviousPage = useCallback(() => {
    setPage(page => page - 1)
  }, [])

  const onPageChange = useCallback(index => {
    setPage(index)
  }, [])

  return {
    page,
    onNextPage,
    onPageChange,
    onPreviousPage
  }
}

const MAX_HANDLES_TO_SHOW = 7

/* eslint-disable react/prop-types */
const PaginationButton = ({ isSelected, onPageChange, page, ...rest }) => {
  const { colors } = useTheme()
  const isEllipsis = typeof page === 'string' && page === '...'
  const selectedProps = useMemo(() => {
    if (isSelected) {
      return {
        backgroundColor: colors.blue50,
        color: colors.blue400
      }
    } else {
      return {}
    }
  }, [isSelected, colors])

  const onClick = useCallback(() => {
    onPageChange(page)
  }, [page, onPageChange])

  if (isEllipsis) {
    return (
      <Text
        paddingX={majorScale(1)}
        paddingY={majorScale(1)}
        minWidth={majorScale(4)}
        textAlign="center"
        aria-label="Pagination overflow"
      >
        {page}
      </Text>
    )
  }

  return (
    <Button
      aria-current={isSelected}
      aria-label={`Page ${page}`}
      onClick={onClick}
      minWidth={majorScale(4)}
      paddingX={majorScale(1)}
      {...rest}
      {...selectedProps}
    />
  )
}
/* eslint-enable react/prop-types */

const range = (start, stop) => {
  const output = []
  for (let i = start; i <= stop; i++) {
    output.push(i)
  }

  return output
}

const getPaginationButtonContent = ({ page, totalPages }) => {
  if (totalPages <= MAX_HANDLES_TO_SHOW) {
    return range(1, totalPages)
  }

  if (totalPages > MAX_HANDLES_TO_SHOW && page <= 4) {
    return [...range(1, 5), '...', totalPages]
  }

  if (totalPages - page < 4) {
    return [1, '...', ...range(totalPages - 4, totalPages)]
  }

  return [1, '...', ...range(page - 1, page + 1), '...', totalPages]
}

const noop = () => {}

const Pagination = memo(
  forwardRef(function Pagination(
    { onNextPage = noop, onPageChange = noop, onPreviousPage = noop, page = 1, totalPages, ...rest },
    ref
  ) {
    return (
      <Pane is="nav" role="navigation" aria-label="Pagination" {...rest} ref={ref}>
        <Pane is="ul" display="flex" alignItems="center" padding={0}>
          <Pane is="li" listStyle="none">
            <IconButton
              appearance="minimal"
              icon={ChevronLeftIcon}
              disabled={page === 1}
              onClick={onPreviousPage}
              aria-label="Previous page"
            />
          </Pane>
          {totalPages
            ? getPaginationButtonContent({ totalPages, page }).map((val, i) => {
                const isSelected = val === page

                return (
                  <Pane is="li" listStyle="none" key={`${val}-${i}`}>
                    <PaginationButton
                      appearance="minimal"
                      isSelected={isSelected}
                      page={val}
                      onPageChange={onPageChange}
                      marginX={minorScale(1) / 2}
                    >
                      {val}
                    </PaginationButton>
                  </Pane>
                )
              })
            : null}
          <Pane is="li" listStyle="none">
            <IconButton
              appearance="minimal"
              icon={ChevronRightIcon}
              disabled={totalPages ? page === totalPages : undefined}
              onClick={onNextPage}
              aria-label="Next page"
            />
          </Pane>
        </Pane>
      </Pane>
    )
  })
)

Pagination.propTypes = {
  /**
   * The current page that a user is on - defaults to 1.
   */
  page: PropTypes.number.isRequired,
  /**
   * The total number of pages to render. If ommitted, the page numbers will not be shown to the end user.
   */
  totalPages: PropTypes.number,
  /**
   * Callback handler when the next page button is clicked.
   */
  onNextPage: PropTypes.func,
  /**
   * Callback handler when the previous page button is clicked.
   */
  onPreviousPage: PropTypes.func,
  /**
   * Callback handler when a specific page # is clicked
   */
  onPageChange: PropTypes.func
}

export default Pagination
