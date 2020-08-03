import React, { memo, useState } from 'react'
import { css } from 'glamor'
import PropTypes from 'prop-types'
import { StackingOrder } from '../../constants'
import Toast from './Toast'

const wrapperClass = css({
  maxWidth: 560,
  margin: '0 auto',
  top: 0,
  left: 0,
  right: 0,
  position: 'fixed',
  zIndex: StackingOrder.TOASTER,
  pointerEvents: 'none'
})

const hasCustomId = settings => Object.hasOwnProperty.call(settings, 'id')

const ToastManager = memo(function ToastManager(props) {
  const { bindNotify, bindRemove, bindGetToasts, bindCloseAll } = props

  const [toasts, setToasts] = useState([])
  const [idCounter, setIdCounter] = useState(0)

  const getToasts = () => toasts

  const closeAll = () => {
    setToasts(toasts.map(toast => ({ ...toast, isShown: false })))
  }

  /**
   * This will set isShown on the Toast which will close the toast.
   * It won't remove the toast until onExited triggers onRemove.
   */
  const closeToast = id => {
    setToasts(
      toasts.map(toast => {
        if (toast.id === id) {
          return {
            ...toast,
            isShown: false
          }
        }

        return toast
      })
    )
  }

  const safeCloseToast = id => {
    const toastToRemove = toasts.find(toast => String(toast.id).startsWith(id))

    if (toastToRemove) {
      closeToast(toastToRemove.id)
    }
  }

  const removeToast = id => {
    const updatedToasts = toasts.filter(
      toast => !String(toast.id).startsWith(id)
    )
    setToasts(updatedToasts)
    return updatedToasts
  }

  const createToastInstance = (title, settings) => {
    const uniqueId = idCounter
    setIdCounter(idCounter + 1)
    const id = hasCustomId(settings) ? `${settings.id}-${uniqueId}` : uniqueId

    return {
      id,
      title,
      description: settings.description,
      hasCloseButton: settings.hasCloseButton || true,
      duration: settings.duration || 5,
      close: () => safeCloseToast(id),
      intent: settings.intent
    }
  }

  const notify = (title, settings) => {
    let tempToasts = toasts
    if (hasCustomId(settings)) {
      tempToasts = removeToast(settings.id)
    }

    const instance = createToastInstance(title, settings)
    setToasts([instance, ...tempToasts])
  }

  bindNotify(notify)
  bindRemove(safeCloseToast)
  bindGetToasts(getToasts)
  bindCloseAll(closeAll)

  return (
    <span className={wrapperClass}>
      {toasts.map(({ id, description, ...rest }) => {
        return (
          <Toast key={id} onRemove={() => removeToast(id)} {...rest}>
            {description}
          </Toast>
        )
      })}
    </span>
  )
})

ToastManager.propTypes = {
  /**
   * Function called with the `this.notify` function.
   */
  bindNotify: PropTypes.func.isRequired,

  /**
   * Function called with the `this.remove` function.
   */
  bindRemove: PropTypes.func.isRequired,

  /**
   * Function called with the `this.getToasts` function.
   */
  bindGetToasts: PropTypes.func.isRequired,

  /**
   * Function called with the `this.closeAll` function.
   */
  bindCloseAll: PropTypes.func.isRequired
}

export default ToastManager
