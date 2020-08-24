import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Pane } from '../../layers'
import { Image } from '../../image'
import TableRow from '../../table/src/TableRow'
// TODO - move into the theme object
import tokens from '../../theme/src/themes/v6/foundational-styles/tokens'
import TextTableCell from '../../table/src/TextTableCell'

const disableProps = { color: 'muted' }
const selectedProps = { color: tokens.primary.base }
const emptyProps = {}

export default class Option extends PureComponent {
  static propTypes = {
    label: PropTypes.string,
    icon: PropTypes.string,
    style: PropTypes.any,
    height: PropTypes.number,
    onSelect: PropTypes.func,
    onDeselect: PropTypes.func,
    isHighlighted: PropTypes.bool,
    isSelected: PropTypes.bool,
    isSelectable: PropTypes.bool,
    disabled: PropTypes.bool
  }

  render() {
    const {
      label,
      onSelect,
      onDeselect,
      isHighlighted,
      isSelected,
      isSelectable,
      disabled,
      style,
      height,
      icon,
      ...props
    } = this.props

    let textProps = emptyProps
    if (disabled) {
      textProps = disableProps
    }

    if (isSelected) {
      textProps = selectedProps
    }

    return (
      <TableRow
        isSelectable={isSelectable && !disabled}
        isHighlighted={isHighlighted}
        onSelect={onSelect}
        onDeselect={onDeselect}
        isSelected={isSelected}
        style={style}
        display="flex"
        alignItems="center"
        borderBottom="muted"
        {...(isSelected
          ? { boxShadow: `inset 2px 0 0 ${tokens.primary.base}` }
          : {})}
        {...props}
      >
        <TextTableCell
          height={height}
          textProps={textProps}
          paddingX={16}
          borderRight={null}
          flex={1}
          alignSelf="stretch"
          cursor={disabled ? 'default' : 'pointer'}
        >
          <Pane alignItems="center" display="flex">
            {icon && <Image src={icon} width={24} marginRight={8} />}
            {label}
          </Pane>
        </TextTableCell>
      </TableRow>
    )
  }
}
