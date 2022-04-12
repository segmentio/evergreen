import { useContext } from 'react'
import { DefaultTheme } from '../../themes/default'
import { Theme } from '../../types/theme/theme'
import ThemeContext from './ThemeContext'

function useTheme<T extends Theme = DefaultTheme>(): T {
  return (useContext(ThemeContext) as any) as T
}

export default useTheme
