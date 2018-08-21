import React from 'react' // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types'
import '../css/index.css' // eslint-disable-line import/no-unassigned-import

const TemplateWrapper = ({ children }) => {
  return children
}

TemplateWrapper.propTypes = {
  children: PropTypes.node
}

export default TemplateWrapper
