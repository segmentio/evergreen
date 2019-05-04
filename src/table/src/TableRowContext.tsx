import React from 'react'

/**
 * Use React 16.3+ createContext API.
 */
const {
  Provider: TableRowProvider,
  Consumer: TableRowConsumer
} = React.createContext()

export { TableRowProvider, TableRowConsumer }
