import React from 'react'
import PropTypes from 'prop-types'
import Playground from './Playground'
import SyntaxHighlighter from './SyntaxHighlighter'

export default class MDXPlayground extends React.Component {
  static propTypes = {
    children: PropTypes.string,
    className: PropTypes.string,
    collapse: PropTypes.bool,
    static: PropTypes.bool,
    noInline: PropTypes.bool
  }

  static defaultProps = {
    noInline: false
  }

  render() {
    const { children, className, collapse, noInline } = this.props
    let language = 'jsx'
    if (className && className.includes('language-')) {
      language = className.split('-')[1]
    }

    if (this.props.static) {
      return (
        <SyntaxHighlighter language={language}>{children}</SyntaxHighlighter>
      )
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
