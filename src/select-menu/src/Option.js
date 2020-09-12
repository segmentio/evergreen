import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import { Image } from '../../image'
import { Pane } from '../../layers'
import TableRow from '../../table/src/TableRow'
import TextTableCell from '../../table/src/TextTableCell'
import { useTheme } from '../../theme'

const Option = memo(
  forwardRef(function Option(props, ref) {
    const {
      disabled,
      height,
      icon,
      isHighlighted,
      isSelectable,
      isSelected,
      label,
      onDeselect,
      onSelect,
      style,
      ...rest
    } = props

    const { tokens } = useTheme()

    const disableProps = { color: 'muted' }
    const selectedProps = { color: tokens.selectedOptionColor }
    const emptyProps = {}

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
          ? { boxShadow: `inset 2px 0 0 ${tokens.selectedOptionColor}` }
          : {})}
        {...rest}
        ref={ref}
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
  })
)

Option.propTypes = {
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

export default Option
