import React from 'react'

/**
 * Use React 16.3+ createContext API.
 */
const {
  Consumer: TableRowConsumer,
  Provider: TableRowProvider
} = React.createContext()

export { TableRowProvider, TableRowConsumer }
