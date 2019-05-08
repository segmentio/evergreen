import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Text } from '../../typography'
import TableHeaderCell from './TableHeaderCell'

export default class TextTableHeaderCell extends PureComponent<
  any & React.ComponentProps<typeof TableHeaderCell>
> {
  static propTypes = {
    /**
     * Pass additional props to the Text component.
     */
    textProps: PropTypes.objectOf(PropTypes.string)
  }

  render() {
    const { children, textProps, isSortable, sortOrder, ...props } = this.props
    return (
      <TableHeaderCell {...props}>
        <Text fontWeight={500} size={300} flex="1" {...textProps}>
          {children}{' '}
        </Text>
      </TableHeaderCell>
    )
  }
}
