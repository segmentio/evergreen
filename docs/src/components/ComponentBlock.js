import React from 'react'
import PropTypes from 'prop-types'
import ComponentSection from './ComponentSection'
import ComponentIntro from './ComponentIntro'
import PlaygroundExampleGroup from './PlaygroundExampleGroup'
import PlaygroundExample from './PlaygroundExample'
import PropTypesTable from './prop-types-table'

export default class ComponentBlock extends React.PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.node,
    source: PropTypes.string,
    examples: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.node,
        codeText: PropTypes.string.isRequired,
        scope: PropTypes.object.isRequired
      })
    )
  }

  render() {
    const { name, description, examples, source } = this.props

    return (
      <ComponentSection>
        <ComponentIntro name={name}>{description}</ComponentIntro>

        <PlaygroundExampleGroup>
          {examples.map(example => {
            return (
              <PlaygroundExample
                key={example.title}
                title={example.title}
                description={example.description}
                codeText={example.codeText}
                scope={example.scope}
              />
            )
          })}
        </PlaygroundExampleGroup>

        <PropTypesTable componentSource={source} />
      </ComponentSection>
    )
  }
}
