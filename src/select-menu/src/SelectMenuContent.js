import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Pane } from '../../layers'
import OptionsList from './OptionsList'
import OptionShapePropType from './OptionShapePropType'

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
    listProps: PropTypes.shape(OptionsList.propTypes),

    /**
     * When true, multi select is accounted for.
     */
    isMultiSelect: PropTypes.bool,

    /**
     * Node that is placed in the header section, above the options.
     */
    titleView: PropTypes.node,

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
    headerHeight: 40
  }

  render() {
    const {
      width,
      height,
      options,
      hasTitle,
      hasFilter,
      close,
      listProps,
      titleView,
      detailView,
      emptyView,
      headerHeight,
      isMultiSelect
    } = this.props

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
          {hasTitle && titleView}

          {options.length === 0 && hasEmptyView ? (
            <Pane height={optionsListHeight}>{emptyView}</Pane>
          ) : (
            <OptionsList
              height={optionsListHeight}
              hasFilter={hasFilter}
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
