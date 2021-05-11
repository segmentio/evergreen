import React from 'react'
import ReactDOM from 'react-dom'
import canUseDom from '../../lib/canUseDom'
import ToastManager from './ToastManager'

/**
 * The Toaster manages the interactions between
 * the ToasterManger and the toast API.
 */
export default class Toaster {
  constructor() {
    if (!canUseDom) return

    const container = document.createElement('div')
    container.setAttribute('data-evergreen-toaster-container', '')
    document.body.appendChild(container)

    ReactDOM.render(
      <ToastManager
        bindNotify={this._bindNotify}
        bindRemove={this._bindRemove}
        bindGetToasts={this._bindGetToasts}
        bindCloseAll={this._bindCloseAll}
      />,
      container
    )
  }

  _bindNotify = handler => {
    this.notifyHandler = handler
  }

  _bindRemove = handler => {
    this.removeHandler = handler
  }

  _bindGetToasts = handler => {
    this.getToastsHandler = handler
  }

  _bindCloseAll = handler => {
    this.closeAllHandler = handler
  }

  getToasts = () => {
    return this.getToastsHandler()
  }

  closeAll = () => {
    return this.closeAllHandler()
  }

  notify = (title, settings = {}) => {
    return this.notifyHandler(title, { ...settings, intent: 'none' })
  }

  success = (title, settings = {}) => {
    return this.notifyHandler(title, { ...settings, intent: 'success' })
  }

  warning = (title, settings = {}) => {
    return this.notifyHandler(title, { ...settings, intent: 'warning' })
  }

  danger = (title, settings = {}) => {
    return this.notifyHandler(title, { ...settings, intent: 'danger' })
  }

  remove = id => {
    return this.removeHandler(id)
  }
}
