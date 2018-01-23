import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

export default class Sidebar extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    groups: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        links: PropTypes.arrayOf(
          PropTypes.shape({
            to: PropTypes.string,
            label: PropTypes.string
          })
        )
      })
    )
  }

  static defaultProps = {
    groups: []
  }

  render() {
    const { children, groups, ...props } = this.props
    return (
      <aside className="MainLayout-sidebar Sidebar" {...props}>
        <div className="Sidebar-inner">
          {groups.map(group => {
            return (
              <div key={group.title} className="NavGroup">
                <h3 className="NavGroup-title">{group.title}</h3>
                <nav className="NavGroup-nav">
                  {group.links.map(({ label, to }) => (
                    <Link key={to} activeClassName="is-active" to={to}>
                      {label}
                    </Link>
                  ))}
                </nav>
              </div>
            )
          })}
        </div>
      </aside>
    )
  }
}
