import React from 'react'
import PropTypes from 'prop-types'
import { Pane } from '../../../src/layers'
import { Heading } from '../../../src/typography'
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
