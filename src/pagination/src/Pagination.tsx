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
const PaginationButton = ({
  isSelected,
  onPageChange,
  page,
  ...rest
}: any) => {
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
      // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
      <Text
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
        paddingX={majorScale(1)}
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
        paddingY={majorScale(1)}
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
        minWidth={majorScale(4)}
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
        textAlign="center"
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
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

const range = (start: any, stop: any) => {
  const output = []
  for (let i = start; i <= stop; i++) {
    output.push(i)
  }

  return output
}

const getPaginationButtonContent = ({
  page,
  totalPages
}: any) => {
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
    // @ts-expect-error ts-migrate(2700) FIXME: Rest types may only be created from object types.
    { onNextPage = noop, onPageChange = noop, onPreviousPage = noop, page = 1, totalPages, ...rest },
    ref
  ) {
    return (
      <Pane is="nav" role="navigation" aria-label="Pagination" {...rest} ref={ref}>
        // @ts-expect-error ts-migrate(2746) FIXME: This JSX tag's 'children' prop expects a single ch... Remove this comment to see the full error message
        // @ts-expect-error ts-migrate(2746) FIXME: This JSX tag's 'children' prop expects a single ch... Remove this comment to see the full error message
        // @ts-expect-error ts-migrate(2746) FIXME: This JSX tag's 'children' prop expects a single ch... Remove this comment to see the full error message
        <Pane is="ul" display="flex" alignItems="center" padding={0}>
          // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
          // @ts-expect-error ts-migrate(2746) FIXME: This JSX tag's 'children' prop expects a single ch... Remove this comment to see the full error message
          // @ts-expect-error ts-migrate(2746) FIXME: This JSX tag's 'children' prop expects a single ch... Remove this comment to see the full error message
          <Pane is="li" listStyle="none">
            // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
            // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
            // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
            <IconButton appearance="minimal" icon={ChevronLeftIcon} disabled={page === 1} onClick={onPreviousPage} />
          </Pane>
          {totalPages
            ? getPaginationButtonContent({ totalPages, page }).map((val, i) => {
                const isSelected = val === page

                return (
                  // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
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
          // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
          // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
          // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
          <Pane is="li" listStyle="none">
            <IconButton
              // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
              appearance="minimal"
              // @ts-expect-error ts-migrate(2322) FIXME: Type 'MemoExoticComponent<ForwardRefExoticComponen... Remove this comment to see the full error message
              icon={ChevronRightIcon}
              // @ts-expect-error ts-migrate(2322) FIXME: Type 'boolean | undefined' is not assignable to ty... Remove this comment to see the full error message
              disabled={totalPages ? page === totalPages : undefined}
              // @ts-expect-error ts-migrate(2322) FIXME: Type '() => void' is not assignable to type 'never... Remove this comment to see the full error message
              onClick={onNextPage}
            />
          </Pane>
        </Pane>
      </Pane>
    )
  })
)

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
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
