export type GenericObject<TValue> = { [key: string]: TValue }
export type GenericObjectWithKeys<TObject, TValue> = {
  [TKey in keyof TObject]: TValue
}
export type AnyObject = GenericObject<any>
export type GenericFunction<TValue> = (...args: any[]) => TValue
export type AnyFunction = GenericFunction<any>
