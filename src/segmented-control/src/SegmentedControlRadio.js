import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { css } from 'glamor'
import cx from 'classnames'
import { Text } from '../../typography'
import { useTheme } from '../../theme'

const labelClass = css({
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative'
})

const wrapperClass = css({
  position: 'relative',
  display: 'flex',
  flex: 1,
  cursor: 'pointer',
  marginLeft: '-1px',
  [`:first-child .${labelClass}`]: {
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3
  },
  [`:last-child .${labelClass}`]: {
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3
  }
})

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
    const theme = useTheme()

    const {
      id,
      name,
      label,
      value,
      height,
      checked,
      onChange,
      appearance,
      isFirstItem,
      isLastItem,
      disabled
    } = props

    const themedClassName = theme.getSegmentedControlRadioClassName(appearance)
    const textSize = theme.getTextSizeForControlHeight(height)
    const borderRadius = theme.getBorderRadiusForControlHeight(height)

    return (
      <Box
        ref={ref}
        className={cx(wrapperClass.toString(), themedClassName)}
        data-active={checked}
        {...(isFirstItem
          ? {
              borderTopLeftRadius: borderRadius,
              borderBottomLeftRadius: borderRadius
            }
          : {})}
        {...(isLastItem
          ? {
              borderTopRightRadius: borderRadius,
              borderBottomRightRadius: borderRadius
            }
          : {})}
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
          size={textSize}
          className={`${labelClass}`}
          disabled={disabled}
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
   * When true, this item is the first item.
   */
  isFirstItem: PropTypes.bool,

  /**
   * When true, this item is the last item.
   */
  isLastItem: PropTypes.bool,

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
