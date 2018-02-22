import { storiesOf } from '@storybook/react'
import React from 'react'
import {
  TriangleIcon,
  CloseIcon,
  CogIcon,
  ArrowIcon,
  SearchIcon,
  CheckCircleIcon,
  ClipboardIcon,
  Icon
} from '../../icons'

const directionalShowcase = Comp => (
  <div>
    <Comp aim="up" />
    <Comp aim="right" />
    <Comp aim="down" />
    <Comp aim="left" />
  </div>
)

storiesOf('icons', module)
  .add('TriangleIcon', () => <div>{directionalShowcase(TriangleIcon)}</div>)
  .add('CloseIcon', () => (
    <div>
      <CloseIcon />
    </div>
  ))
  .add('CogIcon', () => (
    <div>
      <CogIcon />
    </div>
  ))
  .add('ArrowIcon', () => <div>{directionalShowcase(ArrowIcon)}</div>)
  .add('SearchIcon', () => (
    <div>
      <SearchIcon />
    </div>
  ))
  .add('CheckCircleIcon', () => (
    <div>
      <CheckCircleIcon />
    </div>
  ))
  .add('ClipboardIcon', () => (
    <div>
      <ClipboardIcon />
    </div>
  ))
  .add('Icon', () => (
    <div>
      <Icon />
    </div>
  ))
