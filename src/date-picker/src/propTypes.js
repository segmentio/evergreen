import PropTypes from 'prop-types'

export default {
  /**
   * The current selected date on calendar
   */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Date)
  ]).isRequired,

  /**
   * Should a button to quickly jump to the current date is shown
   */
  shouldShowTodayButton: PropTypes.bool,

  /**
   * Label of ShowToday button
   */
  todayButtonLabel: PropTypes.string,

  /**
   * The locale used to format date in calendar
   */
  locale: PropTypes.string,

  /**
   * Options used to format
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   */
  localeOptions: PropTypes.object,

  /**
   * Validation function to determine if a date is disabled
   */
  disableDates: PropTypes.func,

  /**
   * Callback function to be invokved when users select a date
   */
  onChange: PropTypes.func
}
