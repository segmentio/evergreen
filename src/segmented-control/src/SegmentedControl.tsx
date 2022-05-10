import React, { memo, forwardRef, useState, useEffect, useCallback } from 'react'
import { PolymorphicBoxProps } from 'ui-box'
import { Button } from '../../buttons'
import { Group } from '../../group'
import { useId } from '../../hooks'
import safeInvoke from '../../lib/safe-invoke'
import warning from '../../lib/warning'

/** @deprecated This component will be removed in the next major version of Evergreen */
export interface SegmentedControlOwnProps {
  /**
   * The options (elements) displayed by the segmented control
   */
  options: Array<{
    label: string
    value: NonNullable<SegmentedControlOwnProps['value']>
  }>
  /**
   * The value of the segmented control
   */
  value?: number | string | boolean
  /**
   * The initial value of an uncontrolled segmented control
   */
  defaultValue?: number | string | boolean
  /**
   * Function called when value changes.
   */
  onChange: (value: NonNullable<SegmentedControlOwnProps['value']>) => void
  /**
   * The name attribute of the segmented control
   */
  name?: string
  size?: 'small' | 'medium' | 'large'
  /**
   * Whether or not the component is disabled
   */
  disabled?: boolean
}

/** @deprecated This component will be removed in the next major version of Evergreen */
export type SegmentedControlProps = PolymorphicBoxProps<'div', SegmentedControlOwnProps>

function isControlled(value: any) {
  return typeof value !== 'undefined' && value !== null
}

const SegmentedControl: React.FC<SegmentedControlProps> = memo(
  forwardRef(function SegmentedControl(props, ref) {
    const { defaultValue, disabled, height, name, onChange, options, size, value, ...rest } = props

    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    const groupName = useId('SegmentedControl')

    if (process.env.NODE_ENV !== 'production') {
      warning(
        true,
        '<SegmentedControl> is deprecated and will be removed in the next major verison of Evergreen. Prefer Tabs for navigational elements, or form components / button groups for other use cases.'
      )
    }

    const getDefaultValue = () => {
      if (isControlled(value)) {
        return value
      }

      return typeof defaultValue !== 'undefined' && defaultValue !== null ? defaultValue : options[0].value
    }

    const [activeValue, setActiveValue] = useState(getDefaultValue())

    useEffect(() => {
      if (isControlled(value)) {
        setActiveValue(value)
      }
    }, [value])

    const handleChange = useCallback(
      (event) => {
        event.preventDefault()
        const newValue = event.target.value

        // Save a render cycle when it's a controlled input
        if (!isControlled(value)) {
          setActiveValue(newValue)
        }

        safeInvoke(onChange, newValue)
      },
      [value, onChange]
    )

    return (
      <Group ref={ref} display="flex" {...rest}>
        {options.map((option: any, index: any) => (
          <Button
            key={option.value}
            id={groupName + index}
            name={name || groupName}
            value={String(option.value)}
            disabled={disabled}
            size={size}
            height={height}
            isActive={activeValue === String(option.value)}
            onClick={handleChange}
            flex="1"
          >
            {option.label}
          </Button>
        ))}
      </Group>
    )
  })
)

export default SegmentedControl
