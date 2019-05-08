import isDev from './isDev'
import hasOwnProperty from './hasOwnProperty'

function missingStateWarning({ items, props, cb }) {
  if (!isDev) return
  props.forEach(prop => {
    if (!hasOwnProperty(items, prop)) {
      cb(prop)
    }
  })
}

export default missingStateWarning
