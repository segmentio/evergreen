import React, { memo, forwardRef, useCallback } from 'react'
import { css } from 'glamor'
import PropTypes from 'prop-types'
import { SearchIcon } from '../../icons'
import { IconWrapper } from '../../icons/src/IconWrapper'
import { Text } from '../../typography'
import TableHeaderCell from './TableHeaderCell'

const invisibleInputClass = css({
  border: 'none',
  backgroundColor: 'transparent',
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  WebkitFontSmoothing: 'antialiased',

  '&:focus': {
    outline: 'none'
  },

  '&::placeholder': {
    color: 'rgba(67, 90, 111, 0.7)'
  }
}).toString()

const noop = () => {}

const SearchTableHeaderCell = memo(
  forwardRef(function SearchTableHeaderCell(props, ref) {
    const {
      value,
      children,
      onChange = noop,
      autoFocus,
      spellCheck = true,
      placeholder = 'Filter...',
      icon = SearchIcon,
      // @ts-expect-error ts-migrate(2700) FIXME: Rest types may only be created from object types.
      ...rest
    } = props

    // @ts-expect-error ts-migrate(2554) FIXME: Expected 0 arguments, but got 1.
    const handleChange = useCallback(e => onChange(e.target.value), [onChange])

    return (
      <TableHeaderCell {...rest}>
        {/* @ts-expect-error ts-migrate(2322) FIXME: Type 'MemoExoticComponent<ForwardRefExoticComponen... Remove this comment to see the full error message */}
        <IconWrapper icon={icon} color="muted" marginLeft={2} marginRight={10} size={12} />
        <Text
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
          is="input"
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
          size={300}
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
          flex="1"
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
          className={invisibleInputClass}
          value={value}
          // @ts-expect-error ts-migrate(2322) FIXME: Type '(e: any) => void' is not assignable to type ... Remove this comment to see the full error message
          onChange={handleChange}
          autoFocus={autoFocus}
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'boolean' is not assignable to type 'never'.
          spellCheck={spellCheck}
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
          fontWeight={500}
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
          marginLeft={-2}
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
          paddingLeft={0}
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
          placeholder={placeholder}
          ref={ref}
        />
      </TableHeaderCell>
    )
  })
)

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
SearchTableHeaderCell.propTypes = {
  /**
   * Composes the TableHeaderCell component as the base.
   */
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'Named... Remove this comment to see the full error message
  ...TableHeaderCell.propTypes,

  /**
   * The value of the input.
   */
  value: PropTypes.string,

  /**
   * Handler to be called when the input changes.
   */
  onChange: PropTypes.func,

  /**
   * Sets whether the component should be automatically focused on component render.
   */
  autoFocus: PropTypes.bool,

  /**
   * Sets whether to apply spell checking to the content.
   */
  spellCheck: PropTypes.bool,

  /**
   * Text to display in the input if the input is empty.
   */
  placeholder: PropTypes.string,

  /**
   * The Evergreen or custom icon before the label.
   */
  icon: PropTypes.oneOfType([PropTypes.elementType, PropTypes.element])
}

export default SearchTableHeaderCell
