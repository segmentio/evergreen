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
    onChange: PropTypes.func.isRequired,
    spellCheck: PropTypes.bool.isRequired,
    placeholder: PropTypes.string,
  }

  static defaultProps = {
    onChange: () => {},
    spellCheck: true,
    placeholder: 'Filter...',
  }

  render() {
    const { children, onChange, placeholder, value, ...props } = this.props

    return (
      <TableHeaderCell {...props}>
        <SearchIcon marginLeft={-8} marginTop={-0.5} iconSize={12} />
        <Text
          paddingLeft={0}
          is="input"
          fontWeight={500}
          size={300}
          flex="1"
          css={invisibleInput}
          marginLeft={-2}
          placeholder={placeholder}
          onChange={e => onChange(e.target.value)}
          value={value}
        />
      </TableHeaderCell>
    )
  }
}
