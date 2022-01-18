import React, { memo, forwardRef } from 'react'
import Box, { splitBoxProps } from 'ui-box'
import { StackingOrder } from '../../constants'
import { SearchIcon } from '../../icons'
import { TextInput } from '../../text-input'

const getIconSizeForInput = (height: any) => {
  if (height <= 28) return 12
  if (height <= 32) return 14
  if (height <= 40) return 16
  if (height <= 48) return 18
  return 20
}

const SearchInput = memo(
  forwardRef(function SearchInput(props, ref) {
    // @ts-expect-error ts-migrate(2700) FIXME: Rest types may only be created from object types.
    const { appearance = 'default', disabled, height = 32, ...restProps } = props
    const { matchedProps, remainingProps } = splitBoxProps(restProps)
    const { width } = matchedProps
    const iconSize = getIconSizeForInput(height)

    return (
      // @ts-expect-error ts-migrate(2783) FIXME: 'position' is specified more than once, so this us... Remove this comment to see the full error message
      <Box position="relative" display="inline-flex" height={height} {...matchedProps}>
        <Box
          height={height}
          width={height}
          pointerEvents="none"
          position="absolute"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
          <SearchIcon color="default" zIndex={StackingOrder.FOCUSED + 1} size={iconSize} />
        </Box>
        <TextInput
          ref={ref}
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
          height={height}
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
          paddingLeft={height}
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
          appearance={appearance}
          disabled={disabled}
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
          width={width}
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
          type="search"
          {...remainingProps}
        />
      </Box>
    )
  })
)

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
SearchInput.propTypes = {
  /**
   * Composes the TextInput component as the base.
   */
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
  ...TextInput.propTypes
}

export default SearchInput
