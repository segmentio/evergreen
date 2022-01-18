import { Component } from 'react'
import PropTypes from 'prop-types'
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import ReactDOM from 'react-dom'
import canUseDom from '../../lib/canUseDom'

let portalContainer: any

export default class Portal extends Component {
  el: any;
  constructor() {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 1-2 arguments, but got 0.
    super()

    // This fixes SSR
    if (!canUseDom) return

    if (!portalContainer) {
      portalContainer = document.createElement('div')
      portalContainer.setAttribute('evergreen-portal-container', '')
      document.body.appendChild(portalContainer)
    }

    this.el = document.createElement('div')
    portalContainer.appendChild(this.el)
  }

  componentWillUnmount() {
    portalContainer.removeChild(this.el)
  }

  render() {
    // This fixes SSR
    if (!canUseDom) return null
    return ReactDOM.createPortal(this.props.children, this.el)
  }
}

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
Portal.propTypes = {
  children: PropTypes.node.isRequired
}
