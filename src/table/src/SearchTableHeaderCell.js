import { css } from 'glamor'
import React, { memo, forwardRef, useCallback } from 'react'
import PropTypes from 'prop-types'
import { Text } from '../../typography'
import { IconWrapper } from '../../icons/src/IconWrapper'
import { SearchIcon } from '../../icons'
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
    color: `rgba(67, 90, 111, 0.7)`
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
      ...rest
    } = props

    const handleChange = useCallback(e => onChange(e.target.value), [onChange])

    return (
      <TableHeaderCell {...rest}>
        <IconWrapper
          icon={icon}
          color="muted"
          marginLeft={2}
          marginRight={10}
          size={12}
        />
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

SearchTableHeaderCell.propTypes = {
  /**
   * Composes the TableHeaderCell component as the base.
   */
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
