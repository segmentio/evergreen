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
      isCodeCollapsed: true
    }
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

  render() {
    const { codeText, scope } = this.props
    const { isCodeCollapsed, uniqueId, isPreviewEntered } = this.state
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
