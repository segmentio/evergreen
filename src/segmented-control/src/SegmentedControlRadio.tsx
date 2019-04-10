import * as PropTypes from 'prop-types'
import * as React from 'react'
import Box from 'ui-box'
import { css } from 'glamor'
import cx from 'classnames'
import { Text } from '../../typography'
import { withTheme, PropsWithTheme } from '../../theme'

interface IProps {
  // The name attribute of the radio input.
  name: string

  // The label used for the radio.
  label: any

  // The value attribute of the radio input.
  value: string

  // The height of the control.
  height: number

  // When true, the radio input is checked.
  checked: boolean

  // Function called when the state changes.
  onChange: (...args: any[]) => any

  // The appearance of the control. Currently only `default` is possible.
  appearance: string

  // When true, this item is the first item.
  isFirstItem?: boolean

  // When true, this item is the last item.
  isLastItem?: boolean

  // The unique id of the radio option.
  id?: string
}

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

class SegmentedControlRadio extends React.PureComponent<
  PropsWithTheme<IProps>
> {
  static propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.node.isRequired,
    value: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    appearance: PropTypes.string.isRequired,
    isFirstItem: PropTypes.bool,
    isLastItem: PropTypes.bool,
    id: PropTypes.string,
    theme: PropTypes.object.isRequired
  }

  render() {
    const {
      theme,

      id,
      name,
      label,
      value,
      height,
      checked,
      onChange,
      appearance,
      isFirstItem,
      isLastItem
    } = this.props

    const themedClassName = theme.getSegmentedControlRadioClassName(appearance)
    const textSize = theme.getTextSizeForControlHeight(height)
    const borderRadius = theme.getBorderRadiusForControlHeight(height)

    return (
      <Box
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
        />
        <Text
          is="label"
          cursor="pointer"
          htmlFor={id}
          fontWeight={500}
          size={textSize}
          className={`${labelClass}`}
        >
          {label}
        </Text>
      </Box>
    )
  }
}

export default withTheme(SegmentedControlRadio)
