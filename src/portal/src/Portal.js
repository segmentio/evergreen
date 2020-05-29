import { useState, useEffect, memo } from 'react'
import canUseDom from 'dom-helpers/util/inDOM'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const initializePortal = () => {
  if (!canUseDom) {
    return null
  }

  const portalContainer = document.createElement('div')
  portalContainer.setAttribute('evergreen-portal-container', '')
  return portalContainer
}

const initializeEl = () => {
  if (!canUseDom) {
    return null
  }

  return document.createElement('div')
}

const Portal = memo(({ children }) => {
  const [portalContainer] = useState(initializePortal)
  const [el] = useState(initializeEl)

  useEffect(() => {
    if (portalContainer) {
      document.body.appendChild(portalContainer)
      portalContainer.appendChild(el)
    }

    return () => {
      if (portalContainer) {
        portalContainer.removeChild(el)
      }
    }
  }, [])

  if (!canUseDom) return null

  return ReactDOM.createPortal(children, el)
})

Portal.propTypes = {
  children: PropTypes.node.isRequired
}

export default Portal
