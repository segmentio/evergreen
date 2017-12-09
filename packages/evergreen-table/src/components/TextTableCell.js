import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Text } from 'evergreen-typography'
import TableCell from './TableCell'

const ellipsis = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
}

export default class TextTableCell extends PureComponent {
  static propTypes = {
    ...TableCell.propTypes,
    isNumber: PropTypes.bool.isRequired,
    textProps: PropTypes.shape(Text.propTypes)
  }

  static defaultProps = {
    isNumber: false
  }

  render() {
    const { children, textProps, isNumber, ...props } = this.props
    return (
      <TableCell {...props}>
        <Text
          size={300}
          flex="1"
          {...ellipsis}
          {...(isNumber
            ? {
                textAlign: 'right',
                fontFamily: 'mono'
              }
            : {})}
          {...textProps}
        >
          {children}
        </Text>
      </TableCell>
    )
  }
}
