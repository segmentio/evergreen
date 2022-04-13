import React, { memo, forwardRef, useMemo, useCallback } from 'react'
import cx from 'classnames'
import { PolymorphicBoxProps } from 'ui-box'
import { useClickable, useStyleConfig } from '../../hooks'
import { IconWrapper } from '../../icons/src/IconWrapper'
import { Pane } from '../../layers'
import { PaneOwnProps } from '../../layers/src/Pane'
import { DefaultAppearance } from '../../types'
import { IntentTypes } from '../../types/theme/intent-types'
import { Text } from '../../typography'

export interface MenuItemOwnProps extends PaneOwnProps {
  onSelect?: (event: React.SyntheticEvent) => void
  icon?: React.ElementType | JSX.Element | null | false
  secondaryText?: JSX.Element | string
  appearance?: DefaultAppearance
  intent?: IntentTypes
  disabled?: boolean
}

export type MenuItemProps = PolymorphicBoxProps<'div', MenuItemOwnProps>

const noop = () => {}

const pseudoSelectors = {
  _hover:
    '&[data-isselectable="true"]:not([aria-current="true"]):not([aria-checked="true"]):not(:focus):not(:active):hover',
  _focus:
    '&[data-isselectable="true"]:not([aria-current="true"]):not([aria-checked="true"]):focus, &[aria-selected="true"]',
  _active: '&[aria-current="true"], &[data-isselectable="true"]:active',
  _current: '&[aria-current="true"], &[aria-checked="true"]',
  _isSelectable: '&[data-isselectable="true"]',
  _disabled: '&:disabled, &[aria-disabled="true"]'
}

const internalStyles = {
  display: 'flex',
  alignItems: 'center'
}

const MenuItem: React.FC<MenuItemProps> = memo(
  forwardRef(function MenuItem(props, ref) {
    const {
      is = 'div',
      children,
      className,
      appearance = 'default',
      disabled,
      secondaryText,
      intent = 'none',
      icon,
      onSelect = noop,
      ...passthroughProps
    } = props

    const handleClick = useCallback(
      event => {
        if (disabled) return
        onSelect(event)
      },
      [disabled, onSelect]
    )

    // Pass all props, so the hook can handled `disabled`, `onKeyDown`, `tabIndex`
    // and any other explicit props that are passed through to the underlying component
    const { onKeyDown, tabIndex } = useClickable(props)

    const { className: themedClassName, ...boxProps } = useStyleConfig(
      'MenuItem',
      { appearance },
      pseudoSelectors,
      internalStyles
    )

    let iconColor = intent === 'none' ? 'default' : intent

    if (disabled) {
      iconColor = 'disabled'
    }

    const textColor = disabled ? 'disabled' : intent

    const secondaryTextColor = disabled ? textColor : 'muted'

    const disabledProps = useMemo(() => {
      return disabled
        ? {
            backgroundColor: 'tint1',
            cursor: 'not-allowed',
            disabled: true,
            onClick: null,
            onKeyPress: null,
            tabIndex: -1,
            'aria-disabled': 'true',
            'data-isselectable': 'false'
          }
        : {}
    }, [disabled])

    return (
      <Pane
        is={is}
        role="menuitem"
        className={cx(themedClassName, className)}
        onClick={handleClick}
        data-isselectable={!disabled || undefined}
        aria-disabled={disabled}
        ref={ref}
        height={icon ? 40 : 32}
        {...boxProps}
        {...passthroughProps}
        {...disabledProps}
        tabIndex={tabIndex}
        onKeyDown={onKeyDown}
      >
        <IconWrapper
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'false | Element | ElementType<any> | null | ... Remove this comment to see the full error message
          icon={icon}
          color={disabled ? 'disabled' : iconColor}
          marginLeft={16}
          marginRight={-4}
          size={16}
          flexShrink={0}
        />
        <Text color={textColor} marginLeft={16} marginRight={16} flex={1}>
          {children}
        </Text>
        {secondaryText && (
          <Text marginRight={16} color={secondaryTextColor}>
            {secondaryText}
          </Text>
        )}
      </Pane>
    )
  })
)

export default MenuItem
