import React from 'react'
import PropTypes from 'prop-types'
import Playground from './Playground'
import SyntaxHighlighter from './SyntaxHighlighter'

export default class MDXPlayground extends React.Component {
  static propTypes = {
    children: PropTypes.string,
    collapse: PropTypes.bool,
    static: PropTypes.bool,
    noInline: PropTypes.bool
  }

  static defaultProps = {
    noInline: false
  }

  render() {
    const { children, collapse, noInline } = this.props

    if (this.props.static) {
      return <SyntaxHighlighter>{children}</SyntaxHighlighter>
    }

    return (
      <Playground
        codeText={children}
        isOpenByDefault={!collapse}
        noInline={noInline}
      />
    )
  }
}
