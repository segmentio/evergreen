import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import addMonths from 'date-fns/add_months'
import addYears from 'date-fns/add_years'

import { Text } from '../../typography'
import { IconButton, Button } from '../../buttons'
import { majorScale } from '../../scales'

import Calendar from './Calendar'

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
     * Should if a button to quickly jump to the current date is shown
     */
    shouldShowTodayButton: PropTypes.bool,

    /**
     * Label of button to jump to the current date
     */
    todayButtonLabel: PropTypes.string,

    /**
     * The locale used to format date time in calendar
     */
    locale: PropTypes.string,

    /**
     * Options used to format date time
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
     */
    localeOptions: PropTypes.object,

    /**
     * Callback function to be invokved when users select a date
     */
    onChange: PropTypes.func
  }

  static defaultProps = {
    width: 280,
    shouldShowTodayButton: true,
    todayButtonLabel: 'Today',
    locale: 'en-US',
    localeOptions: {
      weekday: 'short',
      month: 'long',
      year: 'numeric',
      day: 'numeric'
    }
  }

  state = { value: this.props.value }

  changeDate = value =>
    this.setState(
      { value },
      () => this.props.onChange && this.props.onChange(value)
    )

  getCurrentMonthTitle = () =>
    new Intl.DateTimeFormat(this.props.locale, {
      month:
        this.props.localeOptions.month ||
        DatePicker.defaultProps.localeOptions.month,
      year:
        this.props.localeOptions.year ||
        DatePicker.defaultProps.localeOptions.year
    }).format(this.state.value)

  doGoToNextMonth = () => this.changeDate(addMonths(this.state.value, 1))

  doGoToPrevMonth = () => this.changeDate(addMonths(this.state.value, -1))

  doGoToNextYear = () => this.changeDate(addYears(this.state.value, 1))

  doGoToPrevYear = () => this.changeDate(addYears(this.state.value, -1))

  doJumpToToday = () => this.changeDate(new Date())

  render() {
    const {
      value,
      shouldShowTodayButton,
      todayButtonLabel,
      locale,
      localeOptions,
      ...props
    } = this.props

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
          <Text marginX="auto" userSelect="none">
            {this.getCurrentMonthTitle()}
          </Text>
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
        <Calendar
          pivotDate={this.state.value}
          onClick={this.changeDate}
          locale={locale}
          localeOptions={localeOptions}
        />
        {shouldShowTodayButton ? (
          <Button
            appearance="minimal"
            justifyContent="center"
            onClick={this.doJumpToToday}
          >
            {todayButtonLabel}
          </Button>
        ) : null}
      </Box>
    )
  }
}
