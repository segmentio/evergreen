import isDev from './isDev'
import hasOwnProperty from './hasOwnProperty'

function missingStateWarning({ cb, items, props }) {
  if (!isDev) return
  props.forEach(prop => {
    if (!hasOwnProperty(items, prop)) {
      cb(prop)
    }
  })
}

export default missingStateWarning
