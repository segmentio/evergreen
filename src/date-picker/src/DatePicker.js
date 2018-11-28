import React from 'react'

import { Popover } from '../../popover'
import { TextInput } from '../../text-input'
import InlineDatePicker from './InlineDatePicker'
import defaultPropTypes from './propTypes'

function defaultDateFormatter(date) {
  return date instanceof Date ? date.toLocaleDateString() : date
}

export default class DatePicker extends React.Component {
  static propTypes = {
    ...defaultPropTypes
  }

  render() {
    const {
      value,
      shouldShowTodayButton,
      todayButtonLabel,
      locale,
      localeOptions,
      disableDates,
      onChange,
      dateFormatter = defaultDateFormatter,
      ...props
    } = this.props

    return (
      <Popover
        content={
          <InlineDatePicker
            value={value}
            shouldShowTodayButton={shouldShowTodayButton}
            todayButtonLabel={todayButtonLabel}
            locale={locale}
            localeOptions={localeOptions}
            disableDates={disableDates}
            onChange={onChange}
          />
        }
      >
        <TextInput value={dateFormatter(value)} {...props} />
      </Popover>
    )
  }
}
