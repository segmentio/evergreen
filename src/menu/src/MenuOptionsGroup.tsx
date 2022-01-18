import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import { Pane } from '../../layers'
import { Heading } from '../../typography'
import MenuOption from './MenuOption'

const MenuOptionsGroup = memo(
  forwardRef(function MenuOptionsGroup(props, ref) {
    const { onChange, options, selected, title } = props

    return (
      // @ts-expect-error ts-migrate(2746) FIXME: This JSX tag's 'children' prop expects a single ch... Remove this comment to see the full error message
      <Pane ref={ref} paddingY={8}>
        {title && (
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
          <Heading size={100} marginLeft={44} marginRight={16} marginY={8}>
            {title}
          </Heading>
        )}
        // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
        <Pane>
          // @ts-expect-error ts-migrate(2339) FIXME: Property 'map' does not exist on type 'never'.
          {options.map((option: any) => {
            return (
              // @ts-expect-error ts-migrate(2322) FIXME: Type '{ children: any; key: any; isSelected: boole... Remove this comment to see the full error message
              <MenuOption
                key={option.value}
                isSelected={option.value === selected}
                // @ts-expect-error ts-migrate(2349) FIXME: This expression is not callable.
                onSelect={() => onChange(option.value)}
              >
                {option.label}
              </MenuOption>
            )
          })}
        </Pane>
      </Pane>
    );
  })
)

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
MenuOptionsGroup.propTypes = {
  /**
   * Title of the menu group.
   */
  title: PropTypes.node,

  /**
   * The current value of the option group.
   */
  selected: PropTypes.any,

  /**
   * Function called when selection changes.
   */
  onChange: PropTypes.func,

  /**
   * List of options rendered in the group.
   */
  options: PropTypes.array
}

export default MenuOptionsGroup
