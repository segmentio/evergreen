import { hasConflictingRegistration } from 'jscodeshift/src/Collection'
import { ExtendedJSCodeshift } from '../types/extended-jscodeshift'
import { Type } from 'ast-types/lib/types'

/**
 * Utility function for removing keys that have already been registered with JSCodeshift, which will
 * throw an exception if attempted for re-registration. In practice, the registration of any of these
 * methods should only happen once, but it may be called multiple times during unit tests
 */
const safelyRegisterMethods = <T extends object>(j: ExtendedJSCodeshift, methods: T, type?: Type<any>) => {
  const keys = Object.keys(methods)
  const conflictingKeys = keys.filter((key) => hasConflictingRegistration(key, type))

  conflictingKeys.forEach((conflictingKey) => {
    delete methods[conflictingKey as keyof typeof methods]
  })

  j.registerMethods<T>(methods, type)
}

export { safelyRegisterMethods }
