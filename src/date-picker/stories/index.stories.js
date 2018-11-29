import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import Component from '@reactions/component'
import { DatePicker, InlineDatePicker, DateRangePicker } from '..'
import format from 'date-fns/format'
import isWeekend from 'date-fns/is_weekend'
import { Paragraph } from '../../typography'
import { Combobox } from '../../combobox'

storiesOf('date-picker', module)
  .add('InlineDatePicker', () => (
    <Box padding={40} display="flex" flexWrap="wrap">
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}

      <Box width="33.33%">
        <Paragraph marginY={16}>Default date picker</Paragraph>
        <InlineDatePicker value={new Date(2018, 7, 1)} onChange={console.log} />
      </Box>

      <Box width="33.33%">
        <Paragraph marginY={16}>Without Today button</Paragraph>
        <InlineDatePicker
          value={new Date(2019, 6, 1)}
          shouldShowTodayButton={false}
        />
      </Box>

      <Box width="33.33%">
        <Paragraph marginY={16}>Disable all weekends</Paragraph>
        <InlineDatePicker
          value={new Date(1989, 7, 1)}
          disableDates={isWeekend}
        />
      </Box>
    </Box>
  ))
  .add('DatePicker', () => (
    <Box padding={40} display="flex" flexWrap="wrap">
      <Box width="33.33%">
        <Paragraph marginY={16}>Default date picker (uncontrolled)</Paragraph>
        <DatePicker value={new Date()} />
      </Box>

      <Box width="33.33%">
        <Paragraph marginY={16}>Default date picker (controlled)</Paragraph>
        <Component initialState={{ date: new Date() }}>
          {({ state, setState }) => (
            <DatePicker
              value={state.date}
              onChange={date => setState({ date })}
            />
          )}
        </Component>
      </Box>

      <Box width="33.33%">
        <Paragraph marginY={16}>With different format</Paragraph>
        <Component initialState={{ date: new Date() }}>
          {({ state, setState }) => (
            <DatePicker
              value={state.date}
              dateFormatter={d => format(d, 'YYYY-MM-DD')}
              onChange={date => setState({ date })}
            />
          )}
        </Component>
      </Box>
    </Box>
  ))
  .add('DateRangePicker', () => (
    <Box padding={16} display="flex">
      <Box width="50%">
        <Paragraph marginY={16}>Default date range picker</Paragraph>
        <Component
          initialState={{ startDate: new Date(), endDate: new Date() }}
        >
          {({ state, setState }) => (
            <DateRangePicker
              startDate={state.startDate}
              endDate={state.endDate}
              onChange={(startDate, endDate) => {
                console.log(startDate, endDate)
                setState({ startDate, endDate })
              }}
            />
          )}
        </Component>
      </Box>
      <Box width="50%">
        <Paragraph marginY={16}>
          Both inputs share common datepicker props
        </Paragraph>
        <Component
          initialState={{ startDate: new Date(), endDate: new Date() }}
        >
          {({ state, setState }) => (
            <DateRangePicker
              startDate={state.startDate}
              endDate={state.endDate}
              onChange={(startDate, endDate) =>
                setState({ startDate, endDate })
              }
              locale="fi-FI"
              disableDates={isWeekend}
            />
          )}
        </Component>
      </Box>
    </Box>
  ))
  .add('With different locales ', () => (
    <Box padding={16}>
      <Component
        initialState={{
          date: new Date(),
          locale: 'fi-FI',
          locales: ['fi-FI', 'vi-VN', 'es-ES', 'ar-AE', 'ru-RU', 'zh-CN'],
          localeOptions: {
            weekday: 'narrow',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          },
          weekdayFormats: ['narrow', 'short', 'long'],
          dayFormats: ['numeric', '2-digit'],
          monthFormats: ['numeric', '2-digit', 'narrow', 'short', 'long'],
          yearFormats: ['numeric', '2-digit'],
          todayButtonLabels: new Map([
            ['fi-FI', 'Tänään'],
            ['vi-VN', 'Hôm nay'],
            ['es-ES', 'Hoy'],
            ['ar-AE', 'اليَوْم'],
            ['zh-CN', '今天'],
            ['ru-RU', 'сегодня']
          ])
        }}
      >
        {({ state, setState }) => (
          <Box display="flex">
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
            >
              <Combobox
                marginBottom={16}
                selectedItem={state.locale}
                items={state.locales}
                onChange={locale => setState({ locale })}
                autocompleteProps={{ title: 'Locale' }}
              />
              <Combobox
                marginBottom={16}
                selectedItem={state.localeOptions.weekday}
                items={state.weekdayFormats}
                onChange={weekday =>
                  setState({
                    localeOptions: { ...state.localeOptions, weekday }
                  })
                }
                autocompleteProps={{ title: 'Weekday' }}
              />
              <Combobox
                marginBottom={16}
                selectedItem={state.localeOptions.day}
                items={state.dayFormats}
                onChange={day =>
                  setState({
                    localeOptions: { ...state.localeOptions, day }
                  })
                }
                autocompleteProps={{ title: 'Day' }}
              />
              <Combobox
                marginBottom={16}
                selectedItem={state.localeOptions.month}
                items={state.monthFormats}
                onChange={month =>
                  setState({
                    localeOptions: { ...state.localeOptions, month }
                  })
                }
                autocompleteProps={{ title: 'Month' }}
              />
              <Combobox
                marginBottom={16}
                selectedItem={state.localeOptions.year}
                items={state.yearFormats}
                onChange={year =>
                  setState({
                    localeOptions: { ...state.localeOptions, year }
                  })
                }
                autocompleteProps={{ title: 'Year' }}
              />
            </Box>
            <Box marginLeft={32}>
              <InlineDatePicker
                width={320}
                value={state.date}
                locale={state.locale}
                localeOptions={state.localeOptions}
                todayButtonLabel={state.todayButtonLabels.get(state.locale)}
                onChange={date => setState({ date })}
              />
              <Paragraph textAlign="center">
                Selected date:{' '}
                {new Intl.DateTimeFormat(state.locale).format(state.date)}
              </Paragraph>
            </Box>
          </Box>
        )}
      </Component>
    </Box>
  ))
