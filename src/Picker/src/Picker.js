import React, { memo, forwardRef } from 'react'
import '../style/Picker.css'

const Picker = memo(
  forwardRef(function Picker() {


    function HourIncrease() {
      if (document.getElementById("in1").value != 24) {
        document.getElementById("in1").value++;
      }
    }

    function HourDecrease() {
      if (document.getElementById("in1").value != 0) {
        document.getElementById("in1").value--;
      }
    }

    function MinuteIncrease() {
      if (document.getElementById("in2").value != 24) {
        document.getElementById("in2").value++;
      }
    }

    function MinuteDecrease() {
      if (document.getElementById("in2").value != 0) {
        document.getElementById("in2").value--;
      }
    }

    return (
      <div>
        <div class="time-picker" data-time="00:00">
          <div class="hour">
            <div onClick={HourIncrease} class="hr-up"></div>
            <input type="number" id="in1" class="hr" value="00" />
            <div onClick={HourDecrease} class="hr-down"></div>
          </div>

          <div class="separator">:</div>

          <div class="minute">
            <div onClick={MinuteIncrease} class="min-up"></div>
            <input type="number" id="in2" class="min" value="00" />
            <div onClick={MinuteDecrease} class="min-down"></div>
          </div>
        </div>
      </div>
    )
  })
)

export default Picker
