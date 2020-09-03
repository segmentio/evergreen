import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { css } from 'glamor'
import { Text } from '../../typography'
import useSegmentControlAppearance from '../../theme/src/hooks/useSegmentedControlAppearance'

const offscreenCss = css({
  overflow: 'hidden',
  position: 'absolute',
  height: '1px',
  width: '1px',
  padding: 0,
  margin: '-1px',
  border: 0,
  clip: 'rect(0 0 0 0)'
})

const SegmentedControlRadio = memo(
  forwardRef(function SegmentedControlRadio(props, ref) {
    const {
      id,
      name,
      label,
      value,
      height,
      checked,
      onChange,
      appearance,
      disabled
    } = props

    const themedClassName = useSegmentControlAppearance(appearance)

    return (
      <Box
        ref={ref}
        className={themedClassName}
        data-active={checked || undefined}
      >
        <input
          type="radio"
          id={id}
          className={`${offscreenCss}`}
          name={name}
          value={value}
          checked={checked}
          onChange={e => onChange(e.target.value)}
          disabled={disabled}
        />
        <Text
          is="label"
          cursor="pointer"
          htmlFor={id}
          fontWeight={500}
          size={300}
          disabled={disabled}
          height={height}
        >
          {label}
        </Text>
      </Box>
    )
  })
)

SegmentedControlRadio.propTypes = {
  /**
   * The name attribute of the radio input.
   */
  name: PropTypes.string.isRequired,

  /**
   * The label used for the radio.
   */
  label: PropTypes.node.isRequired,

  /**
   * The value attribute of the radio input.
   */
  value: PropTypes.string.isRequired,

  /**
   * The height of the control.
   */
  height: PropTypes.number.isRequired,

  /**
   * When true, the radio input is checked.
   */
  checked: PropTypes.bool.isRequired,

  /**
   * Function called when the state changes.
   */
  onChange: PropTypes.func.isRequired,

  /**
   * The appearance of the control. Currently only `default` is possible.
   */
  appearance: PropTypes.string.isRequired,

  /**
   * The unique id of the radio option.
   */
  id: PropTypes.string,

  /**
   * When true, the input is disabled.
   */
  disabled: PropTypes.bool
}

export default SegmentedControlRadio
