/* @ts-ignore This is a plain-js module, but the types below should be accurate */
import _once from 'jscodeshift/src/utils/once'

const once = <TFunction extends Function>(fn: TFunction): TFunction => _once(fn)

export { once }
