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
     * Adds textAlign: right and fontFamily: mono.
     */
    isNumber: PropTypes.bool.isRequired,

    /**
     * Pass additional props to the Text component.
     */
    textProps: PropTypes.shape(PropTypes.object)
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
