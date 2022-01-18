import React from 'react'
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import ReactDOM from 'react-dom'
import canUseDom from '../../lib/canUseDom'
import ToastManager from './ToastManager'

/**
 * The Toaster manages the interactions between
 * the ToasterManger and the toast API.
 */
export default class Toaster {
  closeAllHandler: any;
  getToastsHandler: any;
  notifyHandler: any;
  removeHandler: any;
  constructor() {
    if (!canUseDom) return

    const container = document.createElement('div')
    container.setAttribute('data-evergreen-toaster-container', '')
    document.body.appendChild(container)

    ReactDOM.render(
      <ToastManager
        // @ts-expect-error ts-migrate(2322) FIXME: Type '{ bindNotify: (handler: any) => void; bindRe... Remove this comment to see the full error message
        bindNotify={this._bindNotify}
        bindRemove={this._bindRemove}
        bindGetToasts={this._bindGetToasts}
        bindCloseAll={this._bindCloseAll}
      />,
      container
    )
  }

  _bindNotify = (handler: any) => {
    this.notifyHandler = handler
  }

  _bindRemove = (handler: any) => {
    this.removeHandler = handler
  }

  _bindGetToasts = (handler: any) => {
    this.getToastsHandler = handler
  }

  _bindCloseAll = (handler: any) => {
    this.closeAllHandler = handler
  }

  getToasts = () => {
    return this.getToastsHandler()
  }

  closeAll = () => {
    return this.closeAllHandler()
  }

  notify = (title: any, settings = {}) => {
    return this.notifyHandler(title, { ...settings, intent: 'none' })
  }

  success = (title: any, settings = {}) => {
    return this.notifyHandler(title, { ...settings, intent: 'success' })
  }

  warning = (title: any, settings = {}) => {
    return this.notifyHandler(title, { ...settings, intent: 'warning' })
  }

  danger = (title: any, settings = {}) => {
    return this.notifyHandler(title, { ...settings, intent: 'danger' })
  }

  remove = (id: any) => {
    return this.removeHandler(id)
  }
}
