import React from 'react'
import { storiesOf } from '@storybook/react'
import { DatePicker } from '..'

storiesOf('datepicker', module).add('DatePicker', () => (
  <div>
      <p style={{'margin':0, 'fontSize':'20px'}}>Small</p>
      <DatePicker size={'small'}/><br/>
      <p style={{'margin':'5px 0 5px 0', 'fontSize':'20px'}}>Large</p>
      <DatePicker  size={'large'}/>
      <hr/>
      <p style={{'margin':0, 'fontSize':'20px'}}>Disabled</p>
    <DatePicker size={'small'} disabled={'disabled'}/><hr/>
    <p style={{'margin':'0', 'fontSize':'20px'}}>Custom placeholder</p>
    <DatePicker size={'small'} placeholder={'date'}/>
    <hr/>
    <p style={{'margin':'0', 'fontSize':'20px'}}>Icon</p>
    <DatePicker size={'small'} icon={true}/>
  </div>
))