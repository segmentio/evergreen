import React from 'react'
import { push } from 'gatsby'
import {
  Table,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TextTableHeaderCell,
  TextTableCell
} from '../../../../src'
import TopBar from '../../components/TopBar'
import componentRoutes from '../../componentRoutes'
import ComponentsSidebar from '../../components/ComponentsSidebar'

export default () => {
  return (
    <div className="MainLayout">
      <TopBar />
      <main className="MainLayout-main">
        <div className="MainLayout-content">
          <section className="Container">
            <div className="Content">
              <h1>Component Status</h1>
            </div>

            <Table marginTop={40} border={false}>
              <TableHead>
                <TextTableHeaderCell borderRight={false} flex={2}>
                  Component
                </TextTableHeaderCell>
                <TextTableHeaderCell borderRight={false}>
                  Available
                </TextTableHeaderCell>
                <TextTableHeaderCell borderRight={false}>
                  Docs
                </TextTableHeaderCell>
              </TableHead>
              <TableBody>
                {componentRoutes.map(component => {
                  return (
                    <TableRow
                      key={component.name}
                      isSelectable
                      onSelect={() => push(component.path)}
                    >
                      <TextTableCell
                        height={40}
                        flex={2}
                        borderRight={false}
                        textProps={{ size: 400, fontWeight: 500 }}
                      >
                        {component.sidebarOverride || component.name}
                      </TextTableCell>
                      <TableCell height={40} borderRight={false}>
                        {/* <CheckCircleIcon
                          size={12}
                          iconSize={12}
                          color={colors.green['500']}
                        /> */}
                      </TableCell>
                      <TableCell height={40} borderRight={false}>
                        {/* <CheckCircleIcon
                          size={12}
                          iconSize={12}
                          color={colors.green['500']}
                        /> */}
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </section>
        </div>
        <ComponentsSidebar />
      </main>
    </div>
  )
}
