import React from 'react'
import PropTypes from 'prop-types'
import Playground from './Playground'

export default class PlaygroundExample extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    ...Playground.propTypes
  }

  render() {
    const { title, description, codeText, scope } = this.props
    return (
      <section
        className="PlaygroundExample"
        style={{ marginTop: 32, marginBottom: 32 }}
      >
        <div
          className="Content PlaygroundExample-header"
          style={{ marginBottom: 16 }}
        >
          <h4>{title}</h4>
          {description && description}
        </div>
        <Playground codeText={codeText} scope={{ ...scope }} />
      </section>
    )
  }
}
