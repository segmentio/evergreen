import React, { memo, forwardRef } from 'react'
import { css } from 'glamor'
import Box, { PolymorphicBoxProps } from 'ui-box'
import { DefaultAppearance } from '../../types'
import { useStyleConfig } from '../../hooks'

export interface SwitchOwnProps {
  /**
   * The id attribute of the radio.
   */
  id?: string
  /**
   * The name attribute of the radio.
   */
  name?: string
  /**
   * The value attribute of the radio.
   */
  value?: string
  /**
   * The height of the switch.
   */
  height?: number
  /**
   * When true, the switch is checked (on).
   */
  checked?: boolean
  /**
   * When true, the switch is disabled.
   */
  disabled?: boolean
  /**
   * When true, the switch is invalid.
   */
  isInvalid?: boolean
  /**
   * The appearance of the checkbox.
   * The default theme only comes with a default style.
   */
  appearance?: DefaultAppearance
  /**
   * When true, the switch has a check icon.
   */
  hasCheckIcon?: boolean
  /**
   * When true, the switch is true by default.
   * This is for uncontrolled usage.
   */
  defaultChecked?: boolean
  /**
   * Function called when state changes.
   */
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void
}

export type SwitchProps = PolymorphicBoxProps<'label', SwitchOwnProps>

const animationEasing = {
  spring: 'cubic-bezier(0.175, 0.885, 0.320, 1.175)'
}

const handleStyleClass = css({
  backgroundColor: '#fff',
  borderRadius: 9999
}).toString()

const iconContainerStyleClass = css({
  transition: `all 500ms ${animationEasing.spring}`,
  opacity: 0,
  display: 'flex',
  position: 'absolute',
  alignItems: 'center',
  justifyContent: 'center',
  paddingLeft: 4,
  '&[data-checked="true"]': {
    opacity: 1,
    transform: 'scale(1)'
  },
  '> svg': {
    transition: `all 500ms ${animationEasing.spring}`,
    transform: 'scale(0)'
  },
  '&[data-checked="true"] > svg': {
    transform: 'scale(1)'
  }
}).toString()

const handleContainerStyleClass = css({
  transition: 'transform 200ms ease-in-out',
  transform: 'translateX(0%)',
  '&[data-checked="true"]': {
    transform: 'translateX(50%)'
  }
}).toString()

// @ts-expect-error ts-migrate(2339) FIXME: Property 'fill' does not exist on type '{ children... Remove this comment to see the full error message
const CheckIcon = memo(function CheckIcon({ fill = 'currentColor', size, ...props }) {
  return (
    <svg width={10} height={size} viewBox="0 0 10 7" {...props}>
      <path
        fill={fill}
        fillRule="evenodd"
        d="M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z"
      />
    </svg>
  )
})

const noop = () => {}

const pseudoSelectors = {
  _base: '& + div',
  _disabled: '&[disabled] + div',
  _hover: '&:not([disabled]):hover + div',
  _focus: '&:not([disabled]):focus + div',
  _active: '&:not([disabled]):active + div',
  _checked: '&:checked + div',
  _checkedHover: '&:checked:hover + div',
  _checkedActive: '&:not([disabled]):checked:active + div',
  _checkedDisabled: '&[disabled]:checked + div'
}

const internalStyles = {
  border: '0',
  clip: 'rect(1px, 1px, 1px, 1px)',
  height: '1px',
  overflow: 'hidden',
  padding: '0',
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: '1px',
  opacity: '0',
  '& + div > svg': { display: 'none' },

  [pseudoSelectors._base]: {
    transition: 'all 120ms ease-in-out'
  }
}

const Switch: React.FC<SwitchProps> = memo(
  forwardRef(function Switch(props, ref) {
    const {
      id,
      name,
      height = 16,
      checked = false,
      onChange = noop,
      disabled = false,
      appearance = 'default',
      hasCheckIcon = false,
      defaultChecked,
      ...rest
    } = props

    const { className: themedClassName, ...boxProps } = useStyleConfig(
      'Switch',
      { appearance },
      pseudoSelectors,
      // @ts-expect-error ts-migrate(2345) FIXME: Argument of type '{ [x: string]: string | { displa... Remove this comment to see the full error message
      internalStyles
    )

    return (
      <Box is="label" display="block" width={height * 2} position="relative" ref={ref} {...rest}>
        <Box
          is="input"
          id={id}
          name={name}
          {...boxProps}
          className={themedClassName}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          defaultChecked={defaultChecked}
          onChange={onChange}
        />
        <Box height={height} width={height * 2} borderRadius={9999} cursor="pointer">
          <Box height={height} width={height} data-checked={checked} className={iconContainerStyleClass}>
            {/* @ts-expect-error ts-migrate(2322) FIXME: Type '{ display: string | undefined; size: number;... Remove this comment to see the full error message */}
            {hasCheckIcon && <CheckIcon display={checked ? 'block' : undefined} size={height / 2 - 3} />}
          </Box>
          <Box width={height * 2} display="flex" data-checked={checked} className={handleContainerStyleClass}>
            <Box flex={1} padding={2}>
              <Box width={height - 4} height={height - 4} className={handleStyleClass} />
            </Box>
          </Box>
        </Box>
      </Box>
    )
  })
)

export default Switch
