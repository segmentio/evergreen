import React, { PureComponent } from 'react'
import Box from 'ui-box'

import addMonths from 'date-fns/add_months'
import addYears from 'date-fns/add_years'

import { Text } from '../../typography'
import { Button, IconButton } from '../../buttons'
import { majorScale } from '../../scales'

import Calendar from './Calendar'
import defaultPropTypes from './propTypes'

export default class InlineDatePicker extends PureComponent {
  static propTypes = {
    ...defaultPropTypes
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

  state = { pivotDate: this.props.value }

  changePivotDate = pivotDate => this.setState({ pivotDate })

  getCurrentMonthTitle = () =>
    new Intl.DateTimeFormat(this.props.locale, {
      month:
        this.props.localeOptions.month ||
        InlineDatePicker.defaultProps.localeOptions.month,
      year:
        this.props.localeOptions.year ||
        InlineDatePicker.defaultProps.localeOptions.year
    }).format(this.state.pivotDate)

  doGoToNextMonth = () =>
    this.changePivotDate(addMonths(this.state.pivotDate, 1))

  doGoToPrevMonth = () =>
    this.changePivotDate(addMonths(this.state.pivotDate, -1))

  doGoToNextYear = () => this.changePivotDate(addYears(this.state.pivotDate, 1))

  doGoToPrevYear = () =>
    this.changePivotDate(addYears(this.state.pivotDate, -1))

  doJumpToToday = () => this.changePivotDate(new Date())

  doCalendarClick = date => this.props.onChange && this.props.onChange(date)

  render() {
    const {
      value,
      shouldShowTodayButton,
      todayButtonLabel,
      locale,
      localeOptions,
      disableDates,
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
          pivotDate={this.state.pivotDate}
          selectedDate={this.props.value}
          onClick={this.doCalendarClick}
          locale={locale}
          localeOptions={localeOptions}
          disableDates={disableDates}
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
