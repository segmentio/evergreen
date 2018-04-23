import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { TriangleIcon } from '../../icons'
import { Pane } from '../../layers'
import { Heading } from '../../typography'

export default class OptionListGroupHeading extends PureComponent {
  static height = 32

  static propTypes = {
    /**
     * The heading label content.
     */
    label: PropTypes.string,

    /**
     * The style object that contains virtualized position and styles.
     */
    style: PropTypes.object,

    /**
     * When true, the options in this group is collapsed.
     */
    isCollapsed: PropTypes.bool,

    /**
     * When true, the options in this group can be collapsed.
     */
    isCollapsible: PropTypes.bool,

    /**
     * A React Node that can be rendered on the right of the heading label.
     */
    elemRight: PropTypes.node,

    /**
     * Function fired when the heading is clicked when isCollapsible is true.
     */
    onCollapseStateChange: PropTypes.func
  }

  static defaultProps = {
    isCollapsible: false,
    isCollapsed: false
  }

  render() {
    const {
      label,
      style,
      isCollapsed,
      isCollapsible,
      elemRight,
      onCollapseStateChange
    } = this.props

    const headingProps = isCollapsible
      ? {
          role: 'button',
          cursor: 'pointer',
          onClick: () => {
            onCollapseStateChange(!isCollapsed)
          }
        }
      : {}

    return (
      <Pane
        display="flex"
        alignItems="center"
        height={OptionListGroupHeading.height}
        borderBottom="extraMuted"
        paddingX={8}
        appearance="tint1"
        style={style}
      >
        <Heading
          flex={1}
          size={200}
          color="extraMuted"
          isUppercase
          display="flex"
          alignItems="center"
          {...headingProps}
        >
          {isCollapsible && (
            <TriangleIcon
              iconSize={10}
              size={10}
              position="relative"
              top={-2}
              marginRight={4}
              aim={isCollapsed ? 'right' : 'down'}
            />
          )}{' '}
          {label}
        </Heading>
        {elemRight}
      </Pane>
    )
  }
}
