import { AnyObject } from '../../types/helper'

export default (obj: AnyObject, prop: string) =>
  Object.prototype.hasOwnProperty.call(obj, prop)
