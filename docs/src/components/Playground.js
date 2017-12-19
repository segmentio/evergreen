import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import ComponentPlayground from 'component-playground'

const Playground = ({ codeText, scope }) => {
  return (
    <ComponentPlayground
      collapsableCode
      theme="evergreen"
      codeText={codeText}
      scope={{ React, ReactDOM, ...scope }}
    />
  )
}

Playground.propTypes = {
  codeText: PropTypes.string.isRequired,
  scope: PropTypes.object
}

export default Playground
