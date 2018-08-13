import React from 'react'
import PropTypes from 'prop-types'
import { Pane } from '../../../src/layers'
import { Heading, Text } from '../../../src/typography'
import { RadioGroup } from '../../../src/radio'
import { Button } from '../../../src/buttons'
import ColorPicker from './ColorPicker'
import copyToClipboard from './copyToClipboard'

export default class Sidebar extends React.Component {
  static propTypes = {
    state: PropTypes.object,
    setState: PropTypes.func
  }

  state = {
    isCopied: false
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  updatePalette = (scaleKey, color) => {
    this.props.setState({
      palette: {
        ...this.props.state.palette,
        [scaleKey]: color
      }
    })
  }

  updateControlStyle = value => {
    this.props.setState({
      controlStyle: value
    })
  }

  handleShareTheme = () => {
    copyToClipboard(window.location)
    this.setState({
      isCopied: true
    })

    this.timeout = setTimeout(() => {
      this.setState({
        isCopied: false
      })
    }, 2000)
  }

  handleReset = () => {
    localStorage.removeItem('custom_theme_styles')
    location.search = ''
  }

  render() {
    const { state } = this.props

    return (
      <Pane
        borderRight
        flexBasis={260}
        background="tint1"
        flexShrink={0}
        flexGrow={0}
      >
        <Pane borderBottom padding={12}>
          <Heading size={300}>Style</Heading>
        </Pane>
        <Pane background="white" clearfix borderBottom>
          <RadioGroup
            margin={12}
            size={16}
            value={state.controlStyle}
            options={[
              { label: 'Gradients', value: 'gradients' },
              { label: 'Flat', value: 'flat' }
            ]}
            onChange={value => this.updateControlStyle(value)}
          />
        </Pane>
        <Pane borderBottom padding={12}>
          <Heading size={300}>Palette</Heading>
        </Pane>
        <Pane>
          {Object.keys(state.palette).map(scaleKey => {
            return (
              <ColorPicker
                key={scaleKey}
                color={state.palette[scaleKey]}
                label={scaleKey}
                onChangeComplete={color => this.updatePalette(scaleKey, color)}
              />
            )
          })}
        </Pane>
        <Pane borderBottom padding={12}>
          <Heading size={300}>Share</Heading>
        </Pane>
        <Pane background="white" padding={12} borderBottom>
          <Button iconBefore="clipboard" onClick={this.handleShareTheme}>
            Copy theme URL
          </Button>
          {this.state.isCopied && <Text marginLeft={12}>Copied!</Text>}
        </Pane>

        <Pane borderBottom padding={12}>
          <Heading size={300}>Reset theme</Heading>
        </Pane>
        <Pane background="white" padding={12} borderBottom>
          <Button iconBefore="refresh" onClick={this.handleReset}>
            Reset to default theme
          </Button>
        </Pane>
      </Pane>
    )
  }
}
