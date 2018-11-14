import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import addMonths from 'date-fns/add_months'
import addYears from 'date-fns/add_years'
import format from 'date-fns/format'

import { Popover } from '../../popover'
import { TextInput } from '../../text-input'
import { Text } from '../../typography'
import { IconButton, Button } from '../../buttons'
import { majorScale } from '../../scales'

import Calendar from './Calendar'

class DatePickerPopover extends PureComponent {
  state = { value: this.props.value }

  changeCurrentDate = (fn, increment) => () =>
    this.setState(prevState => ({ value: fn(prevState.value, increment) }))

  doGoToNextMonth = this.changeCurrentDate(addMonths, 1)

  doGoToPrevMonth = this.changeCurrentDate(addMonths, -1)

  doGoToNextYear = this.changeCurrentDate(addYears, 1)

  doGoToPrevYear = this.changeCurrentDate(addYears, -1)

  doJumpToToday = () => this.setState({ value: new Date() })

  render() {
    const { value, shouldShowTodayButton, ...props } = this.props
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
        {shouldShowTodayButton ? (
          <Button
            appearance="minimal"
            justifyContent="center"
            onClick={this.doJumpToToday}
          >
            Today
          </Button>
        ) : null}
      </Box>
    )
  }
}
export default class DatePicker extends PureComponent {
  static propTypes = {
    /**
     * The date presentation of calendar
     */
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.instanceOf(Date)
    ]).isRequired,

    /**
     * Should if a button to quickly jump to today is shown
     */
    shouldShowTodayButton: PropTypes.bool,

    /**
     * Props that are passed to text input field
     */
    textInputProps: PropTypes.object
  }

  static defaultProps = {
    width: 280,
    shouldShowTodayButton: true
  }

  render() {
    const { textInputProps, ...rest } = this.props

    return (
      <Popover content={<DatePickerPopover {...rest} />}>
        <TextInput placeholder="Pick a date" {...textInputProps} />
      </Popover>
    )
  }
}
