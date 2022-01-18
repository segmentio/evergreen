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

const hasCustomId = (settings: any) => Object.hasOwnProperty.call(settings, 'id')

const ToastManager = memo(function ToastManager(props) {
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'bindCloseAll' does not exist on type '{ ... Remove this comment to see the full error message
  const { bindCloseAll, bindGetToasts, bindNotify, bindRemove } = props

  const [toasts, setToasts] = useState([])
  const [idCounter, setIdCounter] = useState(0)

  const getToasts = () => toasts

  const closeAll = () => {
    // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'any[]' is not assignable to para... Remove this comment to see the full error message
    setToasts(toasts.map(toast => ({ ...toast, isShown: false })))
  }

  /**
   * This will set isShown on the Toast which will close the toast.
   * It won't remove the toast until onExited triggers onRemove.
   */
  const closeToast = (id: any) => {
    setToasts(
      // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'any[]' is not assignable to para... Remove this comment to see the full error message
      toasts.map(toast => {
        // @ts-expect-error ts-migrate(2339) FIXME: Property 'id' does not exist on type 'never'.
        if (toast.id === id) {
          return {
            // @ts-expect-error ts-migrate(2698) FIXME: Spread types may only be created from object types... Remove this comment to see the full error message
            ...toast,
            isShown: false
          }
        }

        return toast
      })
    )
  }

  const safeCloseToast = (id: any) => {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'id' does not exist on type 'never'.
    const toastToRemove = toasts.find(toast => String(toast.id).startsWith(id))

    if (toastToRemove) {
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'id' does not exist on type 'never'.
      closeToast(toastToRemove.id)
    }
  }

  const removeToast = (id: any) => {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'id' does not exist on type 'never'.
    const updatedToasts = toasts.filter(toast => !String(toast.id).startsWith(id))
    setToasts(updatedToasts)
    return updatedToasts
  }

  const createToastInstance = (title: any, settings: any) => {
    const uniqueId = idCounter
    setIdCounter(idCounter + 1)
    const id = hasCustomId(settings) ? `${settings.id}-${uniqueId}` : uniqueId

    return {
      id,
      title,
      description: settings.description,
      hasCloseButton: settings.hasCloseButton ?? true,
      duration: settings.duration || 5,
      close: () => safeCloseToast(id),
      intent: settings.intent
    }
  }

  const notify = (title: any, settings: any) => {
    let tempToasts = toasts
    if (hasCustomId(settings)) {
      tempToasts = removeToast(settings.id)
    }

    const instance = createToastInstance(title, settings)
    // @ts-expect-error ts-migrate(2322) FIXME: Type '{ id: string | number; title: any; descripti... Remove this comment to see the full error message
    setToasts([instance, ...tempToasts])
  }

  bindNotify(notify)
  bindRemove(safeCloseToast)
  bindGetToasts(getToasts)
  bindCloseAll(closeAll)

  return (
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'StyleAttribute' is not assignable to type 's... Remove this comment to see the full error message
    <span className={wrapperClass}>
      // @ts-expect-error ts-migrate(2700) FIXME: Rest types may only be created from object types.
      {toasts.map(({ description, id, ...rest }) => {
        return (
          <Toast key={id} onRemove={() => removeToast(id)} {...rest}>
            {description}
          </Toast>
        )
      })}
    </span>
  )
})

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'Named... Remove this comment to see the full error message
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
