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

  render() {
    const { state, setState } = this.props
    return (
      <Pane
        borderRight
        flexBasis={260}
        background="tint1"
        flexShrink={0}
        flexGrow={0}
      >
        <Pane borderBottom padding={12}>
          <Heading size={300}>Colors</Heading>
        </Pane>
        <ColorPicker
          color={state.primary}
          label="primary"
          onChangeComplete={color => setState({ primary: color })}
        />
      </Pane>
    )
  }
}
