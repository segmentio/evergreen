import { ASTNode, ASTPath, JSCodeshift, Options } from 'jscodeshift'
import { ExtendedCollection } from './extended-collection'
import { Type } from 'ast-types/lib/types'
import { NamedTypes } from 'ast-types/gen/namedTypes'
import { builders as Builders } from 'ast-types/gen/builders'

/**
 * Strongly typed variant of JSCodeshift that provides out-of-the-box access to `ExtendedCollection`
 * without having to type-cast. Should only be used when `jscodeshift` has been wrapped with
 * `utils/register-extensions.ts`
 */
interface ExtendedJSCodeshift extends Omit<JSCodeshift, 'registerMethods'>, NamedTypes, Builders {
  (source: string, options?: Options): ExtendedCollection<any>
  (source: ASTNode | ASTNode[] | ASTPath | ASTPath[]): ExtendedCollection<any>
  <T>(source: string, options?: Options): T
  <T>(source: ASTNode | ASTNode[] | ASTPath | ASTPath[]): T
  registerMethods: <T extends object>(methods: T, type?: Type<any>) => void
}

export type { ExtendedJSCodeshift }
