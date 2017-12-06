import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { IconButton } from 'evergreen-buttons'
import { Pane } from 'evergreen-layers'
import { Heading } from 'evergreen-typography'
import OptionsList from './OptionsList'
import OptionShapePropType from './OptionShapePropType'

export default class SelectMenuContent extends PureComponent {
  static propTypes = {
    close: PropTypes.func,
    title: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    options: PropTypes.arrayOf(OptionShapePropType),
    hasTitle: PropTypes.bool,
    hasFilter: PropTypes.bool,
    listProps: PropTypes.shape(OptionsList.propTypes),
  }

  static defaultProps = {
    options: [],
    hasTitle: true,
    hasFilter: true,
  }

  constructor(props, context) {
    super(props, context)

    this.state = {}
  }

  render() {
    const {
      width,
      height,
      options,
      hasTitle,
      hasFilter,
      close,
      title,
      listProps,
    } = this.props

    const headerHeight = 40
    const optionsListHeight = hasTitle ? height - headerHeight : height

    return (
      <Pane width={width} height={height} display="flex" flexDirection="column">
        {hasTitle && (
          <Pane
            display="flex"
            alignItems="center"
            borderBottom="muted"
            padding={8}
            height={headerHeight}
            boxSizing="border-box"
          >
            <Pane flex="1">
              <Heading size={400}>{title}</Heading>
            </Pane>
            <IconButton
              icon="close"
              appearance="ghost"
              height={24}
              onClick={close}
            />
          </Pane>
        )}
        <OptionsList
          height={optionsListHeight}
          hasFilter={hasFilter}
          options={options}
          {...listProps}
        />
      </Pane>
    )
  }
}
