import React, { memo, forwardRef } from 'react'
import Box, { PolymorphicBoxProps, splitBoxProps } from 'ui-box'
import { StackingOrder } from '../../constants'
import { SearchIcon } from '../../icons'
import { TextInput } from '../../text-input'
import { TextInputOwnProps } from "../../text-input/src/TextInput"

export interface SearchInputOwnProps extends TextInputOwnProps {
    height?: number;
}

export type SearchInputProps = PolymorphicBoxProps<'input', SearchInputOwnProps>;

const getIconSizeForInput = (height: any) => {
  if (height <= 28) return 12
  if (height <= 32) return 14
  if (height <= 40) return 16
  if (height <= 48) return 18
  return 20
}

const SearchInput: React.FC<SearchInputProps> = memo(
  forwardRef(function SearchInput(props, ref) {
    const { appearance = 'default', disabled, height = 32, ...restProps } = props
    const { matchedProps, remainingProps } = splitBoxProps(restProps)
    const { width } = matchedProps
    const iconSize = getIconSizeForInput(height)

    return (
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'unknown' is not assignable to type 'number |... Remove this comment to see the full error message
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
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
          <SearchIcon color="default" zIndex={StackingOrder.FOCUSED + 1} size={iconSize} />
        </Box>
        <TextInput
          ref={ref}
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

export default SearchInput
