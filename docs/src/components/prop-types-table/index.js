import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import * as reactDocs from 'react-docgen'

export default class PropTypesTable extends PureComponent {
  static propTypes = {
    componentSource: PropTypes.string
  }

  static defaultProps = {}

  constructor(props) {
    super(props)
    // Parsing the componentSrc is expensive, so we cache it in state rather than
    // computing it every time the component is rendered. Note the
    // componentWillReceiveProps method below where it is re-parsed as required.
    const componentDocs = reactDocs.parse(props.componentSource)
    this.state = { componentDocs }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.componentSource !== this.props.componentSource) {
      const componentDocs = reactDocs.parse(newProps.componentSource)
      this.setState({ componentDocs })
    }
  }

  render() {
    const { componentDocs } = this.state
    return <div>{JSON.stringify(componentDocs, null, 2)}</div>
  }
}
