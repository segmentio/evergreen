import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Pane } from '../../layers'
import { Heading } from '../../typography'
import { IconButton } from '../../buttons'
import OptionsList from './OptionsList'
import OptionShapePropType from './OptionShapePropType'

const DefaultTitleView = ({ close, title, headerHeight }) => (
  <Pane
    display="flex"
    alignItems="center"
    borderBottom="default"
    padding={8}
    height={headerHeight}
    boxSizing="border-box"
  >
    <Pane flex="1" display="flex" alignItems="center">
      <Heading size={400}>{title}</Heading>
    </Pane>
    <IconButton icon="cross" appearance="minimal" height={24} onClick={close} />
  </Pane>
)

DefaultTitleView.propTypes = {
  close: PropTypes.func,
  title: PropTypes.string,
  headerHeight: PropTypes.number
}
export default class SelectMenuContent extends PureComponent {
  static propTypes = {
    close: PropTypes.func,
    title: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    headerHeight: PropTypes.number,
    options: PropTypes.arrayOf(OptionShapePropType),
    hasTitle: PropTypes.bool,
    hasFilter: PropTypes.bool,
    filterPlaceholder: PropTypes.string,
    filterIcon: PropTypes.string,
    listProps: PropTypes.shape(OptionsList.propTypes),

    /**
     * When true, multi select is accounted for.
     */
    isMultiSelect: PropTypes.bool,

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

  static defaultProps = {
    options: [],
    hasTitle: true,
    hasFilter: true,
    titleView: DefaultTitleView
  }

  render() {
    const {
      title,
      width,
      height,
      options,
      hasTitle,
      hasFilter,
      filterPlaceholder,
      filterIcon,
      close,
      listProps,
      titleView,
      detailView,
      emptyView,
      isMultiSelect
    } = this.props

    const headerHeight = 40
    const optionsListHeight = hasTitle ? height - headerHeight : height

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
              {...listProps}
            />
          )}
        </Pane>
        {hasDetailView && detailView}
      </Pane>
    )
  }
}
