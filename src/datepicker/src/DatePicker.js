import { useState } from 'react'
import React, { memo, forwardRef } from 'react'
import './datepicker.css'

const DatePicker = memo(
    
  forwardRef(function DatePicker(props, ref) {
    
    const {
        size='small',
        placeholder,
        disabled,
      } = props;

    const [typp, settypp] = useState('text');
    function typehandler(){
        typp==='text'? settypp('date') : settypp('text') 
    }
    return <React.Fragment>
        {props.icon? <a style={{'font-size':'28px'}}>🗒</a> : null}
                < input
                    type={typp} 
                    className='datepi'
                    style={{'height': props.size==='large'? '40px' : '20px',
                        'font-size': props.size==='small'? '16px' : '25px'
                 }}
                    placeholder={props.placeholder || 'dd/mm/yyyy'}
                    disabled={disabled}
                    onFocus={typehandler}
                    onBlur={typehandler}
                />
        </React.Fragment>
  })
)


export default DatePicker