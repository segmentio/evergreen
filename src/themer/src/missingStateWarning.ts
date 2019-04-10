import hasOwnProperty from './hasOwnProperty'
import isDev from './isDev'

function missingStateWarning({
  items,
  props,
  cb
}: {
  items: { [key: string]: any }
  props: string[]
  cb: (...args: any[]) => any
}) {
  if (!isDev) return
  props.forEach(prop => {
    if (!hasOwnProperty(items, prop)) {
      cb(prop)
    }
  })
}

export const logMissingState = (
  call: string,
  items: { [key: string]: any }
) => (prop: string) => {
  console.error(`Themer.${call}() is missing a ${prop} item`, items)
}

export default missingStateWarning
