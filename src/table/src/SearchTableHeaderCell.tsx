import React, { memo, forwardRef, useCallback } from 'react'
import { css } from 'glamor'
import { PolymorphicBoxProps } from 'ui-box'
import { SearchIcon } from '../../icons'
import { IconWrapper } from '../../icons/src/IconWrapper'
import { Text } from '../../typography'
import TableHeaderCell, { TableHeaderCellOwnProps } from './TableHeaderCell'

export interface SearchTableHeaderCellOwnProps extends TableHeaderCellOwnProps {
  /**
   * The value of the input.
   */
  value?: string
  /**
   * Sets whether the component should be automatically focused on component render.
   */
  autoFocus?: boolean
  /**
   * Sets whether to apply spell checking to the content.
   */
  spellCheck?: boolean
  /**
   * Text to display in the input if the input is empty.
   */
  placeholder?: string
  /**
   * Icon to display in the input.
   */
  icon?: React.ElementType | JSX.Element | null | false
  /**
   * Handler to be called when the input changes.
   */
  onChange?(value: string): void
}

export type SearchTableHeaderCellProps = PolymorphicBoxProps<'div', SearchTableHeaderCellOwnProps>

const invisibleInputClass = css({
  border: 'none',
  backgroundColor: 'transparent',
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  WebkitFontSmoothing: 'antialiased',

  '&:focus': {
    outline: 'none',
  },

  '&::placeholder': {
    color: 'rgba(67, 90, 111, 0.7)',
  },
}).toString()

const noop = () => {}

const SearchTableHeaderCell: React.FC<SearchTableHeaderCellProps> = memo(
  forwardRef(function SearchTableHeaderCell(props, ref) {
    const {
      value,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      children,
      onChange = noop,
      autoFocus,
      spellCheck = true,
      placeholder = 'Filter...',
      icon = SearchIcon,
      ...rest
    } = props

    const handleChange = useCallback((e) => onChange(e.target.value), [onChange])

    return (
      <TableHeaderCell {...rest}>
        <IconWrapper icon={icon} color="muted" marginLeft={2} marginRight={10} size={12} />
        <Text
          is="input"
          size={300}
          flex="1"
          className={invisibleInputClass}
          value={value}
          onChange={handleChange}
          autoFocus={autoFocus}
          spellCheck={spellCheck}
          fontWeight={500}
          marginLeft={-2}
          paddingLeft={0}
          placeholder={placeholder}
          ref={ref}
        />
      </TableHeaderCell>
    )
  })
)

export default SearchTableHeaderCell
