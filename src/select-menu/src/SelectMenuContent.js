import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { IconButton } from '../../buttons'
import { Pane } from '../../layers'
import { Heading } from '../../typography'
import { Icon } from '../../icon'
import { Tooltip } from '../../tooltip'
import OptionsList from './OptionsList'
import OptionShapePropType from './OptionShapePropType'

export default class SelectMenuContent extends PureComponent {
  static propTypes = {
    close: PropTypes.func,
    title: PropTypes.string,
    tooltipContent: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    options: PropTypes.arrayOf(OptionShapePropType),
    hasTitle: PropTypes.bool,
    hasFilter: PropTypes.bool,
    hasTooltip: PropTypes.bool,
    listProps: PropTypes.shape(OptionsList.propTypes),

    /**
     * When true, multi select is accounted for.
     */
    isMultiSelect: PropTypes.bool,

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
    hasFilter: true
  }

  render() {
    const {
      width,
      height,
      options,
      hasTitle,
      hasTooltip,
      hasFilter,
      close,
      title,
      tooltipContent,
      listProps,
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
          {hasTitle && (
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
                {hasTooltip && (
                  <Tooltip content={tooltipContent}>
                    <Icon size={12} marginLeft={4} icon="help" />
                  </Tooltip>
                )}
              </Pane>
              <IconButton
                icon="cross"
                appearance="minimal"
                height={24}
                onClick={close}
              />
            </Pane>
          )}

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
