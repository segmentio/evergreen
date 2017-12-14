import { storiesOf } from '@storybook/react' // eslint-disable-line import/no-extraneous-dependencies
import React from 'react'
import Box from 'ui-box'
import { Pane } from 'evergreen-layers'
import {
  TableCell,
  TextTableCell,
  TableRow,
  TableHeaderCell,
  TextTableHeaderCell,
  SearchTableHeaderCell,
  TableBody
} from '../src/'
import profiles from './profiles'

storiesOf('table', module)
  .add('Basic example', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <Pane border>
        <TableRow>
          <SearchTableHeaderCell />
          <TextTableHeaderCell isSortable sortOrder="descending">
            Last Activity
          </TextTableHeaderCell>
          <TextTableHeaderCell textAlign="right" borderRight={null}>
            ltv
          </TextTableHeaderCell>
        </TableRow>
        <TableBody height={640}>
          {profiles.map(profile => (
            <TableRow key={profile.id} isSelectable>
              <TextTableCell>{profile.name}</TextTableCell>
              <TextTableCell>{profile.lastActivity}</TextTableCell>
              <TextTableCell isNumber borderRight={null}>
                {profile.ltv}
              </TextTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Pane>
    </Box>
  ))
  .add('TableCell', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <TableCell>TableCell</TableCell>
    </Box>
  ))
  .add('TextTableCell', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <TextTableCell>TextTableCell</TextTableCell>
    </Box>
  ))
  .add('TableRow', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <TableRow>TableRow</TableRow>
    </Box>
  ))
  .add('TableHeaderCell', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <TableHeaderCell>TableHeaderCell</TableHeaderCell>
    </Box>
  ))
  .add('TextTableHeaderCell', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <TextTableHeaderCell>TextTableHeaderCell</TextTableHeaderCell>
    </Box>
  ))
  .add('SearchTableHeaderCell', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <SearchTableHeaderCell />
      <SearchTableHeaderCell autoFocus placeholder="autoFocus" />
      <SearchTableHeaderCell borderRight={null}>
        SearchTableHeaderCell
      </SearchTableHeaderCell>
    </Box>
  ))
  .add('TableBody', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <TableBody>TableBody</TableBody>
    </Box>
  ))
