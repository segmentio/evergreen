import { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import canUseDom from '../../lib/canUseDom'

let portalContainer

export default class Portal extends Component {
  constructor() {
    super()

    // This fixes SSR
    if (!canUseDom) return

    if (!portalContainer) {
      portalContainer = document.createElement('div')
      portalContainer.setAttribute('evergreen-portal-container', '')
      document.body.appendChild(portalContainer)
    }
  }

  componentDidMount() {
    this.el = document.createElement('div')
    portalContainer.appendChild(this.el)
    this.forceUpdate()
  }

  componentWillUnmount() {
    portalContainer.removeChild(this.el)
  }

  render() {
    if (!this.el) return null
    return ReactDOM.createPortal(this.props.children, this.el)
  }
}

Portal.propTypes = {
  children: PropTypes.node.isRequired
}
