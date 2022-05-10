import React, { memo } from 'react'
import { IconButton } from '../../buttons'
import { CrossIcon } from '../../icons'
import { Pane } from '../../layers'
import { Text } from '../../typography'
import OptionsList, { OptionsListProps } from './OptionsList'

export interface SelectMenuContentProps {
  close?: OptionsListProps['close']
  /*
   * When true, menu closes on option selection.
   */
  closeOnSelect?: boolean
  title?: string
  width?: number
  height?: number
  headerHeight?: number
  options?: OptionsListProps['options']
  hasTitle?: boolean
  hasFilter?: boolean
  filterPlaceholder?: string
  filterIcon?: OptionsListProps['filterIcon']
  listProps?: OptionsListProps
  /**
   * When true, multi select is accounted for.
   */
  isMultiSelect?: boolean
  /**
   * Node that is placed in the header section, above the options.
   */
  titleView?:
    | React.ReactNode
    | ((props: {
        close: NonNullable<SelectMenuContentProps['close']>
        title: SelectMenuContentProps['title']
        headerHeight: NonNullable<SelectMenuContentProps['headerHeight']>
      }) => React.ReactNode)
  /**
   * Node that is placed right next to the options.
   */
  detailView?: React.ReactNode
  /**
   * Node that is displayed instead of options list when there are no options.
   */
  emptyView?: React.ReactNode
}

const DefaultTitleView = ({ close, headerHeight, title }: any) => (
  <Pane
    display="flex"
    alignItems="center"
    borderBottom="default"
    padding={8}
    height={headerHeight}
    boxSizing="border-box"
  >
    <Pane flex="1" display="flex" alignItems="center">
      <Text size={300} textTransform="uppercase">
        {title}
      </Text>
    </Pane>
    <IconButton icon={CrossIcon} appearance="minimal" height={24} onClick={close} border="none" />
  </Pane>
)
const emptyArray: any = []

const SelectMenuContent: React.FC<SelectMenuContentProps> = memo(function SelectMenuContent(props) {
  const {
    title,
    width,
    height,
    options = emptyArray,
    hasTitle = true,
    hasFilter = true,
    filterPlaceholder,
    filterIcon,
    close,
    listProps,
    titleView = DefaultTitleView,
    detailView,
    emptyView,
    isMultiSelect,
    closeOnSelect,
  } = props

  const headerHeight = 40
  const optionsListHeight = hasTitle ? (height as number) - headerHeight : height

  const hasDetailView = Boolean(detailView)
  const hasEmptyView = Boolean(emptyView)

  return (
    <Pane display="flex" height={height}>
      <Pane
        width={width}
        height={height}
        display="flex"
        flexDirection="column"
        borderRight={hasDetailView ? 'muted' : null}
      >
        {/* @ts-expect-error */}
        {hasTitle && titleView({ close, title, headerHeight })}
        {options.length === 0 && hasEmptyView ? (
          <Pane height={optionsListHeight}>{emptyView}</Pane>
        ) : (
          <OptionsList
            height={optionsListHeight}
            hasFilter={hasFilter}
            filterPlaceholder={filterPlaceholder}
            filterIcon={filterIcon}
            options={options}
            isMultiSelect={isMultiSelect}
            close={close}
            closeOnSelect={closeOnSelect}
            {...listProps}
          />
        )}
      </Pane>
      {hasDetailView && detailView}
    </Pane>
  )
})

export default SelectMenuContent
