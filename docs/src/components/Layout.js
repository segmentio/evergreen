import PropTypes from 'prop-types'
import '../css/index.css' // eslint-disable-line import/no-unassigned-import

/**
 * TODO: clean up the script and link
 */
const TemplateWrapper = ({ children }) => children

TemplateWrapper.propTypes = {
  children: PropTypes.node
}

export default TemplateWrapper
