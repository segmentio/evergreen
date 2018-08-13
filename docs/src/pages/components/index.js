import React from 'react'
import { push } from 'gatsby'
import * as components from '../../../../src'
import TopBar from '../../components/TopBar'
import componentRoutes from '../../componentRoutes'
import ComponentsSidebar from '../../components/ComponentsSidebar'
import Layout from '../../components/Layout'

const { Table, Icon } = components

export default () => {
  return (
    <Layout>
      <div className="MainLayout">
        <TopBar />
        <main className="MainLayout-main">
          <div className="MainLayout-content">
            <section className="Container">
              <div className="Content">
                <h1>Component Status</h1>
              </div>

              <Table marginTop={40} border={false}>
                <Table.Head>
                  <Table.TextHeaderCell flex={2}>
                    Component
                  </Table.TextHeaderCell>
                  <Table.TextHeaderCell>Available</Table.TextHeaderCell>
                  <Table.TextHeaderCell>Docs</Table.TextHeaderCell>
                </Table.Head>
                <Table.Body>
                  {componentRoutes.map(component => {
                    return (
                      <Table.Row
                        key={component.name}
                        isSelectable
                        onSelect={() => push(component.path)}
                      >
                        <Table.TextCell
                          flex={2}
                          textProps={{ size: 400, fontWeight: 500 }}
                        >
                          {component.sidebarOverride || component.name}
                        </Table.TextCell>
                        <Table.Cell>
                          <Icon icon="tick-circle" color="success" size={14} />
                        </Table.Cell>
                        <Table.Cell>
                          <Icon icon="tick-circle" color="success" size={14} />
                        </Table.Cell>
                      </Table.Row>
                    )
                  })}
                </Table.Body>
              </Table>
            </section>
          </div>
          <ComponentsSidebar />
        </main>
      </div>
    </Layout>
  )
}
