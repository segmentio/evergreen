import React, { memo, useState } from 'react'
import cx from 'classnames'
import { PolymorphicBoxProps } from 'ui-box'
import { useStyleConfig } from '../../hooks'
import { Pane } from '../../layers'
import { PaneOwnProps } from '../../layers/src/Pane'
import ScrollbarSize from './ScrollbarSize'

export interface TableHeadOwnProps extends PaneOwnProps {
  height?: number | string
  accountForScrollbar?: boolean
}

export type TableHeadProps = PolymorphicBoxProps<'div', TableHeadOwnProps>

const emptyObject = {}

const pseudoSelectors = {
  _firstOfType: '&:first-of-type'
}

const internalStyles = {
  display: 'flex',
  flexShrink: 0
}

const TableHead: React.FC<TableHeadProps> = memo(function TableHead(props) {
  const { accountForScrollbar = true, children, className, ...rest } = props
  const [scrollbarWidth, setScrollBarWidth] = useState(0)

  const { className: themedClassName, height: themeHeight, ...boxProps } = useStyleConfig(
    'TableHead',
    emptyObject,
    pseudoSelectors,
    internalStyles
  )

  const height = rest.height || themeHeight

  return (
    <Pane
      paddingRight={scrollbarWidth}
      className={cx(themedClassName, className)}
      height={height}
      {...boxProps}
      {...rest}
    >
      {children} {accountForScrollbar && <ScrollbarSize handleScrollbarSize={setScrollBarWidth} />}
    </Pane>
  )
})

export default TableHead
