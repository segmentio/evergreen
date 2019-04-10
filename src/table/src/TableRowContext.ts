import * as React from 'react'

// Use React 16.3+ createContext API.
const {
  Provider: TableRowProvider,
  Consumer: TableRowConsumer
} = React.createContext(undefined)

export { TableRowProvider, TableRowConsumer }
