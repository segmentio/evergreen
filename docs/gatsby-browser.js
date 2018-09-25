const { NODE_ENV = 'development' } = process.env

// eslint-disable-next-line import/prefer-default-export
export const onRouteUpdate = () => {
  if (!window.analytics || typeof window.analytics.page !== 'function') {
    if (NODE_ENV === 'development') {
      console.warn('Unable to locate analytics.js')
    }
    return
  }

  window.analytics.page()
}
