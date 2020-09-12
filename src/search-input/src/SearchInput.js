import React, { memo, forwardRef } from 'react'
import Box, { splitBoxProps } from 'ui-box'
import { StackingOrder } from '../../constants'
import { SearchIcon } from '../../icons'
import { TextInput } from '../../text-input'

const getIconSizeForInput = height => {
  if (height <= 28) return 12
  if (height <= 32) return 14
  if (height <= 40) return 16
  if (height <= 48) return 18
  return 20
}

const SearchInput = memo(
  forwardRef(function SearchInput(props, ref) {
    const {
      appearance = 'default',
      disabled,
      height = 32,
      ...restProps
    } = props
    const { matchedProps, remainingProps } = splitBoxProps(restProps)
    const { width } = matchedProps
    const iconSize = getIconSizeForInput(height)

    return (
      <Box
        position="relative"
        display="inline-flex"
        height={height}
        ref={ref}
        {...matchedProps}
      >
        <Box
          height={height}
          width={height}
          pointerEvents="none"
          position="absolute"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <SearchIcon
            color="gray600"
            zIndex={StackingOrder.FOCUSED + 1}
            size={iconSize}
          />
        </Box>
        <TextInput
          height={height}
          paddingLeft={height}
          appearance={appearance}
          disabled={disabled}
          width={width}
          type="search"
          {...remainingProps}
        />
      </Box>
    )
  })
)

SearchInput.propTypes = {
  /**
   * Composes the TextInput component as the base.
   */
  ...TextInput.propTypes
}

export default SearchInput
