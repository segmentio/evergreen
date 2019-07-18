import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Text } from '../../typography'
import TableCell from './TableCell'

const ellipsis = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
}

export default class TextTableCell extends PureComponent {
  static propTypes = {
    /**
     * Composes the TableCell component as the base.
     */
    ...TableCell.propTypes,

    /**
     * Adds fontFamily: mono.
     */
    isNumber: PropTypes.bool.isRequired,

    /**
     * Pass additional props to the Text component.
     */
    textProps: PropTypes.object
  }

  static defaultProps = {
    isNumber: false
  }

  render() {
    const { children, textProps, isNumber, placeholder, ...props } = this.props

    return (
      <TableCell {...props}>
        <Text
          size={300}
          flex="1"
          {...ellipsis}
          {...(isNumber ? { fontFamily: 'mono' } : {})}
          {...textProps}
        >
          {children}
        </Text>
      </TableCell>
    )
  }
}
