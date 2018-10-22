import React from 'react'
import PropTypes from 'prop-types'
import Playground from './Playground'
import SyntaxHighlighter from './SyntaxHighlighter'

export default class MDXPlayground extends React.Component {
  static propTypes = {
    children: PropTypes.string,
    collapse: PropTypes.bool,
    static: PropTypes.bool
  }

  render() {
    if (this.props.static) {
      return <SyntaxHighlighter>{this.props.children}</SyntaxHighlighter>
    }

    return (
      <Playground
        codeText={this.props.children}
        isOpenByDefault={!this.props.collapse}
      />
    )
  }
}
