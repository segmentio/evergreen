import hasOwnProperty from './hasOwnProperty'
import isDev from './isDev'

function missingStateWarning({ cb, items, props }) {
  if (!isDev) return
  props.forEach(prop => {
    if (!hasOwnProperty(items, prop)) {
      cb(prop)
    }
  })
}

export default missingStateWarning
