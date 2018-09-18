import React from 'react'
import PropTypes from 'prop-types'
import Playground from './Playground'

export default class MDXPlayground extends React.Component {
  static propTypes = {
    children: PropTypes.string,
    className: PropTypes.string
  }

  render() {
    // We are abusing the className for now to differentiate wether the Playground should be open or collapsed.
    // This is because passing properties is not yet supported in MDX.
    const isOpenByDefault = this.props.className.includes('jsx')

    return (
      <Playground
        codeText={this.props.children}
        isOpenByDefault={isOpenByDefault}
      />
    )
  }
}
