import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Pane } from '../../layers'
import { TableRow, TextTableCell } from '../../table'

const CheckIcon = ({ fill = 'currentColor', ...props }) => (
  <svg width={10} height={7} viewBox="0 0 10 7" {...props}>
    <path
      fill={fill}
      fillRule="evenodd"
      d="M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z"
    />
  </svg>
)

CheckIcon.propTypes = {
  fill: PropTypes.string
}

export default class Option extends PureComponent {
  static propTypes = {
    label: PropTypes.string,
    style: PropTypes.any,
    height: PropTypes.number,
    onSelect: PropTypes.func,
    isHighlighted: PropTypes.bool,
    isSelected: PropTypes.bool
  }

  render() {
    const {
      label,
      onSelect,
      isHighlighted,
      isSelected,
      style,
      height,
      ...props
    } = this.props

    return (
      <TableRow
        isSelectable
        isHighlighted={isHighlighted}
        onSelect={onSelect}
        isSelected={isSelected}
        style={style}
        display="flex"
        alignItems="center"
        {...props}
      >
        <Pane
          paddingLeft={11}
          paddingRight={8}
          marginTop={-5}
          opacity={isSelected ? 1 : 0}
          flexGrow={0}
        >
          <CheckIcon />
        </Pane>
        <TextTableCell
          height={height}
          {...(isSelected
            ? {
                textProps: {
                  color: 'inherit'
                }
              }
            : {})}
          paddingLeft={0}
          borderRight={null}
          flex={1}
          alignSelf="stretch"
        >
          {label}
        </TextTableCell>
      </TableRow>
    )
  }
}
