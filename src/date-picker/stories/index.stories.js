import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import Component from '@reactions/component'
import { DatePicker } from '..'
import format from 'date-fns/format'
import { Paragraph } from '../../typography'
import { Popover } from '../../popover'
import { TextInput } from '../../text-input'
import { SegmentedControl } from '../../segmented-control'

storiesOf('date-picker', module)
  .add('DatePicker', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}

      <Box display="flex">
        <Box width="50%">
          <Paragraph marginY={16}>Default date picker</Paragraph>
          <DatePicker value={new Date(2018, 7, 1)} onChange={console.log} />
        </Box>
        <Box width="50%">
          <Paragraph marginY={16}>Without Today button</Paragraph>
          <DatePicker
            value={new Date(2019, 6, 1)}
            shouldShowTodayButton={false}
          />
        </Box>
      </Box>

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
  ))
  .add('With different locales ', () => (
    <Box padding={16}>
      <Component
        initialState={{
          date: new Date(),
          locale: 'fi-FI',
          locales: [
            { label: 'fi-FI', value: 'fi-FI' },
            { label: 'vi-VN', value: 'vi-VN' },
            { label: 'es-ES', value: 'es-ES' },
            { label: 'en-GB', value: 'en-GB' },
            { label: 'zh-CN', value: 'zh-CN' },
            { label: 'ru-RU', value: 'ru-RU' }
          ],
          localeOptions: {
            weekday: 'narrow'
          },
          weekdayFormats: [
            { label: 'narrow', value: 'narrow' },
            { label: 'short', value: 'short' },
            { label: 'long', value: 'long' }
          ],
          todayButtonLabels: new Map([
            ['fi-FI', 'Tänään'],
            ['vi-VN', 'Hôm nay'],
            ['es-ES', 'Hoy'],
            ['en-GB', 'Today'],
            ['zh-CN', '今天'],
            ['ru-RU', 'сегодня']
          ])
        }}
      >
        {({ state, setState }) => (
          <Box>
            <Box display="flex" marginBottom={16} width="100%">
              <Box width="50%" paddingX={16}>
                <SegmentedControl
                  options={state.locales}
                  value={state.locale}
                  onChange={locale => setState({ locale })}
                />
              </Box>
              <Box width="50%" paddingX={16}>
                <SegmentedControl
                  options={state.weekdayFormats}
                  value={state.localeOptions.weekday}
                  onChange={weekday => setState({ localeOptions: { weekday } })}
                />
              </Box>
            </Box>
            <DatePicker
              width={320}
              value={state.date}
              locale={state.locale}
              localeOptions={state.localeOptions}
              todayButtonLabel={state.todayButtonLabels.get(state.locale)}
            />
          </Box>
        )}
      </Component>
    </Box>
  ))
