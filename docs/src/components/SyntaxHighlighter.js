/* eslint-disable react/jsx-key */
import React from 'react'
import PropTypes from 'prop-types'
import Highlight, { defaultProps } from 'prism-react-renderer'

export default class SyntaxHighlighter extends React.PureComponent {
  static propTypes = {
    children: PropTypes.string,
    language: PropTypes.string
  }

  componentDidCatch() {}

  render() {
    return (
      <Highlight
        {...defaultProps}
        code={this.props.children.trim()}
        language={this.props.language || 'jsx'}
        theme={undefined}
      >
        {({ tokens, getLineProps, getTokenProps }) => (
          <pre className="prism-code">
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    )
  }
}
