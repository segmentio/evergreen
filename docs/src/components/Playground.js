import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'

export default class Playground extends React.Component {
  static propTypes = {
    codeText: PropTypes.string.isRequired,
    scope: PropTypes.object
  }

  constructor(props) {
    super(props)

    this.state = {
      uniqueId: _.uniqueId(),
      isCodeCollapsed: true,
      hasError: false,
      codeText: props.codeText
    }
  }

  componentDidCatch() {
    // Display fallback UI
    this.setState({ hasError: true })
  }

  handleToggle = () => {
    this.setState({
      isCodeCollapsed: !this.state.isCodeCollapsed
    })
  }

  renderError = () => {
    return (
      <div className="Playground-error">
        <p>
          Oops, something went wrong in with this live preview.<br /> Please
          reload the page and try again.
        </p>
      </div>
    )
  }

  handleChange = codeText => {
    this.setState({
      codeText
    })
  }

  render() {
    const { scope } = this.props
    const { codeText, hasError, isCodeCollapsed, uniqueId } = this.state

    if (hasError) return this.renderError()

    return (
      <LiveProvider
        theme="evergreen"
        scope={{ ReactDOM, ...scope }}
        code={codeText}
        mountStylesheet={false}
      >
        <div className="Playground" data-iscodecollapsed={isCodeCollapsed}>
          <div
            aria-expanded={!isCodeCollapsed}
            role="button"
            aria-controls={`code-playground-${uniqueId}`}
            className="Playground-header"
            onClick={this.handleToggle}
          >
            {isCodeCollapsed ? 'Show code' : 'Hide code'}
          </div>
          <div>
            {!isCodeCollapsed && <LiveEditor onChange={this.handleChange} />}
            <LiveError />
            <div
              id={`code-playground-${uniqueId}`}
              className="Playground-preview"
            >
              <LivePreview />
            </div>
          </div>
        </div>
      </LiveProvider>
    )
  }
}
