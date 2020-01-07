import { useContext } from 'react'
import { ThemeProvider, ThemeConsumer } from './ThemeContext'

function useTheme() {
  return useContext({ Consumer: ThemeConsumer, Provider: ThemeProvider })
}

export default useTheme
