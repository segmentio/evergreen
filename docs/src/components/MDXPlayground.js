import React from 'react'
import PropTypes from 'prop-types'
import Playground from './Playground'

export default class MDXPlayground extends React.Component {
  static propTypes = {
    children: PropTypes.string
  }

  render() {
    return <Playground codeText={this.props.children} />
  }
}
