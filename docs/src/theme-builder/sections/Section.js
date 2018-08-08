import React from 'react'
import PropTypes from 'prop-types'
import { Pane } from '../../../../src/layers'
import { Heading } from '../../../../src/typography'

export default class Section extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    controls: PropTypes.node,
    children: PropTypes.node,
    contentPadding: PropTypes.number
  }

  static defaultProps = {
    contentPadding: 16
  }

  render() {
    return (
      <Pane marginBottom={32}>
        <Pane marginBottom={16}>
          <Heading size={700}>{this.props.title}</Heading>
        </Pane>
        {this.props.controls ? (
          <Pane
            background="tint1"
            borderTop
            borderLeft
            borderRight
            padding={12}
          >
            {this.props.controls}
          </Pane>
        ) : null}
        <Pane border padding={this.props.contentPadding} clearfix>
          {this.props.children}
        </Pane>
      </Pane>
    )
  }
}
