import React, { forwardRef, memo } from 'react'
import { PolymorphicBoxProps } from "ui-box"
import { IconWrapper } from '../../icons/src/IconWrapper'
import { minorScale } from '../../scales'
import Text, { TextOwnProps } from './Text'

export interface ListItemOwnProps extends TextOwnProps {
    /**
     * When passed, adds a icon before the list item.
     * See Evergreen `Icon` for documentation.
     */
    icon?: React.ElementType | JSX.Element | null | false;
    /**
     * The color of the icon.
     */
    iconColor?: string;
}

export type ListItemProps = PolymorphicBoxProps<'li', ListItemOwnProps>;

const ListItem: React.FC<ListItemProps> = memo(
  forwardRef(function ListItem(props, ref) {
    const { children, icon, iconColor, size, ...rest } = props

    let paddingLeft
    if (size === 300) paddingLeft = minorScale(1)
    if (size === 400) paddingLeft = minorScale(2)
    if (size === 500) paddingLeft = minorScale(2)
    if (size === 600) paddingLeft = minorScale(3)

    let iconTop
    if (size === 300) iconTop = 1
    if (size === 400) iconTop = 3
    if (size === 500) iconTop = 3
    if (size === 600) iconTop = 4

    let iconSize
    if (size === 300) iconSize = 12
    if (size === 400) iconSize = 14
    if (size === 500) iconSize = 14
    if (size === 600) iconSize = 16

    // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
    let iconLeft = -iconSize - 4
    // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
    if (size === 600) iconLeft = -iconSize

    return (
      <Text
        // @ts-expect-error ts-migrate(2322) FIXME: Type '"li"' is not assignable to type '"span" | un... Remove this comment to see the full error message
        is="li"
        position="relative"
        marginY="0.5em"
        size={size}
        listStyleType={icon ? 'none' : undefined}
        paddingLeft={icon ? paddingLeft : undefined}
        ref={ref}
        {...rest}
      >
        {icon && (
          <IconWrapper
            icon={icon}
            color={iconColor}
            position="absolute"
            size={iconSize}
            left={iconLeft}
            top={iconTop}
          />
        )}
        {children}
      </Text>
    )
  })
)

export default ListItem
