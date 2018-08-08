import React from 'react'
import PropTypes from 'prop-types'
import { Pane } from '../../../src/layers'
import { Heading } from '../../../src/typography'
import { RadioGroup } from '../../../src/radio'
import ColorPicker from './ColorPicker'

export default class Sidebar extends React.Component {
  static propTypes = {
    state: PropTypes.object,
    setState: PropTypes.func
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
          <Heading size={300}>Control styles</Heading>
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
      </Pane>
    )
  }
}
