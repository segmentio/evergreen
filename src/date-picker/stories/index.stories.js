import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import Component from '@reactions/component'
import { DatePicker } from '..'
import format from 'date-fns/format'
import isWeekend from 'date-fns/is_weekend'
import isBefore from 'date-fns/is_before'
import { Paragraph } from '../../typography'
import { Popover } from '../../popover'
import { TextInput } from '../../text-input'
import { Combobox } from '../../combobox'

storiesOf('date-picker', module)
  .add('Inline DatePicker', () => (
    <Box padding={40} display="flex" flexWrap="wrap">
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}

      <Box width="33.33%">
        <Paragraph marginY={16}>Default date picker</Paragraph>
        <DatePicker value={new Date(2018, 7, 1)} onChange={console.log} />
      </Box>

      <Box width="33.33%">
        <Paragraph marginY={16}>Without Today button</Paragraph>
        <DatePicker
          value={new Date(2019, 6, 1)}
          shouldShowTodayButton={false}
        />
      </Box>

      <Box width="33.33%">
        <Paragraph marginY={16}>Disable all weekends</Paragraph>
        <DatePicker value={new Date(1989, 7, 1)} disableDates={isWeekend} />
      </Box>
    </Box>
  ))
  .add('DatePicker inputs', () => (
    <Box padding={40} display="flex" flexWrap="wrap">
      <Box width="33.33%">
        <Paragraph marginY={16}>Use with a popover</Paragraph>
        <Component initialState={{ date: new Date() }}>
          {({ state, setState }) => (
            <Popover
              content={
                <DatePicker
                  value={state.date}
                  onChange={date => setState({ date })}
                />
              }
            >
              <TextInput
                value={format(state.date, 'DD/MM/YYYY')}
                placeholder="Pick a date"
                readOnly
              />
            </Popover>
          )}
        </Component>
      </Box>

      <Box width="33.33%">
        <Paragraph marginY={16}>As a date range picker</Paragraph>
        <Component
          initialState={{ startDate: new Date(), endDate: new Date() }}
        >
          {({ state, setState }) => (
            <Box display="flex">
              <Box width="50%">
                <Popover
                  content={
                    <DatePicker
                      value={state.startDate}
                      onChange={startDate => {
                        const endDate = isBefore(state.endDate, startDate)
                          ? startDate
                          : state.endDate
                        setState({ startDate, endDate })
                      }}
                    />
                  }
                >
                  <TextInput
                    width="95%"
                    value={format(state.startDate, 'DD/MM/YYYY')}
                    placeholder="Pick the start date"
                    readOnly
                  />
                </Popover>
              </Box>
              <Box width="50%">
                <Popover
                  content={
                    <DatePicker
                      value={state.endDate}
                      disableDates={d => isBefore(d, state.startDate)}
                      onChange={endDate => setState({ endDate })}
                    />
                  }
                >
                  <TextInput
                    width="95%"
                    value={format(state.endDate, 'DD/MM/YYYY')}
                    placeholder="Pick the end date"
                    readOnly
                  />
                </Popover>
              </Box>
            </Box>
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
                selectedItem={state.locale}
                items={state.locales}
                onChange={locale => setState({ locale })}
                autocompleteProps={{ title: 'Locale' }}
              />
              <Combobox
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
              <DatePicker
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
