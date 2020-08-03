import React, { memo, forwardRef } from 'react'
import Box, { splitBoxProps } from 'ui-box'
import { SearchIcon } from '../../icons'
import { TextInput } from '../../text-input'
import { useTheme } from '../../theme'
import { StackingOrder } from '../../constants'

const SearchInput = memo(
  forwardRef(function SearchInput(props, ref) {
    const theme = useTheme()
    const {
      appearance = 'default',
      disabled,
      height = 32,
      ...restProps
    } = props
    const { matchedProps, remainingProps } = splitBoxProps(restProps)
    const { width } = matchedProps
    const iconSize = theme.getIconSizeForInput(height)

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
            color="default"
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
