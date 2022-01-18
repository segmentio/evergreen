import React, { memo, useCallback } from 'react'
import PropTypes from 'prop-types'
import { useClickable, useStyleConfig } from '../../hooks'
import { TickIcon } from '../../icons'
import { Pane } from '../../layers'
import { pseudoSelectors } from '../../table/src/TableRow'
import { Text } from '../../typography'

const noop = () => {}

const internalStyles = {
  display: 'flex',
  alignItems: 'center'
}

const MenuOption = memo(function MenuOption(props) {
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'id' does not exist on type '{ children?:... Remove this comment to see the full error message
  const { id, children, appearance = 'default', onSelect = noop, secondaryText, isSelected = false } = props

  const handleClick = useCallback(e => onSelect(e), [onSelect])

  const { onKeyDown, tabIndex } = useClickable()

  const { className: themedClassName, ...boxProps } = useStyleConfig(
    'MenuItem',
    { appearance },
    pseudoSelectors,
    internalStyles
  )

  const textProps = isSelected
    ? {
        color: 'selected',
        fontWeight: 500,
        marginLeft: 16
      }
    : { marginLeft: 44 }

  return (
    // @ts-expect-error ts-migrate(2746) FIXME: This JSX tag's 'children' prop expects a single ch... Remove this comment to see the full error message
    <Pane
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
      id={id}
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
      role="menuitemradio"
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
      tabIndex={tabIndex}
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'undefined' is not assignable to type 'never'... Remove this comment to see the full error message
      className={themedClassName}
      // @ts-expect-error ts-migrate(2322) FIXME: Type '(e: any) => any' is not assignable to type '... Remove this comment to see the full error message
      onClick={handleClick}
      // @ts-expect-error ts-migrate(2322) FIXME: Type '(event: any) => void' is not assignable to t... Remove this comment to see the full error message
      onKeyDown={onKeyDown}
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
      data-isselectable="true"
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
      aria-checked={isSelected}
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
      height={40}
      {...boxProps}
    >
      {isSelected && (
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'boolean' is not assignable to type 'never'.
        <TickIcon aria-hidden color="selected" marginLeft={16} marginRight={-4} size={16} flexShrink={0} />
      )}
      // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
      <Text {...textProps} marginRight={16} flex={1}>
        {children}
      </Text>
      {secondaryText && (
        // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
        <Text marginRight={16} color="muted">
          {secondaryText}
        </Text>
      )}
    </Pane>
  )
})

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'Named... Remove this comment to see the full error message
MenuOption.propTypes = {
  /**
   * The id attribute of the menu option.
   */
  id: PropTypes.string,

  /**
   * Function that is called on click and enter/space keypress.
   */
  onSelect: PropTypes.func,

  /**
   * The icon before the label.
   */
  isSelected: PropTypes.bool,

  /**
   * The children of the component.
   */
  children: PropTypes.node,

  /**
   * Secondary text shown on the right.
   */
  secondaryText: PropTypes.node,

  /**
   * The default theme only supports one default appearance.
   */
  appearance: PropTypes.string
}

export default MenuOption
