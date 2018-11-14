import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import addMonths from 'date-fns/add_months'
import addYears from 'date-fns/add_years'
import format from 'date-fns/format'

import { Popover } from '../../popover'
import { TextInput } from '../../text-input'
import { Text } from '../../typography'
import { IconButton } from '../../buttons'
import { majorScale } from '../../scales'

import Calendar from './Calendar'

class DatePickerPopover extends PureComponent {
  static propTypes = {
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.instanceOf(Date)
    ]).isRequired
  }

  static defaultProps = {
    width: 280
  }

  state = { value: this.props.value }

  changeCurrentDate = (fn, increment) => () =>
    this.setState(prevState => ({ value: fn(prevState.value, increment) }))

  doGoToNextMonth = this.changeCurrentDate(addMonths, 1)

  doGoToPrevMonth = this.changeCurrentDate(addMonths, -1)

  doGoToNextYear = this.changeCurrentDate(addYears, 1)

  doGoToPrevYear = this.changeCurrentDate(addYears, -1)

  render() {
    const { value, ...props } = this.props
    return (
      <Box
        display="flex"
        flexDirection="column"
        padding={majorScale(1)}
        {...props}
      >
        <Box display="flex" alignItems="center">
          <IconButton
            icon="double-chevron-left"
            appearance="minimal"
            onClick={this.doGoToPrevYear}
          />
          <IconButton
            icon="chevron-left"
            appearance="minimal"
            onClick={this.doGoToPrevMonth}
          />
          <Text marginX="auto">{format(this.state.value, 'MMMM YYYY')}</Text>
          <IconButton
            icon="chevron-right"
            appearance="minimal"
            onClick={this.doGoToNextMonth}
          />
          <IconButton
            icon="double-chevron-right"
            appearance="minimal"
            onClick={this.doGoToNextYear}
          />
        </Box>
        <Calendar now={this.state.value} />
      </Box>
    )
  }
}
export default class DatePicker extends PureComponent {
  static propTypes = {
    value: PropTypes.oneOfType([
      PropTypes.string, // A formatted string
      PropTypes.number, // A timestamp
      PropTypes.instanceOf(Date) // Or a Date object
    ]).isRequired,
    textInputProps: PropTypes.object,
    dateFormat: PropTypes.string
  }

  render() {
    const { value, textInputProps, ...rest } = this.props

    return (
      <Popover content={<DatePickerPopover value={value} />} {...rest}>
        <TextInput placeholder="Pick a date" {...textInputProps} />
      </Popover>
    )
  }
}
