import { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

let portalContainer

export default class Portal extends Component {
  constructor() {
    super()

    if (!portalContainer) {
      portalContainer = document.createElement('div')
      portalContainer.setAttribute('evergreen-portal-container', '')
      document.body.appendChild(portalContainer)
    }

    this.el = document.createElement('div')
  }

  componentWillMount() {
    portalContainer.appendChild(this.el)
  }

  componentWillUnmount() {
    portalContainer.removeChild(this.el)
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el)
  }
}

Portal.propTypes = {
  children: PropTypes.node.isRequired,
}
