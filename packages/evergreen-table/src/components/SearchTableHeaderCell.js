import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Text } from 'evergreen-typography'
import { SearchIcon } from 'evergreen-icons'
import colors from 'evergreen-colors'
import TableHeaderCell from './TableHeaderCell'

const invisibleInput = {
  border: 'none',
  backgroundColor: 'transparent',
  WebkitAppearance: 'none',
  WebkitFontSmoothing: 'antialiased',

  '&:focus': {
    outline: 'none',
  },

  '&::placeholder': {
    color: colors.neutral['100A'],
  },
}

export default class SearchTableHeaderCell extends PureComponent {
  static propTypes = {
    ...TableHeaderCell.propTypes,
    value: PropTypes.string,
    onChange: PropTypes.func,
    autoFocus: PropTypes.bool,
    spellCheck: PropTypes.bool,
    placeholder: PropTypes.string,
  }

  static defaultProps = {
    onChange: () => {},
    spellCheck: true,
    placeholder: 'Filter...',
  }

  render() {
    const {
      value,
      children,
      onChange,
      autoFocus,
      spellCheck,
      placeholder,
      ...props
    } = this.props

    return (
      <TableHeaderCell {...props}>
        <SearchIcon marginLeft={-8} marginTop={-0.5} iconSize={12} />
        <Text
          is="input"
          size={300}
          flex="1"
          css={invisibleInput}
          value={value}
          onChange={e => onChange(e.target.value)}
          autoFocus={autoFocus}
          spellCheck={spellCheck}
          fontWeight={500}
          marginLeft={-2}
          paddingLeft={0}
          placeholder={placeholder}
        />
      </TableHeaderCell>
    )
  }
}
