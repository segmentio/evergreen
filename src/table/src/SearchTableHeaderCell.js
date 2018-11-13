import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Text } from '../../typography'
import { Icon } from '../../icon'
import TableHeaderCell from './TableHeaderCell'

const invisibleInput = {
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
}

export default class SearchTableHeaderCell extends PureComponent {
  static propTypes = {
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
    placeholder: PropTypes.string
  }

  static defaultProps = {
    onChange: () => {},
    spellCheck: true,
    placeholder: 'Filter...'
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
        <Icon
          icon="search"
          color="muted"
          marginLeft={2}
          marginRight={10}
          size={12}
        />
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
