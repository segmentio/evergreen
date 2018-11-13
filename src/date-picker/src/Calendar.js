import React from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import getDaysInMonth from 'date-fns/get_days_in_month'
import startOfMonth from 'date-fns/start_of_month'
import addDays from 'date-fns/add_days'
import getDay from 'date-fns/get_day'
import { majorScale } from '../../scales'
import { Text } from '../../typography'
import { ThemeConsumer } from '../../theme'

export const SUN = 0
export const MON = 1
export const TUE = 2
export const WED = 3
export const THU = 4
export const FRI = 5
export const SAT = 6

function makeDaysArray(pivot, length, { increment = 1, ...props } = {}) {
  return Array.from({ length }).reduce(
    ({ acc, pivot }) => {
      const date = addDays(pivot, increment)
      return {
        acc:
          increment > 0
            ? [...acc, { date, ...props }]
            : [{ date, ...props }, ...acc],
        pivot: date
      }
    },
    { acc: [], pivot }
  ).acc
}

function makeCalendarData(pivotDate) {
  const totalDays = getDaysInMonth(pivotDate)
  const firstDay = startOfMonth(pivotDate)
  const lastDay = addDays(firstDay, totalDays)
  const dayOfFirstDay = getDay(firstDay)
  const dayOfLastDay = getDay(lastDay)

  const data = makeDaysArray(addDays(firstDay, -1), totalDays, {
    currentMonth: true
  })

  // Complement days from previous month
  const first = makeDaysArray(
    firstDay,
    dayOfFirstDay === SUN ? 0 : dayOfFirstDay,
    {
      increment: -1,
      currentMonth: false
    }
  )
  const last = makeDaysArray(
    addDays(lastDay, -1),
    dayOfLastDay === SUN ? 0 : SAT - dayOfLastDay + 1,
    {
      increment: 1,
      currentMonth: false
    }
  )

  return [...first, ...data, ...last]
}

function DateBox(props) {
  return (
    <Box
      width={`${100 / 7}%`}
      height={majorScale(4)}
      textAlign="center"
      cursor={props.onClick ? 'pointer' : 'default'}
      {...props}
    >
      {props.children}
    </Box>
  )
}

function DateCell({ date, currentMonth }) {
  return (
    <ThemeConsumer>
      {theme => (
        <DateBox onClick={() => console.log(date)}>
          <Text
            userSelect="none"
            color={
              currentMonth ? theme.colors.text.dark : theme.scales.neutral.N5
            }
          >
            {date.getDate()}
          </Text>
        </DateBox>
      )}
    </ThemeConsumer>
  )
}

DateCell.propTypes = {
  currentMonth: PropTypes.bool,
  date: PropTypes.instanceOf(Date).isRequired
}

export default function Month({ now, ...rest }) {
  const dates = makeCalendarData(now)
  return (
    <Box
      display="flex"
      alignItems="center"
      flexWrap="wrap"
      paddingTop={majorScale(2)}
      {...rest}
    >
      <DateBox>
        <Text fontWeight={600}>Sun</Text>
      </DateBox>
      <DateBox>
        <Text fontWeight={600}>Mon</Text>
      </DateBox>
      <DateBox>
        <Text fontWeight={600}>Tue</Text>
      </DateBox>
      <DateBox>
        <Text fontWeight={600}>Wed</Text>
      </DateBox>
      <DateBox>
        <Text fontWeight={600}>Thu</Text>
      </DateBox>
      <DateBox>
        <Text fontWeight={600}>Fri</Text>
      </DateBox>
      <DateBox>
        <Text fontWeight={600}>Sat</Text>
      </DateBox>
      {dates.map(date => (
        <DateCell key={date.date.toString()} {...date} />
      ))}
    </Box>
  )
}
