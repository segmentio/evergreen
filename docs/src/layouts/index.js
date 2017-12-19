import React from 'react'
import PropTypes from 'prop-types'
import './../css/index.css' // eslint-disable-line import/no-unassigned-import

/**
 * TODO: clean up the script and link
 */
const TemplateWrapper = ({ children }) => (
  <div>
    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
