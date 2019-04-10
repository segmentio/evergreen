export default (obj: { [key: string]: any }, prop: string) =>
  Object.prototype.hasOwnProperty.call(obj, prop)
