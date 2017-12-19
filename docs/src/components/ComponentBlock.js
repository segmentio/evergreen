import React from 'react'
import PropTypes from 'prop-types'
import ComponentSection from './ComponentSection'
import ComponentIntro from './ComponentIntro'
import PlaygroundExampleGroup from './PlaygroundExampleGroup'
import PlaygroundExample from './PlaygroundExample'

export default class ComponentBlock extends React.PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.node,
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
    const { name, description, examples } = this.props

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
      </ComponentSection>
    )
  }
}
