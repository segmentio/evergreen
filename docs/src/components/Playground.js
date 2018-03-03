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
      isPreviewEntered: false,
      isCodeCollapsed: true,
      hasError: false
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

  handleMouseEnter = () => {
    this.setState({
      isPreviewEntered: true
    })
  }

  handleMouseLeave = () => {
    this.setState({
      isPreviewEntered: false
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

  render() {
    const { codeText, scope } = this.props
    const { hasError, isCodeCollapsed, uniqueId, isPreviewEntered } = this.state

    if (hasError) return this.renderError()

    return (
      <div
        className="Playground"
        data-ispreviewentered={isPreviewEntered}
        data-iscodecollapsed={isCodeCollapsed}
      >
        <LiveProvider
          theme="evergreen"
          scope={{ ReactDOM, ...scope }}
          code={codeText}
          mountStylesheet={false}
        >
          <div
            aria-expanded={!isCodeCollapsed}
            role="button"
            aria-controls={`code-playground-${uniqueId}`}
            className="Playground-header"
            onClick={this.handleToggle}
          >
            {isCodeCollapsed ? 'Show code' : 'Hide code'}
          </div>
          <div
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
          >
            {!isCodeCollapsed && <LiveEditor />}
            <LiveError />
            <div
              id={`code-playground-${uniqueId}`}
              className="Playground-preview"
            >
              <LivePreview />
            </div>
          </div>
        </LiveProvider>
      </div>
    )
  }
}
