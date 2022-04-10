import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { IconButton } from '../../buttons'
import { CrossIcon } from '../../icons'
import { Pane } from '../../layers'
import { Text } from '../../typography'
import OptionShapePropType from './OptionShapePropType'
import OptionsList from './OptionsList'

const DefaultTitleView = ({ close, headerHeight, title }: any) => (
  // @ts-expect-error ts-migrate(2746) FIXME: This JSX tag's 'children' prop expects a single ch... Remove this comment to see the full error message
  <Pane
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
    display="flex"
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
    alignItems="center"
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
    borderBottom="default"
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
    padding={8}
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
    height={headerHeight}
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
    boxSizing="border-box"
  >
    {/* @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message */}
    <Pane flex="1" display="flex" alignItems="center">
      {/* @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message */}
      <Text size={300} textTransform="uppercase">
        {title}
      </Text>
    </Pane>
    {/* @ts-expect-error ts-migrate(2322) FIXME: Type 'MemoExoticComponent<ForwardRefExoticComponen... Remove this comment to see the full error message */}
    <IconButton icon={CrossIcon} appearance="minimal" height={24} onClick={close} border="none" />
  </Pane>
)

DefaultTitleView.propTypes = {
  close: PropTypes.func,
  title: PropTypes.string,
  headerHeight: PropTypes.number
}

const emptyArray: any = []

const SelectMenuContent = memo(function SelectMenuContent(props) {
  const {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'title' does not exist on type '{ childre... Remove this comment to see the full error message
    title,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'width' does not exist on type '{ childre... Remove this comment to see the full error message
    width,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'height' does not exist on type '{ childr... Remove this comment to see the full error message
    height,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'options' does not exist on type '{ child... Remove this comment to see the full error message
    options = emptyArray,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'hasTitle' does not exist on type '{ chil... Remove this comment to see the full error message
    hasTitle = true,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'hasFilter' does not exist on type '{ chi... Remove this comment to see the full error message
    hasFilter = true,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'filterPlaceholder' does not exist on typ... Remove this comment to see the full error message
    filterPlaceholder,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'filterIcon' does not exist on type '{ ch... Remove this comment to see the full error message
    filterIcon,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'close' does not exist on type '{ childre... Remove this comment to see the full error message
    close,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'listProps' does not exist on type '{ chi... Remove this comment to see the full error message
    listProps,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'titleView' does not exist on type '{ chi... Remove this comment to see the full error message
    titleView = DefaultTitleView,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'detailView' does not exist on type '{ ch... Remove this comment to see the full error message
    detailView,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'emptyView' does not exist on type '{ chi... Remove this comment to see the full error message
    emptyView,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'isMultiSelect' does not exist on type '{... Remove this comment to see the full error message
    isMultiSelect,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'closeOnSelect' does not exist on type '{... Remove this comment to see the full error message
    closeOnSelect
  } = props

  const headerHeight = 40
  const optionsListHeight = hasTitle ? height - headerHeight : height

  const hasDetailView = Boolean(detailView)
  const hasEmptyView = Boolean(emptyView)

  return (
    // @ts-expect-error ts-migrate(2746) FIXME: This JSX tag's 'children' prop expects a single ch... Remove this comment to see the full error message
    <Pane display="flex" height={height}>
      // @ts-expect-error ts-migrate(2746) FIXME: This JSX tag's 'children' prop expects a single ch... Remove this
      comment to see the full error message
      <Pane
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
        width={width}
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
        height={height}
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
        display="flex"
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
        flexDirection="column"
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'string | null' is not assignable to type 'ne... Remove this comment to see the full error message
        borderRight={hasDetailView ? 'muted' : null}
      >
        {hasTitle && titleView({ close, title, headerHeight })}
        {options.length === 0 && hasEmptyView ? (
          // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
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

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'Named... Remove this comment to see the full error message
SelectMenuContent.propTypes = {
  close: PropTypes.func,
  title: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  headerHeight: PropTypes.number,
  options: PropTypes.arrayOf(OptionShapePropType),
  hasTitle: PropTypes.bool,
  hasFilter: PropTypes.bool,
  filterPlaceholder: PropTypes.string,
  filterIcon: PropTypes.oneOfType([PropTypes.elementType, PropTypes.element]),
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'Named... Remove this comment to see the full error message
  listProps: PropTypes.shape(OptionsList.propTypes),

  /**
   * When true, multi select is accounted for.
   */
  isMultiSelect: PropTypes.bool,

  /*
   * When true, menu closes on option selection.
   */
  closeOnSelect: PropTypes.bool,

  /**
   * Node that is placed in the header section, above the options.
   */
  titleView: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),

  /**
   * Node that is placed right next to the options.
   */
  detailView: PropTypes.node,

  /**
   * Node that is displayed instead of options list when there are no options.
   */
  emptyView: PropTypes.node
}

export default SelectMenuContent
