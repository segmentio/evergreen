/* eslint-disable react/jsx-key */
import React from 'react'
import PropTypes from 'prop-types'
import Highlight, { defaultProps } from 'prism-react-renderer'

export default class SyntaxHighlighter2 extends React.PureComponent {
  static propTypes = {
    children: PropTypes.string
  }

  componentDidCatch() {}

  render() {
    return (
      <Highlight
        {...defaultProps}
        code={this.props.children.trim()}
        language="jsx"
        theme={undefined}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
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
