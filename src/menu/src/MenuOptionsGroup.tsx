import React, { memo, forwardRef } from 'react'
import { Pane } from '../../layers'
import { Heading } from '../../typography'
import MenuOption from './MenuOption'

export interface MenuOptionsGroupProps<T> {
  title?: React.ReactNode
  selected?: T
  onChange?: (value: T) => void
  options: Array<{ value: T; label: string }>
}

// @ts-expect-error ts-migrate(2314) FIXME: Generic type 'MenuOptionsGroupProps<T>' requires 1... Remove this comment to see the full error message
const MenuOptionsGroup: React.FC<MenuOptionsGroupProps> = memo(
  forwardRef(function MenuOptionsGroup(props, ref) {
    const { onChange, options, selected, title } = props

    return (
      <Pane ref={ref} paddingY={8}>
        {title && (
          <Heading size={100} marginLeft={44} marginRight={16} marginY={8}>
            {title}
          </Heading>
        )}
        <Pane>
          {options.map((option: any) => {
            return (
              <MenuOption
                key={option.value}
                isSelected={option.value === selected}
                onSelect={() => onChange(option.value)}
              >
                {option.label}
              </MenuOption>
            )
          })}
        </Pane>
      </Pane>
    )
  })
)

export default MenuOptionsGroup
