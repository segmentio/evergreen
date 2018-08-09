import React from 'react'
import PropTypes from 'prop-types'
import { Pane } from '../../../../src/layers'
import { Heading } from '../../../../src/typography'
import { Icon } from '../../../../src/icon'
import { Button } from '../../../../src/buttons'

export default class Section extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    controls: PropTypes.node,
    children: PropTypes.node,
    contentPadding: PropTypes.number,
    fileName: PropTypes.string
  }

  static defaultProps = {
    contentPadding: 16
  }

  state = {
    isShown: true
  }

  handleToggle = () => {
    this.setState(state => ({
      isShown: !state.isShown
    }))
  }

  handleKeyDown = e => {
    if (e.key === 'Enter' || e.key === 'Space') {
      this.handleToggle()
    }
  }

  render() {
    const { isShown } = this.state
    return (
      <Pane marginBottom={32}>
        <Pane display="flex" alignItems="center" marginBottom={16}>
          <Pane flex={1}>
            <Pane
              role="button"
              display="inline-flex"
              alignItems="center"
              tabIndex={0}
              cursor="pointer"
              onClick={this.handleToggle}
              onKeyDown={this.handleKeyDown}
            >
              <Heading size={700}>
                <Icon
                  icon={isShown ? 'caret-down' : 'caret-right'}
                  size={16}
                  color="muted"
                  marginRight={8}
                />
                {this.props.title}
              </Heading>
            </Pane>
          </Pane>
          <Button
            is="a"
            height={28}
            href={`https://github.com/segmentio/evergreen/blob/v4-create-theme/docs/src/theme-builder/sections/${
              this.props.fileName
            }`}
            target="_blank"
          >
            View on Github
          </Button>
        </Pane>
        {isShown && (
          <React.Fragment>
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
          </React.Fragment>
        )}
      </Pane>
    )
  }
}
