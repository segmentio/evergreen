import React from 'react'
import PropTypes from 'prop-types'
import SyntaxHighlighter, {
  registerLanguage
} from 'react-syntax-highlighter/prism-light'
import jsx from 'react-syntax-highlighter/languages/prism/jsx'
import prism from 'react-syntax-highlighter/styles/prism/prism'

registerLanguage('jsx', jsx)

export default class SyntaxHighlighterComponent extends React.Component {
  static propTypes = {
    children: PropTypes.string
  }

  render() {
    const { children, ...props } = this.props
    return (
      <SyntaxHighlighter language="javascript" style={prism} {...props}>
        {children}
      </SyntaxHighlighter>
    )
  }
}
