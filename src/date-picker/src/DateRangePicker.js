import React from 'react'
import Box from 'ui-box'

import isBefore from 'date-fns/is_before'
import DatePicker from './DatePicker'
import defaultPropTypes from './propTypes'

// As DateRangePicker uses `startDate` and `endDate` as its values, let's remove
// `value` prop types check
const defaultPropTypesWithoutValue = Object.entries(defaultPropTypes).reduce(
  (acc, [key, value]) => {
    return key === 'value' ? acc : { ...acc, [key]: value }
  },
  {}
)

export default class DateRangePicker extends React.Component {
  static propTypes = {
    ...defaultPropTypesWithoutValue,

    /**
     * The starting date
     */
    startDate: defaultPropTypes.value,

    /**
     * The ending date
     */
    endDate: defaultPropTypes.value
  }

  render() {
    const {
      startDate,
      endDate,
      shouldShowTodayButton,
      todayButtonLabel,
      locale,
      localeOptions,
      disableDates,
      onChange
    } = this.props
    return (
      <Box display="flex">
        <Box paddingRight={4}>
          <DatePicker
            width="100%"
            value={startDate}
            shouldShowTodayButton={shouldShowTodayButton}
            todayButtonLabel={todayButtonLabel}
            locale={locale}
            localeOptions={localeOptions}
            disableDates={disableDates}
            onChange={startDate =>
              onChange &&
              onChange(
                startDate,
                isBefore(this.props.endDate, startDate)
                  ? startDate
                  : this.props.endDate
              )
            }
          />
        </Box>
        <Box paddingLeft={4}>
          <DatePicker
            width="100%"
            value={endDate}
            shouldShowTodayButton={shouldShowTodayButton}
            todayButtonLabel={todayButtonLabel}
            locale={locale}
            localeOptions={localeOptions}
            disableDates={date =>
              isBefore(date, startDate) || (disableDates && disableDates(date))
            }
            onChange={endDate => onChange && onChange(startDate, endDate)}
          />
        </Box>
      </Box>
    )
  }
}
