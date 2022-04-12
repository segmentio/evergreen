import React, { memo, forwardRef } from 'react'
import { PolymorphicBoxProps } from 'ui-box'
import { useId } from '../../hooks'
import { Pane } from '../../layers'
import { PaneOwnProps } from '../../layers/src/Pane'
import { Text } from '../../typography'
import Radio from './Radio'

export interface RadioGroupOption {
  label: React.ReactNode
  value: string
  isDisabled?: boolean
}

export interface RadioGroupOwnProps extends PaneOwnProps {
  /**
   * The default value of the Radio Group when uncontrolled.
   */
  defaultValue?: string
  /**
   * The options for the radios of the Radio Group.
   */
  options?: RadioGroupOption[]
  /**
   * The selected item value when controlled.
   */
  value?: string
  /**
   * Label to display above the radio button options.
   */
  label?: string
  /**
   * The size of the radio circle. This also informs the text size and spacing.
   */
  size?: 12 | 16
  /**
   * When true, the radio get the required attribute.
   */
  isRequired?: boolean
  /**
   * Function called when state changes.
   */
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void
}

export type RadioGroupProps = PolymorphicBoxProps<'div', RadioGroupOwnProps>

const noop = () => {}
const emptyArray: any[] = []

const RadioGroup: React.FC<RadioGroupProps> = memo(
  forwardRef(function RadioGroup(props, ref) {
    const {
      size = 12,
      label,
      defaultValue,
      value,
      options = emptyArray,
      onChange = noop,
      isRequired = false,
      ...rest
    } = props

    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    const name = useId('RadioGroup')
    const selected = value || defaultValue || props.options?.[0]?.value

    return (
      <Pane role="group" aria-label={label} {...rest} ref={ref}>
        {label && (
          <Text color="muted" fontWeight={500}>
            {label}
          </Text>
        )}
        {options.map(item => (
          <Radio
            key={item.value}
            size={size}
            name={name}
            value={item.value}
            label={item.label}
            checked={selected === item.value}
            disabled={item.isDisabled}
            onChange={onChange}
            isRequired={isRequired}
          />
        ))}
      </Pane>
    )
  })
)

export default RadioGroup
