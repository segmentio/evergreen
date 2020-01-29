import cloneDeep from 'lodash.clonedeep'

const extend = theme => {
  const clone = cloneDeep(theme)
  clone.extend = () => extend(clone)
  return clone
}

export default extend
